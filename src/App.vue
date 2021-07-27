<template>
  <div name="app">
    <Menu :data="data" />
    <!-- <button @click="show3 = !show3">Click Me</button> -->

    <!-- <div style="margin-top: 20px; height: 200px;">
      <CollapseTransition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </CollapseTransition>
    </div> -->
  </div>
</template>

<script>
import Menu from "./components/Menu.vue"
// import CollapseTransition from '../utils/collapse-transition.js';

export default {
  name: "App",
  components: {
    Menu,
    // CollapseTransition
  },
  data() {
    return {
      show3: false,
      data: [
        { title: "根 1", name: 1 },
        {
          title: "根 2",
          name: 2,
          children: [
            {
              title: "根 2-1",
              name: 21,
              children: [
                { title: "根 2-1-1", name: 211 },
                { title: "根 2-1-2", name: 212 },
              ],
            },
          ],
        },
        { title: "根 3", name: 3 },
        {
          title: "根 4",
          name: 4,
          children: [
            { title: "根 4-1", name: 41 },
            { title: "根 4-2", name: 42 },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import url("./style/index.scss");
</style>
