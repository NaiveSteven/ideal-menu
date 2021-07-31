/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-31 20:25:02
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-31 20:44:28
 */
import Vue from "vue"
import Menu from "./Menu/Menu.vue"
import MenuItem from "./Menu/MenuItem.vue"
import SubMenu from "./Menu/SubMenu.vue"

;[Menu, MenuItem, SubMenu].forEach((item) => {
  Vue.component(item.name, item)
})

export { Menu, MenuItem, SubMenu }
