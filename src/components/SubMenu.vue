<template>
  <li>
    <div class="menu-item-title submenu-title">
      <slot name="title"></slot>
      <Icon type="md-arrow-dropdown" class="submenu-title-icon" size="14"/>
      <!-- <Icon type="md-arrow-dropup" /> -->
    </div>
    <ul>
      <slot name="default"></slot>
    </ul>
  </li>
</template>

<script>
// import CollapseTransition from '../base/collapse-transition';

export default {
  name: "SubName",
}
</script>
