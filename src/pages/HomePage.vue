<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:13:37
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-01 23:24:56
-->
<template>
  <div class="root">
    <Menu
      :data="DEMO_LIST_DATA"
      :defaultActiveName="defaultActiveName"
      class="menu"
      @change="handleMenuChange"
      key="home"
      menuKey="home"
    />
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import { DEMO_LIST_DATA } from "../const/index"
export default {
  name: "HomePage",
  data() {
    return {
      DEMO_LIST_DATA,
      defaultActiveName: "",
    }
  },
  watch: {
    $route: {
      handler() {
        if (
          ["menu-default-active", "menu-template"].includes(this.$route.name)
        ) {
          this.defaultActiveName = this.$route.name
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleMenuChange(name) {
      if (this.$route.name !== name) {
        this.$router.push({
          name,
        })
      }
    },
  },
}
</script>

<style lang="scss">
.root {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .menu {
    height: 100vh;
  }
  .view {
    flex: 1;
  }
}
</style>
