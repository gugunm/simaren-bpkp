<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <h4 class="h4 mb-4">Export Data</h4>
  <CCard class="mb-8">
    <CCardBody>
      <!-- <CForm @submit.prevent="submit"> -->
      <CRow class="mb-3">
        <CFormLabel for="jenis" class="col-sm-12 col-form-label"
          >Jenis Data</CFormLabel
        >
        <div class="col-sm-12">
          <VueMultiselect
            id="jenis"
            v-model="selectedJenis"
            :options="optionsJenis"
            placeholder="Pilih Jenis"
            label="deskripsi"
            track-by="deskripsi"
          >
          </VueMultiselect>
        </div>
      </CRow>
      <CRow class="mb-3">
        <CFormLabel for="unit" class="col-sm-12 col-form-label"
          >Unit Kerja</CFormLabel
        >
        <div class="col-sm-12">
          <VueMultiselect
            id="unit"
            v-model="selectedUnitKerja"
            :options="optionsUnitKerja"
            placeholder="Pilih Unit Kerja"
            label="deskripsi"
            track-by="deskripsi"
            :custom-label="viewSelectSearch"
          >
          </VueMultiselect>
        </div>
      </CRow>
      <CRow class="mt-4 mb-2 view-form">
        <div class="col-sm-12 flex justify-end">
          <export-excel
            v-if="selectedJenis && selectedUnitKerja"
            class="mr-1 w-40 text-center text-white bg-green-500 rounded py-2 cursor-pointer hover:bg-green-600"
            :data="jsonData"
            :fields="jsonFields"
            :worksheet="`${selectedJenis.deskripsi}-${selectedUnitKerja.alias}`"
            :name="`${selectedJenis.deskripsi}-${selectedUnitKerja.alias}.xls`"
          >
            Export Excel
          </export-excel>
          <!-- <button
            @click="exportPdf"
            type="button"
            class="ml-1 w-40 text-white bg-blue-500 rounded py-2 cursor-pointer hover:bg-blue-600"
          >
            Export PDF
          </button> -->
        </div>
      </CRow>

      <!-- </CForm> -->
    </CCardBody>
  </CCard>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import mixinExcel from './mixinExcel'
import mixinPdf from './mixinPdf'
import Loading from 'vue3-loading-overlay'

export default {
  components: { VueMultiselect, Loading },
  mixins: [mixinExcel, mixinPdf],
  data() {
    return {
      loading: false,
      selectedJenis: null,
      optionsJenis: [
        {
          id: 1,
          deskripsi: 'Sektor',
        },
        {
          id: 2,
          deskripsi: 'Tema',
        },
        {
          id: 3,
          deskripsi: 'Topik',
        },
        {
          id: 4,
          deskripsi: 'Kontributor',
        },
        {
          id: 5,
          deskripsi: 'KAP',
        },
        {
          id: 6,
          deskripsi: 'PKPT',
        },
      ],
      selectedUnitKerja: null,
      optionsUnitKerja: [],
      jsonFields: {},
      jsonData: [],
      jsonDataCopy: [],
      json_meta: [
        [
          {
            key: 'charset',
            value: 'utf-8',
          },
        ],
      ],
    }
  },
  watch: {
    selectedJenis: function (val) {
      switch (val.id) {
        case 1:
          this.loadSektor()
          this.selectedUnitKerja = this.optionsUnitKerja[0]
          break
        case 2:
          this.loadTema()
          this.selectedUnitKerja = this.optionsUnitKerja[0]
          break
        case 3:
          this.loadTopik()
          this.selectedUnitKerja = this.optionsUnitKerja[0]
          break
        case 4:
          this.loadKontributor()
          this.selectedUnitKerja = this.optionsUnitKerja[0]
          break
        case 5:
          this.loadKap()
          this.selectedUnitKerja = this.optionsUnitKerja[0]
          break
        case 6:
          this.loadPkpt()
          this.selectedUnitKerja = this.optionsUnitKerja[0]
          break
      }
    },
    selectedUnitKerja: function (val) {
      if (this.jsonData) {
        // console.log('DATAA BEFORE FILTER')
        // console.log(this.jsonData.length)
        // this.jsonData = this.jsonDataCopy
        if (this.selectedJenis.id == 6) {
          this.jsonData = this.jsonDataCopy
          this.jsonData = this.jsonData.filter((data) => {
            return data.namaUnitKerjaPkpt == val.alias
          })
          // console.log('DATAA AFTER FILTER')
          // console.log(this.jsonData.length)
        } else if (this.selectedJenis.id == 4) {
          this.jsonData = this.jsonDataCopy
          this.jsonData = this.jsonData.filter((data) => {
            return data.unitKontributor == val.alias
          })
        } else if (this.selectedJenis.id == 5) {
          this.jsonData = this.jsonDataCopy
          this.jsonData = this.jsonData.filter((data) => {
            return data.unitKerjaKap == val.alias
          })
        } else {
          this.jsonData = this.jsonDataCopy
          this.jsonData = this.jsonData.filter((data) => {
            return data.unitKerja == val.alias
          })
        }
      }
    },
  },
  async mounted() {
    this.selectedJenis = this.optionsJenis[0]
    this.optionsUnitKerja = await this.$store.dispatch(
      'loadListUnitKontributor',
    )
    this.optionsUnitKerja.unshift({
      alias: 'All',
      deskripsi: 'Semua Data',
      id: 999999,
      idWilayahDati1: 999999,
      parentId: 999999,
    })
    this.selectedUnitKerja = this.optionsUnitKerja[0]
  },

  methods: {
    viewSelectSearch({ alias, deskripsi }) {
      return `${alias} - ${deskripsi}`
    },
  },
}
</script>

<style></style>
