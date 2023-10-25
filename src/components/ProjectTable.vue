<template>
  <div class="table-container">
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
    <div class="scrollable">
      <table>
        <thead>
          <tr>
            <th v-for="headers in Object.keys(filteredData[1])" :key="headers">{{ toTitleCase(headers) }}</th>
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
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          country: 'Togo',
          developer: 'Kerluke, Howe and Hammes PLC',
          project_name: 'Wuckert, Blanda and Crooks',
          sector: 'Institutional/Public Sector',
          address: '16 Mohr Street 36215 AdamVille',
          region: 'SvenVille',
          lga: 'KamronVille',
          status: 'On hold',
          main_contractor: 'Gleason Group and Sons',
          architect: 'Macejkovic-Donnelly Inc',
          quantity_surveyor: 'Weimann, Douglas and Mertz PLC',
          structural_engineers: 'Turcotte, Sawayn and Hansen Group',
          mep_engineer: 'Howell-Hermiston LLC',
          project_manager: 'Reichert, Oberbrunner and Hettinger and Sons',
          lift_contractor: 'Zemlak, Hane and Kutch and Sons',
          bulk_earth_contractor: 'Kuvalis Inc Group',
          other: null,
          author: 1,
          content_status: 'publish',
          deleted_at: null,
          created_at: '2019-12-10 17:28:33',
          updated_at: '2019-12-10 17:28:33',
          latitude: '-75.287715',
          longitude: '63.447841',
          est_range: '$3M - $46M',
          state: 'Wyoming',
          floors: 3,
          elec_engineer: 'Towne PLC Ltd',
          piling_contractor: "O'Connell Ltd and Sons",
          legal_partners: 'Kutch-Watsica PLC'
        },
        {
          id: 2,
          country: 'Nigeria',
          developer: 'Jacobs, Wiegand and Lind LLC',
          project_name: 'Baumbach, Toy and Littel',
          sector: 'Institutional/Public Sector',
          address: '71 Dicki Street 00948 BettyeVille',
          region: 'ArchibaldVille',
          lga: 'GermanVille',
          status: 'On hold',
          main_contractor: 'Murray-Sanford LLC',
          architect: 'Graham Group Group',
          quantity_surveyor: 'Nitzsche Inc Group',
          structural_engineers: 'Ruecker Ltd LLC',
          mep_engineer: 'Muller, Block and Rau Group',
          project_manager: 'Morar-Bode Inc',
          lift_contractor: 'Quitzon LLC Inc',
          bulk_earth_contractor: 'Ratke-Thiel LLC',
          other: null,
          author: 1,
          content_status: 'publish',
          deleted_at: null,
          created_at: '2019-12-10 17:28:33',
          updated_at: '2019-12-10 17:28:33',
          latitude: '47.865983',
          longitude: '-89.370544',
          est_range: '$10M - $35M',
          state: 'Hawaii',
          floors: 7,
          elec_engineer: 'Abernathy-Labadie Inc',
          piling_contractor: 'Medhurst, Bauch and Homenick Inc',
          legal_partners: 'White-Spencer Ltd'
        },
        {
          id: 3,
          country: 'Togo',
          developer: 'Turner-Orn LLC',
          project_name: 'Beatty-Mraz',
          sector: 'Retail',
          address: '96 Strosin Street 84731 GeneVille',
          region: 'ReynaVille',
          lga: 'CitlalliVille',
          status: 'Site Clearing',
          main_contractor: 'Lynch-Armstrong Inc',
          architect: 'Fisher, Leffler and Jenkins and Sons',
          quantity_surveyor: "Ratke, Ward and O'Reilly Inc",
          structural_engineers: 'Gutmann Ltd LLC',
          mep_engineer: 'Crist, Klein and Rutherford Ltd',
          project_manager: "O'Reilly-Jacobi and Sons",
          lift_contractor: 'Berge PLC LLC',
          bulk_earth_contractor: 'Hilpert, Turcotte and Jacobson PLC',
          other: null,
          author: 1,
          content_status: 'publish',
          deleted_at: null,
          created_at: '2019-12-10 17:28:33',
          updated_at: '2019-12-10 17:28:33',
          latitude: '23.414543',
          longitude: '-143.497474',
          est_range: '$7M - $22M',
          state: 'Iowa',
          floors: 5,
          elec_engineer: 'Pollich-Waters Ltd',
          piling_contractor: 'Roob Group PLC',
          legal_partners: 'Zieme, Douglas and Bailey Inc'
        },
        {
          id: 4,
          country: 'Nigeria',
          developer: 'Miller-Considine LLC',
          project_name: 'Morissette PLC',
          sector: 'Office',
          address: '29 Brekke Street 48483 CollinVille',
          region: 'ReynaVille',
          lga: 'HarleyVille',
          status: 'Completed',
          main_contractor: 'Kozey, Hansen and Price LLC',
          architect: 'Goodwin PLC Inc',
          quantity_surveyor: 'Steuber-Reichel and Sons',
          structural_engineers: 'Schoen-Rice Inc',
          mep_engineer: 'White Inc LLC',
          project_manager: 'Bernhard Inc LLC',
          lift_contractor: 'Balistreri-Douglas PLC',
          bulk_earth_contractor: 'Kessler and Sons PLC',
          other: null,
          author: 1,
          content_status: 'publish',
          deleted_at: null,
          created_at: '2019-12-10 17:28:33',
          updated_at: '2019-12-10 17:28:33',
          latitude: '88.008399',
          longitude: '103.65787',
          est_range: '$3M - $47M',
          state: 'North Dakota',
          floors: 1,
          elec_engineer: 'Greenfelder, Howe and Rippin Ltd',
          piling_contractor: 'Oberbrunner and Sons Group',
          legal_partners: 'Nikolaus, Gibson and Bradtke PLC'
        }
      ]
    }
  },
  computed: {
    filteredData() {
      return this.data.map((originalObject) => {
        const {
          project_name,
          developer,
          main_contractor,
          area,
          state,
          status,
          sector,
          address,
          region,
          lga
        } = originalObject

        return {
          project_name,
          developer,
          main_contractor,
          area,
          state,
          status,
          sector,
          address,
          region,
          lga
        }
      })
    }
  },
  methods: {
    toTitleCase(str) {
      return str.replace(/_/g, ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }
  }
}
</script>

<style>
</style>