<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <div class="mb-4">
    <h4 class="h4">PKPT</h4>
  </div>
  <div>
    <div class="flex flex-wrap lg:flex-row-reverse">
      <div
        class="flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"
      >
        <button
          v-if="isShowForNipKhusus"
          class="text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none"
          @click="$router.push('/approvepkpt/accrendal')"
        >
          Approve PKPT
        </button>
      </div>
      <div class="mb-3 w-full lg:w-1/2 flex justify-center lg:justify-start">
        <span class="inline-block w-2/12 lg:w-1/12 pt-2">Search</span>
        <input
          class="border-2 w-10/12 lg:w-6/12 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm"
          type="text"
          name="search"
          placeholder="teks yang dicari"
          v-model.lazy="searchTerm"
        />
      </div>
    </div>
    <p class="italic text-yellow-500 mb-2 text-sm blink-animation">
      <span>::: press enter untuk mencari</span>
    </p>
    <vue-good-table
      v-if="rows"
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
            v-if="isShowForNipKhusus"
            color="warning"
            size="sm"
            variant="outline"
            @click="
              $router.push({
                name: 'Approve',
                params: { idPkpt: props.row.idPkpt },
              })
            "
            class="mx-1"
            >Approve</CButton
          >
          <CButton
            v-if="isShowForNipKhusus"
            color="danger"
            size="sm"
            variant="outline"
            @click="resDelAction(props.row.idPkpt)"
            class="mx-1"
            >Tolak</CButton
          >
        </template>
        <template v-if="props.column.field == 'namaRendalPelaporan'">
          {{
            props.row.namaRendalPelaporan
              ? props.row.namaRendalPelaporan
              : props.row.namaUnitKerjaPkpt
          }}
        </template>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
  <ConfirmDelete
    :statVisible="isDeleteConfirm"
    title="Hapus data"
    msg="Apakah anda yakin akan menghapus data ini?"
    @close-modal="isDeleteConfirm = false"
    @confirm-ok="actionDelete"
  />
</template>

<script>
import axios from 'axios'
import ConfirmDelete from '@/components/simaren/ConfirmDelete.vue'
import Loading from 'vue3-loading-overlay'

const columns = [
  {
    label: 'Id',
    field: 'idPkpt',
    // hidden: true,
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Kategori',
    field: 'kategori',
    // hidden: true,
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nama KAP',
    field: 'namaKap',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'PJ KAP',
    field: 'namaUnitKerjaKap',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Rendal Pelaporan',
    field: 'namaRendalPelaporan',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Unit Kerja PKPT',
    field: 'namaUnitKerjaPkpt',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nama PKPT',
    field: 'namaPkpt',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Bidang Pengawasan',
    field: 'namaBidwasPkpt',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'RMP',
    field: 'namaRmp',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'TW Pelaporan Kontributor',
    field: 'triwulan',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Actions',
    field: 'actions',
    width: '150px',
    globalSearchDisabled: true,
  },
]

export default {
  name: 'my-component',
  components: { Loading, ConfirmDelete },
  data() {
    return {
      searchTerm: '',
      columns,
      rows: [],
      loading: false,
      isDeleteConfirm: false,
      idToDel: null,
      isShowForNipKhusus: false,
    }
  },
  async mounted() {
    this.loadPkpt()
    this.isShowForNipKhusus = await this.$func.isNipAllowToAdd()
  },
  methods: {
    async loadPkpt() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: this.$apiAddress,
        url: '/api/approvepkpt',
        params: {
          token: localStorage.getItem('token'),
          nip: localStorage.getItem('nip'),
        },
      })
      const responseData = await response.data
      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }
      this.rows = responseData
      this.loading = false
      // console.log('SEKTOR DATA')
      // console.log(responseData)
    },

    resDelAction(id) {
      this.idToDel = id
      this.isDeleteConfirm = true
    },

    async actionDelete() {
      try {
        const response = await axios({
          method: 'DELETE',
          baseURL: this.$apiAddress,
          url: `/api/pkpt/${this.idToDel}`,
          params: {
            token: localStorage.getItem('token'),
            nip: localStorage.getItem('nip'),
          },
        })

        this.isDeleteConfirm = false

        if (response.status == 200) {
          this.loadPkpt()

          this.toastSuccess(`Berhasil menghapus data`)
        }
      } catch (error) {
        this.toastError(error.message)
      }
    },

    toastSuccess(msg) {
      this.$toast.open({
        message: msg,
        type: 'success',
        position: 'top-right',
        duration: 3000,
      })
    },

    toastError(msg) {
      this.$toast.open({
        message: msg,
        type: 'error',
        position: 'top-right',
        duration: 3000,
      })
    },
  },
}
</script>
