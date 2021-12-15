<template>
  <div class="mb-4">
    <h4 class="h4">Sektor</h4>
  </div>
  <div>
    <div class="flex">
      <div class="mb-3 w-1/2">
        <span>Search</span>
        <input
          class="border-2 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm"
          type="text"
          name="search"
          placeholder="Teks.."
          v-model="searchTerm"
        />
      </div>
      <div class="flex mb-3 w-1/2 align-middle justify-end">
        <button
          class="text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none"
          @click="$router.push('/sektor/create')"
        >
          Tambah
        </button>
      </div>
    </div>
    <vue-good-table
      class="mb-4"
      theme="polar-bear"
      styleClass="vgt-table striped condensed"
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records',
      }"
    >
      <template #table-row="props">
        <template v-if="props.column.field == 'actions'">
          <CButton
            color="warning"
            size="sm"
            variant="outline"
            @click="$router.push('/kap')"
            class="mx-1"
            >Edit</CButton
          >
          <CButton
            color="danger"
            size="sm"
            variant="outline"
            @click="$router.push('/kap')"
            class="mx-1"
            >Hapus</CButton
          >
        </template>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import axios from 'axios'

const columns = [
  {
    label: 'Nama Sektor',
    field: 'namaSektor',
    // filterOptions: {
    //   styleClass: 'class1',
    //   enabled: true,
    //   placeholder: 'Semua',
    //   filterDropdownItems: ['John', 'Susan'],
    // },
  },
  {
    label: 'Informasi Sektor Yang Diharapkan',
    field: 'infoSektor',
    // type: 'number',
  },
  {
    label: 'Kedeputian Koord Sektor',
    field: 'deptId',
    // type: 'date',
    // dateInputFormat: 'yyyy-MM-dd',
    // dateOutputFormat: 'dd-MM-yyyy',
  },
  {
    label: 'Unit Kerja PJ Sektor',
    field: 'unitPj',
    // type: 'percentage',
  },
  {
    label: 'TW Pelaporan Sektor',
    field: 'triwulan',
    // type: 'percentage',
  },
  {
    label: 'Actions',
    field: 'actions',
    width: '150px',
    globalSearchDisabled: true,
  },
]

const rows = [
  {
    namaSektor: 'Sektor abc',
    infoSektor: 'Hasil sektor abc adalah blablabla',
    deptId: '0001',
    unitPj: '0002',
    triwulan: 4,
  },
  {
    namaSektor: 'Sektor abc',
    infoSektor: 'Hasil sektor abc adalah blablabla',
    deptId: '0001',
    unitPj: '0002',
    triwulan: 4,
  },
]

export default {
  name: 'my-component',
  data() {
    return {
      searchTerm: '',
      columns,
      rows,
    }
  },
  async mounted() {
    this.loadSektor()
  },
  methods: {
    async loadSektor() {
      const response = await axios({
        method: 'GET',
        baseURL: this.$apiAddress,
        url: '/api/sektor',
        params: {
          token: localStorage.getItem('token'),
        },
      })

      const responseData = await response.data

      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }
      console.log('SEKTOR DATA')
      console.log(responseData)
    },
  },
}
</script>
