<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:27:07
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-30 00:54:43
-->
<template>
  <li class="sub-menu-li">
    <div
      class="menu-item-title submenu-title"
      :style="subMenuStyle"
      @click="handleClick"
    >
      <slot name="title"></slot>
      <Icon
        :type="opened ? 'md-arrow-dropup' : 'md-arrow-dropdown'"
        class="submenu-title-icon"
        size="14"
      />
    </div>
    <CollapseTransition
      ><ul v-show="opened">
        <slot name="default"></slot></ul
    ></CollapseTransition>
  </li>
</template>

<script>
import CollapseTransition from "../utils/collapse-transition"
import Bus from "../utils/eventBus"
import menuMixin from "./menu-mixin"

export default {
  name: "SubMenu",
  componentName: "SubMenu",
  components: { CollapseTransition },
  mixins: [menuMixin],
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    opened() {
      return this.rootMenu.openedNames.includes(this.name)
    },
    subMenuStyle() {
      return {
        paddingLeft: 24 * this.level + "px",
      }
    },
  },
  created() {
    Bus.$on("menu-item-click", (name) => console.log(name))
  },
  methods: {
    handleClick() {
      Bus.$emit("sub-menu-click", this.name)
    },
  },
}
</script>
