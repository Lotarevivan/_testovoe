<template>
    <table data-id="component-table">
      <component-row v-for="row in rows" :key="row.id">
        <slot :row="row"></slot>
      </component-row>
    </table>
</template>

<script>
import componentRow from './componentRow.vue'
export default {
  components: {
     componentRow,
  },
  props: ["tableSlot"],
  data() {
    return {
      rows: [
        { trId: 1, td:'td1' },
        { trId: 2, td:'td2'},
        { trId: 3, td:'td3'},
      ],
    };
  },

};
</script>
