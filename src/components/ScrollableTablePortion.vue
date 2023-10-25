<template>
  <div class="scrollable">
    <table>
      <thead>
        <tr>
          <th v-for="headers in Object.keys(tableData[1])" :key="headers">
            {{ toTitleCase(headers) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
          <td>Data 5</td>
          <td>Data 5</td>
          <td>Data 5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>