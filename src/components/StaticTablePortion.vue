<template>
  <table class="static">
    <thead>
      <tr>
        <th>Developer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1</td>
      </tr>
    </tbody>
  </table>
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