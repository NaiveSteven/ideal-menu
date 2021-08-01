<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-31 21:59:24
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-02 00:10:54
-->
<template>
  <!-- <div>sadfsdf</div> -->
  <Menu key="menuTemplate" menuKey="menuTemplate">
    <MenuItem name="11#">菜单1</MenuItem>
    <MenuItem name="21#">菜单2</MenuItem>
    <SubMenu name="31#">
      <template #title>
        <Icon type="ios-paper" size="20" />
        <span>菜单3</span>
      </template>
      <MenuItem name="41#">菜单3-1</MenuItem>
      <MenuItem name="51#">菜单3-2</MenuItem>
    </SubMenu>
  </Menu>
</template>

<script>
import { Icon } from "view-design"
export default {
  name: "MenuTemplatePage",
  components: { Icon },
  data() {
    return {
      defaultActiveName: "211",
    }
  },
}
</script>
