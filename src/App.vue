<template>
  <div name="app">
    <Menu :data="data" />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue"

export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
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
// import CollapseTransition from '../base/collapse-transition';

<style lang="scss">
@import url("./style/index.scss");
</style>
