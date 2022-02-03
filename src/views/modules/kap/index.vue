<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <div class="mb-4">
    <h4 class="h4">KAP</h4>
  </div>
  <div>
    <div class="flex flex-wrap lg:flex-row-reverse">
      <div
        class="flex mb-3 w-full lg:w-1/2 align-middle justify-start lg:justify-end"
      >
        <button
          v-if="isShowForNipKhusus"
          class="text-sm rounded-md tracking-wide bg-green-600 text-white h-10 px-5 hover:bg-green-700 focus:bg-green-700 focus:outline-none"
          @click="$router.push('/kap/create')"
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
      class="mb-4 text-sm"
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
        <template v-if="props.column.field == 'namaTopik'">
          <!-- <div
            v-for="topik in props.row.topiks"
            :key="topik.idTopik"
            class="mb-3"
          >
            <p>{{ topik.namaTopik }}</p>
          </div> -->
          <table class="w-full">
            <!-- <thead class="bg-gray-50">
              <tr>
                <th width="250px">Nama Topik</th>
                <th width="300px">Informasi Yang Diharapkan</th>
                <th>Kontributor</th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="topik in props.row.topiks" :key="topik.idTopik">
                <td width="150px">
                  <p>{{ topik.namaTopik }}</p>
                  <!-- <p>{{ props.row.topiks.length }}</p> -->
                </td>
                <td width="250px">
                  <p>{{ topik.deskripsi }}</p>
                </td>
                <td width="200px">
                  <p class="break-all">
                    {{ topik.kontributors.join(',') }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
        <!-- <template v-if="props.column.field == 'unitKontributor'">
          <table>
            <thead class="bg-gray-50">
              <tr>
                <th>Kontributor</th>
                <th>Informasi Yang Diharapkan</th>
                <th>Triwulan</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="topik in props.row.topiks" :key="topik.idTopik">
                <tr
                  v-for="kontributor in topik.kontributors"
                  :key="kontributor.idKontributor"
                >
                  <td>
                    <p>{{ kontributor.unitKerjaKontributor }}</p>
                  </td>
                  <td>
                    <p>{{ kontributor.deskripsi }}</p>
                  </td>
                  <td>
                    <p>{{ kontributor.triwulan }}</p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </template> -->
        <!-- <div
            class="mb-3"
            v-for="topik in props.row.topiks"
            :key="topik.idTopik"
          >
            <div
              v-for="(kontributor, i) in topik.kontributors"
              :key="kontributor.idKontributor"
            >
              <p class="text-center">{{ kontributor.unitKerjaKontributor }}</p>
              <hr v-if="i < topik.kontributors.length - 1" />
            </div>
          </div> -->
        <!-- <template v-if="props.column.field == 'deskripsiInformasi'">
          <div v-for="topik in props.row.topiks" :key="topik.idTopik">
            <div
              v-for="kontributor in topik.kontributors"
              :key="kontributor.idKontributor"
            >
              <p>{{ kontributor.deskripsi }}</p>
              <hr />
            </div>
          </div>
        </template>
        <template v-if="props.column.field == 'triwulan'">
          <div v-for="topik in props.row.topiks" :key="topik.idTopik">
            <div
              v-for="kontributor in topik.kontributors"
              :key="kontributor.idKontributor"
            >
              <p class="text-center">{{ kontributor.triwulan }}</p>
              <hr />
            </div>
          </div>
        </template> -->
        <div v-if="props.column.field == 'actions'" class="text-center">
          <CButton
            v-if="isShowForNipKhusus"
            color="warning"
            size="sm"
            variant="outline"
            @click="
              $router.push({
                name: 'Update KAP',
                params: { idKap: props.row.idKap },
              })
            "
            class="mb-2 w-full"
            >Edit</CButton
          >
          <CButton
            v-if="isShowForNipKhusus"
            color="danger"
            size="sm"
            variant="outline"
            @click="resDelAction(props.row.idKap)"
            class="w-full"
            >Hapus</CButton
          >
        </div>
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
    field: 'idKap',
    // hidden: true,
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nama KAP',
    field: 'namaKap',
    width: '200px',
    thClass: 'text-sm',
    tdClass: 'text-sm',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'PJ KAP',
    field: 'unitKerjaKap',
    thClass: 'text-sm text-center',
    tdClass: 'text-sm text-center',
    filterOptions: {
      enabled: true, // enable filter for this column
      trigger: 'enter',
    },
  },
  {
    label: 'Nama Topik  -  Informasi Yang Diharapkan  -  Kontributor',
    field: 'namaTopik',
    thClass: 'text-sm text-center',
    tdClass: 'text-sm',
    width: '50%',
  },
  // {
  //   label: 'Informasi Topik Yang Diharapkan',
  //   field: 'infoTopik',
  // },
  // {
  //   label: 'Informasi Kontributor Yang Diharapkan',
  //   field: 'deskripsiInformasi',
  // },
  // {
  //   label: 'TW Pelaporan Kontributor',
  //   field: 'triwulan',
  // },
  {
    label: 'Actions',
    field: 'actions',
    width: '100px',
    globalSearchDisabled: true,
    thClass: 'text-sm text-center',
    tdClass: 'text-sm',
  },
]

export default {
  name: 'my-component',
  components: { ConfirmDelete, Loading },
  data() {
    return {
      searchTerm: '',
      columns,
      rows: null,
      loading: false,
      isDeleteConfirm: false,
      idToDel: null,
      isShowForNipKhusus: false,
    }
  },
  async mounted() {
    await this.loadKap()
    this.isShowForNipKhusus = await this.$func.isNipAllowToAdd()
  },
  methods: {
    async loadKap() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: this.$apiAddress,
        url: '/api/kap',
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
          url: `/api/kap/${this.idToDel}`,
          params: {
            token: localStorage.getItem('token'),
            nip: localStorage.getItem('nip'),
          },
        })

        this.isDeleteConfirm = false

        if (response.status == 200) {
          this.loadKap()

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
