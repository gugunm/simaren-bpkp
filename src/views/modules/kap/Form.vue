<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CCard class="mb-4">
    <CCardBody class="p-4">
      <h4 v-if="mode == 'create'" class="h4 mb-4">Tambah KAP</h4>
      <h4 v-else-if="mode == 'update'" class="h4 mb-4">Edit KAP</h4>
      <CForm @submit.prevent="submit">
        <CRow class="mb-3">
          <CFormLabel for="tahun" class="col-sm-3 col-form-label"
            >Tahun <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-2">
            <CFormInput
              type="number"
              id="tahun"
              v-model="form.tahun"
              readonly
              required
            />
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="nama-kap" class="col-sm-3 col-form-label"
            >Nama KAP <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <CFormInput
              type="text"
              id="nama-kap"
              v-model="form.namaKap"
              required
            />
          </div>
        </CRow>
        <CRow class="mb-4">
          <CFormLabel for="pj-kap" class="col-sm-3 col-form-label"
            >Unit Kerja PJ KAP <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="pj-kap"
              v-model="selectedRendal"
              :options="optionsRendal"
              placeholder="Pilih PJ KAP"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectSearch"
            >
            </VueMultiselect>
          </div>
        </CRow>
        <CRow class="mb-4 view-form">
          <div class="flex col-sm-12">
            <VueMultiselect
              id="nama-topik"
              v-model="selectedTopik"
              :options="currentOptionsTopik"
              placeholder="Pilih Topik"
              label="namaTopik"
              track-by="namaTopik"
              deselectLabel=""
              selectLabel=""
            >
            </VueMultiselect>
            <CButton
              type="button"
              class="ml-3 px-4 text-white"
              color="success"
              size="sm"
              @click="addTopik(idTopik)"
            >
              Tambah
            </CButton>
          </div>
        </CRow>
        <div class="flex flex-col">
          <div class="-my-2 sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div class="shadow-sm border-b border-gray-200 sm:rounded-lg">
                <table class="w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nama Topik
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        PJ Topik
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Informasi Topik Yang Diharapkan
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Hapus</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-if="topiks.length == 0">
                      <td colspan="4">
                        <div class="py-3 text-center text-gray-700">
                          Belum ada data
                        </div>
                      </td>
                    </tr>
                    <tr v-else v-for="topik in topiks" :key="topik.nama">
                      <td class="px-6 py-2">
                        <div class="text-sm text-gray-900">
                          {{ topik.nama }}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ topik.pj }}
                        </div>
                      </td>
                      <td class="px-6 py-2">
                        <p class="text-sm break-normal text-gray-900">
                          {{ topik.deskripsi }}
                        </p>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                      >
                        <button
                          class="text-red-600 hover:text-red-900"
                          @click="hapusTopikLokal(topik.idTopik)"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- <pre> topik {{ topiks }}</pre> -->
        <!-- <pre> topik {{ form.dataTopik }}</pre> -->

        <CRow class="mt-8 view-form">
          <CCol sm="12" lg="6" class="mb-3">
            <CButton
              v-if="mode != 'view'"
              variant="outline"
              color="dark"
              @click="$router.push('/kap')"
              class="px-5"
            >
              Batal
            </CButton>
          </CCol>
          <CCol
            v-if="mode == 'create' || mode == 'update'"
            sm="12"
            md="6"
            class="flex content-center justify-end pr-3 mb-3"
          >
            <CButton
              type="button"
              class="ml-1 px-5 text-white"
              color="danger"
              @click="reset"
            >
              Reset
            </CButton>
            <CButton type="submit" color="info" class="px-5 ml-2 text-white">
              <div v-if="loading">
                <CSpinner color="white" size="sm" class="mr-2" /> Simpan
              </div>
              <p v-else>Simpan</p>
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
  </CCard>
</template>

<script>
import axios from 'axios'
import VueMultiselect from 'vue-multiselect'
import Loading from 'vue3-loading-overlay'

export default {
  components: { Loading, VueMultiselect },
  props: ['mode', 'idKap'],
  data() {
    return {
      form: this.getEmptyForm(),
      submitted: false,
      loading: false,
      selectedRendal: null,
      optionsRendal: [],
      selectedTopik: null,
      idTopik: null,
      optionsTopik: [],
      currentOptionsTopik: [],
      editData: {},
      topiks: [],
    }
  },
  watch: {
    selectedRendal: function (val) {
      if (val) {
        this.form.idUnitKerjaKap = val.id
      }
    },
    selectedTopik: function (val) {
      if (val) {
        this.idTopik = val.idTopik
      }
    },
    // topiks: {
    //   handler(val) {
    //     if (val.length > 0) {
    //       this.form.dataTopik = val.map((v) => v.idTopik)
    //     }
    //   },
    //   deep: true,
    // },
  },
  async mounted() {
    this.form.tahun = localStorage.tahun

    this.optionsRendal = await this.$store.dispatch('loadListRendal')

    if (this.mode == 'create') {
      this.optionsTopik = await this.$store.dispatch('loadTopikKap')
      this.currentOptionsTopik = this.optionsTopik
    } else if (this.mode == 'update') {
      this.loading = true
      this.optionsTopik = await this.$store.dispatch('loadTopikKapEdit')
      await this.loadKapById()

      const dataRendal = this.optionsRendal.filter((r) => {
        return r.id == this.form.idUnitKerjaKap
      })
      this.selectedRendal = dataRendal[0]

      this.editData.idTopik
        .split(',')
        .map((a) => Number(a))
        .forEach((el) => {
          this.addTopik(el)
        })
    }
  },
  methods: {
    viewSelectSearch({ alias, deskripsi }) {
      return `${alias} - ${deskripsi}`
    },

    addTopik(idTopik) {
      //ambil topik yg dipilih
      const topik = this.optionsTopik.filter((t) => {
        return t.idTopik == idTopik
      })[0]

      // console.log('TOPIKS')
      // console.log(idTopik)
      // console.log(this.optionsTopik)
      // console.log(topik)

      const d = {
        idTopik: topik.idTopik,
        nama: topik.namaTopik,
        pj: topik.unitKerja,
        deskripsi: topik.deskripsi,
      }
      this.topiks.push(d)
      this.form.dataTopik.push(d.idTopik)

      this.currentOptionsTopik = this.optionsTopik.filter((op) => {
        return !this.form.dataTopik.includes(op.idTopik)
      })
      // console.log('OPTIONS TOPIK')
      // console.log(this.optionsTopik)
      // console.log(this.currentOptionsTopik)
      // console.log(this.form.dataTopik)
      this.idTopik = null
      this.selectedTopik = null
    },

    hapusTopikLokal(idTopik) {
      this.topiks = this.topiks.filter((t) => {
        return t.idTopik != idTopik
      })

      const index = this.form.dataTopik.indexOf(idTopik)
      if (index > -1) {
        this.form.dataTopik.splice(index, 1)
      }

      this.currentOptionsTopik = this.optionsTopik.filter((op) => {
        return !this.form.dataTopik.includes(op.idTopik)
      })

      // console.log('OPTIONS TOPIK')
      // console.log(this.optionsTopik)
      // console.log('Current Options Topik')
      // console.log(this.currentOptionsTopik)
      // console.log('Form Data TOPIK')
      // console.log(this.form.dataTopik)
    },

    async submit() {
      const isSomeNull = this.$func.isNullOfObjElement(this.form)

      // console.log('FOORM')
      // console.log(this.form)

      if (!isSomeNull || this.topiks.length == 0) {
        this.toastWarning('Lengkapi data sebelum submit!')
      } else {
        this.submitted = true

        const resultFormData = this.appendToFormData()

        try {
          if (this.mode == 'create') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: '/api/kap',
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal menyimpan data'
            } else {
              this.loading = false
              this.$router.push('/kap')
              this.toastSuccess('Berhasil menyimpan data')
            }
          } else if (this.mode == 'update') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: `/api/kap/${this.idKap}`,
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal merubah data'
            } else {
              this.loading = false
              this.$router.push('/kap')
              this.toastSuccess('Berhasil merubah data')
            }
          }
        } catch (error) {
          setTimeout(() => {
            this.loading = false
            this.toastError('Terjadi kesalahan saat submit data')
          }, 500)
        }
      }
    },

    reset() {
      this.form = this.getEmptyForm()
      this.submitted = false

      this.selectedRendal = null
      this.currentOptionsTopik = this.optionsTopik
      this.topiks = []
    },

    getEmptyForm() {
      return {
        tahun: null,
        namaKap: null,
        idUnitKerjaKap: null,
        dataTopik: [],
      }
    },

    appendToFormData() {
      const fd = new FormData()
      if (this.mode == 'update') {
        fd.append('_method', 'PUT')
      }
      fd.append('tahun', this.form.tahun)
      fd.append('namaKap', this.form.namaKap)
      fd.append('idUnitKerjaKap', this.form.idUnitKerjaKap)
      fd.append('idTopik', this.form.dataTopik.toString())
      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    async loadKapById() {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: this.$apiAddress,
          url: `/api/kap/${this.idKap}`,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.editData = await response.data

        if (response.status == 200) {
          this.form = {
            tahun: this.editData.tahun,
            namaKap: this.editData.namaKap,
            idUnitKerjaKap: this.editData.idUnitKerjaKap,
            dataTopik: [],
          }
          // console.log('DETAIL KAP')
          // console.log(this.form)
        }

        this.loading = false
      } catch (error) {
        this.toastError(error.message)
        this.loading = false
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

    toastWarning(msg) {
      this.$toast.open({
        message: msg,
        type: 'warning',
        position: 'top-right',
        duration: 3000,
      })
    },
  },
}
</script>

<style></style>
