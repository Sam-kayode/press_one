<template>
  <div class="scrollable">
    <table>
      <thead>
        <TableRow>
          <TableHeader v-for="headers in Object.keys(projectData[1])" :key="headers">
            {{ toTitleCase(headers) }}
          </TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow v-for="project in projectData" :key="project">
          <TableData v-for="(projectValues, index) in Object.values(project)" :key="index">
            {{ projectValues }}
          </TableData>
        </TableRow>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableData from './TableData.vue'
import TableRow from './TableRow.vue'
import TableHeader from './TableHeader.vue'
export default {
  props: {
    projectData: {
      type: Array,
      default: () => []
    }
  },
  components: { TableData, TableHeader, TableRow },
  methods: {
    toTitleCase(str) {
      return str.replace(/_/g, ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.scrollable {
  overflow-x: auto;
  border-radius: 0 10px 0 0;


  table {
    border-collapse: collapse;
  }

  td {
    white-space: nowrap;
    padding: 28px 30px 21px 30px;
  }

  &::-webkit-scrollbar {
    height: 5px;
    width: 70px;
    background: rgb(234, 234, 234);
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(160, 160, 160);
    border-radius: 10px;
  }
}
</style>