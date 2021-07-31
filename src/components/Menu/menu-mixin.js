/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-30 00:34:49
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-31 11:08:46
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
    parentMenus() {
      let parents = [this.$parent.name]
      let parent = this.$parent
      while (parent && parent.$options.componentName !== "Menu") {
        if (parent.$options.componentName === "SubMenu") {
          parents.push(parent.$parent.name)
        }
        parent = parent.$parent
      }
      return parents
    },
  },
}
