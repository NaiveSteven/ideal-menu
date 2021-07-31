<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-31 20:19:15
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-31 22:56:04
-->
<template>
  <!-- <div>asd</div> -->
  <Menu
    key="defaultActive"
    menuKey="defaultActive"
    :data="data"
    :defaultActiveName="defaultActiveName"
    @change="handleChange"
  />
</template>

<script>
export default {
  name: "MenuDefaultActivePage",
  data() {
    return {
      defaultActiveName: "211",
      data: [
        { title: "根 1", name: "1" },
        {
          title: "根 2",
          name: "2",
          children: [
            {
              title: "根 2-1",
              name: "21",
              children: [
                { title: "根 2-1-1", name: "211" },
                { title: "根 2-1-2", name: "212" },
              ],
            },
            {
              title: "根 2-2",
              name: "22",
              children: [
                { title: "根 2-2-1", name: "221" },
                { title: "根 2-2-2", name: "222" },
              ],
            },
          ],
        },
        { title: "根 3", name: "3" },
        {
          title: "根 4",
          name: "4",
          children: [
            { title: "根 4-1", name: "41" },
            { title: "根 4-2", name: "42" },
          ],
        },
      ],
    }
  },
  methods: {
    handleChange() {
      return
    },
  },
}
</script>
