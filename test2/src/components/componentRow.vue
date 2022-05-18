<template>
  <tr data-id="component-row">
    <component-c>
      <slot />
    </component-c>
  </tr>
</template>
<script>
import componentC from "./componentCell.vue";
export default {
  components: {
    componentC,
  },
};
</script>
<style>
.componentB {
  background-color: rgb(63, 116, 72);
}
</style>
