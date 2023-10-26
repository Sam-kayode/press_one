<template>
  <div class="table-container" v-if="!this.loading && projects[1]">
    <StaticTablePortion :projectData="filteredHeader" />
    <ScrollableTablePortion :projectData="filteredData"></ScrollableTablePortion>
  </div>
  <div v-if="loading">
    <LoaderAnimation />
  </div>
</template>

<script>
import ScrollableTablePortion from './ScrollableTablePortion.vue'
import StaticTablePortion from './StaticTablePortion.vue'
import LoaderAnimation from './LoaderAnimation.vue'
import axios from 'axios'
export default {
  data() {
    return {
      projects: [],
      loading: false
    }
  },
  mounted() {
    this.getProjects()
  },
  components: { ScrollableTablePortion, StaticTablePortion, LoaderAnimation },
  computed: {
    filteredData() {
      this.projects
      return this.projects.map((originalObject) => {
        const { project_name, main_contractor, state, status, sector, address, region, lga } =
          originalObject
        return {
          project_name,
          main_contractor,
          ['area']: region,
          state,
          status,
          sector,
          address,
          region,
          lga
        }
      })
    },
    filteredHeader() {
      return this.projects.map((originalObject) => {
        const { developer } = originalObject
        return {
          developer
        }
      })
    }
  },
  methods: {
    async getProjects() {
      this.loading = true
      try {
        const response = await axios.get(
          'https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/'
        )
        this.projects = response.data.data
        console.log(response)
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.table-container {
  display: flex;
  overflow-x: auto;
  width: 100vw;
  padding: 10px 5% 50px 5%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;
}

@media (max-width: 568px) {
  .table-container {
    width: fit-content;
    padding: 20px;
    margin: 0 auto;
    overflow-x: auto;
  }
}
</style>