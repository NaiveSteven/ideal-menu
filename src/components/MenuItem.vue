<template>
  <li class="menu-item" :style="menuItemStyle">
    <slot></slot>
    <!-- <Icon type="md-arrow-dropdown" />
    <Icon type="md-arrow-dropup" /> -->
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  computed: {
    menuItemStyle() {
      return {
        paddingLeft: "48px",
      }
    },
  },
}
</script>
