<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:27:01
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-02 22:35:17
-->
<template>
  <li :style="menuItemStyle" :class="menuItemClass" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
import Bus from "../../utils/event-bus"
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
        ["menu-item"]: true,
      }
    },
  },
  watch: {
    name: {
      handler(val) {
        if (val === this.rootMenu.activeName) {
          Bus.$emit("opened-menu" + this.rootMenu.menuKey, this.parentMenus)
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleClick() {
      Bus.$emit("menu-item-click" + this.rootMenu.menuKey, this.name)
      Bus.$emit("highlight-menu" + this.rootMenu.menuKey, this.parentMenus)
    },
  },
}
</script>
<style lang="scss" scoped>
@import url("../../style/index.scss");
</style>
