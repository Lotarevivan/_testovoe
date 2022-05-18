<template>
  <div id="app">
    <componentTable>
      <template slot-scope="{ row }">
        <span data-id="component-app">
        {{ row.td }}
        </span>
      </template>
    </componentTable>
  </div>
</template>

<script>
import componentTable from "./components/componentTable.vue";
export default {
  name: "App",
  components: {
    componentTable,
  },
};
</script>

<style>
table * {
  border: 1px solid black;
}
</style>
