<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-08-01 21:50:37
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-02 00:28:06
-->
<template>
  <SubMenu :key="data.name" v-if="data.children" :name="data.name">
    <template #title>
      <Icon v-if="data.icon" size="20" :type="data.icon" />
      <span>{{ data.title }}</span>
    </template>
    <template v-for="item in data.children">
      <MenuChildren :key="item.name" :data="item"></MenuChildren>
    </template>
  </SubMenu>
  <MenuItem :key="data.name" :name="data.name" v-else>
    <span>{{ data.title }}</span>
  </MenuItem>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import SubMenu from "./SubMenu.vue"
import { Icon } from "view-design"
export default {
  name: "MenuChildren", // 可以根据自己当前的组件名 循环自己
  componentName: "MenuChildren",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    MenuItem,
    SubMenu,
    Icon,
  },
}
</script>
