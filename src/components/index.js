/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-31 20:25:02
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-01 21:57:17
 */
import Vue from "vue"
import Menu from "./Menu/Menu.vue"
import MenuItem from "./Menu/MenuItem.vue"
import SubMenu from "./Menu/SubMenu.vue"
import MenuChildren from './Menu/MenuChildren.vue'

;[Menu, MenuItem, SubMenu, MenuChildren].forEach((item) => {
  Vue.component(item.name, item)
})

export { Menu, MenuItem, SubMenu }
