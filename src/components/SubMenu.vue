<template>
  <li>
    <div><slot name="title"></slot></div>
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
