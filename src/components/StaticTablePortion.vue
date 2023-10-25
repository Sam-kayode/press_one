<template>
  <table class="static">
    <thead>
      <tr>
        <th>Developer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(developer, index) in projectData" :key="index">
        <td>{{ developer.developer }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    projectData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
</style>