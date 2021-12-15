<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <div class="mb-4">
    <h4 class="h4">Tema</h4>
  </div>
  <div>
    <div class="flex flex-wrap lg:flex-row-reverse">
      <div
        class="flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"
      >
        <button
          class="text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none"
          @click="$router.push('/tema/create')"
        >
          Tambah
        </button>
      </div>
      <div class="mb-3 w-full lg:w-1/2 flex justify-center lg:justify-start">
        <span class="inline-block w-2/12 lg:w-1/12 pt-2">Search</span>
        <input
          class="border-2 w-10/12 lg:w-6/12 transition ml-3 px-3 py-2 rounded-md focus:border-2 text-black text-sm"
          type="text"
          name="search"
          placeholder="Teks.."
          v-model="searchTerm"
        />
      </div>
    </div>
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
            color="warning"
            size="sm"
            variant="outline"
            @click="
              $router.push({
                name: 'Update Tema',
                params: { idTema: props.row.idTema },
              })
            "
            class="mx-1"
            >Edit</CButton
          >
          <CButton
            color="danger"
            size="sm"
            variant="outline"
            @click="resDelAction(props.row.idTema)"
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
  <ConfirmDelete
    :statVisible="isDeleteConfirm"
    title="Hapus data"
    msg="Apakah anda yakin akan menghapus data ini?"
    @close-modal="isDeleteConfirm = false"
    @confirm-ok="actionDelete"
  ></ConfirmDelete>
</template>

<script>
import axios from 'axios'
import Loading from 'vue3-loading-overlay'
import ConfirmDelete from '@/components/simaren/ConfirmDelete.vue'

const columns = [
  {
    label: 'ID Tema',
    field: 'idTema',
    hidden: true,
  },
  {
    label: 'Nama Sektor',
    field: 'namaSektor',
    thClass: 'text-sm',
    tdClass: 'text-sm',
  },
  {
    label: 'Nama Tema',
    field: 'namaTema',
    thClass: 'text-sm',
    tdClass: 'text-sm',
  },
  {
    label: 'Informasi Tema Yang Diharapkan',
    field: 'deskripsi',
    thClass: 'text-sm',
    tdClass: 'text-sm',
  },
  {
    label: 'Kedeputian Koord Tema',
    field: 'pjDeputi',
    thClass: 'text-sm',
    tdClass: 'text-sm',
  },
  {
    label: 'Unit Kerja PJ Tema',
    field: 'unitKerja',
    thClass: 'text-sm',
    tdClass: 'text-sm',
  },
  {
    label: 'TW Pelaporan Tema',
    field: 'triwulan',
    thClass: 'text-sm',
    tdClass: 'text-sm',
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
  components: {
    Loading,
    ConfirmDelete,
  },
  data() {
    return {
      searchTerm: '',
      columns,
      rows: null,
      loading: false,
      isDeleteConfirm: false,
      idToDel: null,
    }
  },
  async mounted() {
    this.loadTema()
  },
  methods: {
    async loadTema() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: this.$apiAddress,
        url: '/api/tema',
        params: {
          token: localStorage.getItem('token'),
        },
      })

      const responseData = await response.data

      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }

      this.rows = responseData
      this.loading = false
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
          url: `/api/tema/${this.idToDel}`,
          params: {
            token: localStorage.getItem('token'),
            nip: localStorage.getItem('nip'),
          },
        })

        this.isDeleteConfirm = false

        if (response.status == 200) {
          this.loadTema()

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
