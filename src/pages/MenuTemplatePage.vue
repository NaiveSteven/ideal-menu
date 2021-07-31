<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-31 21:59:24
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-31 22:56:16
-->
<template>
  <!-- <div>sadfsdf</div> -->
  <Menu key="menuTemplate" menuKey="menuTemplate">
    <MenuItem name="11#">MenuItemB1</MenuItem>
    <MenuItem name="21#">MenuItemB2</MenuItem>
    <SubMenu name="31#">
      <template #title>SubMenu1</template>
      <MenuItem name="41#">MenuItemB4</MenuItem>
      <MenuItem name="51#">MenuItemB5</MenuItem>
    </SubMenu>
  </Menu>
</template>

<script>
export default {
  name: "MenuTemplatePage",
  data() {
    return {
      defaultActiveName: "211",
    }
  },
}
</script>
