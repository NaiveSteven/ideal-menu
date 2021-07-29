/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-30 00:34:49
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-30 00:50:47
 */
export default {
  inject: ["rootMenu"],
  computed: {
    level() {
      let parent = this.$parent
      let level = 1
      while (parent && parent.$options.componentName !== "Menu") {
        if (parent.$options.componentName === "SubMenu") {
          level += 1
        }
        parent = parent.$parent
      }
      return level
    },
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ['Menu', 'SubMenu'].indexOf(parent.$options.componentName) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
  },
}
