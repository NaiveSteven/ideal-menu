<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:27:01
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-30 00:47:47
-->
<template>
  <li
    class="menu-item"
    :style="menuItemStyle"
    :class="menuItemClass"
    @click="handleClick"
  >
    <slot></slot>
  </li>
</template>

<script>
import Bus from "../utils/eventBus"
import menuMixin from "./menu-mixin"

export default {
  name: "MenuItem",
  mixins: [menuMixin],
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    menuItemStyle() {
      return {
        paddingLeft: 24 * this.level + "px",
      }
    },
    menuItemClass() {
      return {
        ["menu-item-active"]: this.rootMenu.activeName === this.name,
      }
    },
  },
  methods: {
    handleClick() {
      Bus.$emit("menu-item-click", this.name)
    },
  },
}
</script>
