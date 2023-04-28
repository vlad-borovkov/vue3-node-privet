<template>
  <div>
    <TableRecurse />
  </div>
</template>

<script>
import TableRecurse from "@/components/TableRecurs/TableRecurse.vue";
import { useProductStore } from "@/store/index.ts";
export default {
  name: "App",
  components: { TableRecurse },

  setup() {
    const store = useProductStore();
    store.fetchTableData("table");
  },
};
</script>

<style>
</style>
