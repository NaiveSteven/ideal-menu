/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-30 00:34:49
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-01 22:41:21
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
      // 用户使用 Menu 时，是传入 data，还是使用 slot 模板写法
      const isTemplate = this.rootMenu.data.length === 0
      let parents = isTemplate ? [this.$parent.name] : []
      let parent = this.$parent
      while (parent && parent.$options.componentName !== "Menu") {
        if (parent.$options.componentName === "SubMenu") {
          if (isTemplate) {
            parents.push(parent.$parent.name)
          } else {
            parents.push(parent.$parent.data.name)
          }
        }
        parent = parent.$parent
      }
      return parents
    },
  },
}
