<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:27:07
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-02 22:35:18
-->
<template>
  <li class="sub-menu-li">
    <div
      class="menu-item-title submenu-title"
      :style="subMenuStyle"
      @click="handleClick"
    >
      <slot name="title"></slot>
      <Icon :class="iconClass" size="14" :type="iconType" />
    </div>
    <CollapseTransition
      ><ul v-show="opened">
        <slot name="default"></slot></ul
    ></CollapseTransition>
  </li>
</template>

<script>
import CollapseTransition from "../../utils/collapse-transition"
import { Icon } from "view-design"
import Bus from "../../utils/event-bus"
import menuMixin from "./menu-mixin"

export default {
  name: "SubMenu",
  componentName: "SubMenu",
  components: { CollapseTransition, Icon },
  mixins: [menuMixin],
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isNeedHighLight: false, // 子项被选中，所有父级菜单需要高亮
      isClick: false, // 是否点击 SubMenu
      iconType: "md-arrow-dropdown",
    }
  },
  computed: {
    opened() {
      return this.rootMenu.openedNames.includes(this.name)
    },
    subMenuStyle() {
      return {
        paddingLeft: 24 * this.level + "px",
        color: this.isNeedHighLight ? "#1890ff" : "",
      }
    },
    iconClass() {
      return {
        ["submenu-title-icon"]: true,
        ["icon-arrow"]: this.isClick,
      }
    },
  },
  created() {
    // 监听 opened-menu，主要是为了页面初始化，父级 menu 高亮
    Bus.$on("opened-menu" + this.rootMenu.menuKey, (parentMenus) => {
      this.isNeedHighLight = parentMenus.includes(this.name)
      this.iconType = parentMenus.includes(this.name)
        ? "md-arrow-dropup"
        : "md-arrow-dropdown"
    })
    Bus.$on("highlight-menu" + this.rootMenu.menuKey, (parentMenus) => {
      this.isNeedHighLight = parentMenus.includes(this.name)
    })
  },
  methods: {
    handleClick() {
      this.isClick = !this.isClick
      Bus.$emit("sub-menu-click" + this.rootMenu.menuKey, this.name)
    },
  },
  beforeDestroy() {
    Bus.$off("highlight-menu" + this.rootMenu.menuKey)
    Bus.$off("opened-menu" + this.rootMenu.menuKey)
  },
}
</script>
<style lang="scss" scoped>
@import url("../../style/index.scss");
</style>
