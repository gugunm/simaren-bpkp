<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CCard class="mb-4">
    <CCardBody class="p-4">
      <h4 v-if="mode == 'create'" class="h4 mb-4">Tambah Topik</h4>
      <h4 v-else-if="mode == 'update'" class="h4 mb-4">Edit Topik</h4>
      <CRow class="mb-3" v-if="mode == 'update'">
        <CFormLabel for="tahun" class="col-sm-3 col-form-label">ID </CFormLabel>
        <div class="col-sm-2">
          <CFormInput v-model="editData.idTopik" readonly />
        </div>
      </CRow>
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
          <CFormLabel for="nama-sektor" class="col-sm-3 col-form-label"
            >Nama Sektor <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="nama-sektor"
              v-model="selectedSektor"
              :options="optionsSektor"
              placeholder="Pilih Sektor"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectSektor"
            >
            </VueMultiselect>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="nama-tema" class="col-sm-3 col-form-label"
            >Nama Tema <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="nama-tema"
              v-model="selectedTema"
              :options="optionsTema"
              placeholder="Pilih Tema"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectTema"
            >
            </VueMultiselect>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="nama-topik" class="col-sm-3 col-form-label"
            >Nama Topik <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <CFormInput
              type="text"
              id="nama-topik"
              v-model="form.namaTopik"
              required
            />
          </div>
        </CRow>
        <!-- <CRow class="mb-3">
          <CFormLabel for="info-topik" class="col-sm-3 col-form-label"
            >Informasi Topik Yang Diharapkan
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <CFormTextarea
              id="info-topik"
              rows="3"
              v-model="form.deskripsi"
              required
              placeholder="Info A; Info B; Info C;"
            ></CFormTextarea>
            <p class="text-sm mt-2 text-red-500">
              note : pisahkan informasi topik dengan titik koma ';'
            </p>
          </div>
        </CRow> -->
        <CRow class="mb-3">
          <CCol sm="3">
            <CFormLabel for="sumber-dana" class="col-form-label"
              >Informasi Topik Yang Diharapkan<span class="text-red-500"
                >*</span
              ></CFormLabel
            >
          </CCol>
          <CCol sm="9">
            <CRow
              v-for="item in this.infoTopikList"
              :key="item.info"
              class="mb-3"
            >
              <!-- <pre>{{ infoTopikList }}</pre> -->
              <!-- <p class="hidden">{{ index }}</p> -->
              <CCol sm="8">
                <CFormTextarea
                  rows="1"
                  type="text"
                  readonly
                  :value="item.info"
                />
              </CCol>
              <CCol sm="2">
                <CFormInput
                  type="number"
                  id="info"
                  placeholder="No Urut"
                  v-model="item.nomorUrut"
                  readonly
                />
              </CCol>
              <CCol sm="2">
                <CButton
                  type="submit"
                  color="danger"
                  size=""
                  shape="rounded-0"
                  class="w-full text-white"
                  @click="deleteInfoTopik(item.nomorUrut)"
                >
                  Hapus
                </CButton>
              </CCol>
            </CRow>
            <CForm @submit.prevent="addInfoTopik">
              <CRow>
                <CCol sm="8">
                  <CFormInput
                    type="text"
                    id="info"
                    placeholder="Info"
                    v-model="infoCurrentTopik"
                    required
                  />
                </CCol>
                <CCol sm="2">
                  <CFormInput
                    type="number"
                    id="info"
                    placeholder="No Urut"
                    v-model="infoNomorUrut"
                    required
                  />
                </CCol>
                <CCol sm="2">
                  <CButton
                    type="submit"
                    color="primary"
                    size=""
                    shape="rounded-0"
                    class="w-full"
                  >
                    Simpan
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="deputi-topik" class="col-sm-3 col-form-label"
            >Kedeputian Koord Topik
            <span class="text-red-500">*</span></CFormLabel
          >
          <!-- <div class="col-sm-9">
            <VueMultiselect
              id="deputi-topik"
              v-model="selectedDeputi"
              :options="optionsDeputi"
              placeholder="Pilih Deputi Koordinator"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectSearch"
            >
            </VueMultiselect>
          </div> -->
          <div class="col-sm-9">
            <CFormInput
              type="text"
              id="dep-topik"
              :value="viewDeputi"
              readonly
            />
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="pj-topik" class="col-sm-3 col-form-label"
            >Unit Kerja PJ Topik <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="pj-topik"
              v-model="selectedRendal"
              :options="optionsRendal"
              placeholder="Pilih Unit Kerja Penanggungjawab"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectSearch"
            >
            </VueMultiselect>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="tw-topik" class="col-sm-3 col-form-label"
            >Triwulan Pelaporan Topik
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-4">
            <VueMultiselect
              id="tw-topik"
              v-model="form.triwulan"
              :options="optionsTriwulan"
              :multiple="true"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Pilih Triwulan"
            >
            </VueMultiselect>
            <!-- <pre>{{ form.triwulan }}</pre> -->
          </div>
        </CRow>
        <CRow class="mt-8 view-form">
          <CCol sm="12" lg="6" class="mb-3">
            <CButton
              v-if="mode != 'view'"
              variant="outline"
              color="dark"
              @click="$router.push('/topik')"
              class="px-5"
              shape="rounded-0"
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
              shape="rounded-0"
            >
              Reset
            </CButton>
            <CButton
              type="submit"
              shape="rounded-0"
              color="info"
              class="px-5 ml-2 text-white"
            >
              <div v-if="loading">
                <CSpinner color="white" size="sm" class="mr-2" />
                Simpan
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
  components: { VueMultiselect, Loading },
  props: ['mode', 'idTopik'],
  data() {
    return {
      form: this.getEmptyForm(),
      submitted: false,
      loading: false,
      selectedSektor: null,
      optionsSektor: [],
      selectedTema: null,
      optionsTema: [],
      // selectedDeputi: null,
      // optionsDeputi: [],
      viewDeputi: null,
      selectedRendal: null,
      optionsRendal: [],
      optionsTriwulan: [1, 2, 3, 4],
      editData: {},
      infoTopikList: [],
      infoCurrentTopik: '',
      infoNomorUrut: null,
    }
  },
  watch: {
    selectedSektor: function (val) {
      if (val) {
        this.form.idSektor = val.idSektor
        this.selectedTema = ''
        this.getListTema()
      }
    },
    selectedTema: function (val) {
      if (val) {
        this.form.idTema = val.idTema
      }
    },
    // selectedDeputi: function (val) {
    //   if (val) {
    //     this.form.idKedeputian = val.id
    //   }
    // },
    selectedRendal: function (val) {
      if (val) {
        this.form.idUnitKerja = val.id
        this.form.idKedeputian = val.parentId
        this.viewDeputi = `${val.deputi} - ${val.namaDeputi}`
      }
    },
  },
  async mounted() {
    this.form.tahun = localStorage.tahun

    this.optionsSektor = await this.$store.dispatch('loadListSektor')
    // this.optionsDeputi = await this.$store.dispatch('loadListDeputi')
    // this.optionsRendal = await this.$store.dispatch('loadListRendal')
    this.optionsRendal = await this.$store.dispatch('loadListUnitKontributor')

    if (this.mode == 'update') {
      this.loading = true
      await this.loadTopikById()

      const dataSekt = this.optionsSektor.filter((sek) => {
        return sek.idSektor == this.form.idSektor
      })
      this.selectedSektor = dataSekt[0]

      await this.getListTema()
      const dataTema = this.optionsTema.filter((tema) => {
        return tema.idTema == this.form.idTema
      })
      this.selectedTema = dataTema[0]

      // const dataDep = this.optionsDeputi.filter((dep) => {
      //   return dep.id == this.form.idKedeputian
      // })
      // this.selectedDeputi = dataDep[0]

      const dataRend = this.optionsRendal.filter((rend) => {
        return rend.id == this.form.idUnitKerja
      })
      this.selectedRendal = dataRend[0]

      const infoTopiks = await this.$store.dispatch('loadListInfoTopik', {
        idTopik: this.idTopik,
      })
      this.infoTopikList = infoTopiks.map((item) => {
        return {
          // id: item.idInfoTopik,
          info: item.detailInfoTopik,
          nomorUrut: item.noUrut,
        }
      })
    }
  },

  methods: {
    addInfoTopik() {
      this.infoTopikList.push({
        nomorUrut: this.infoNomorUrut,
        info: this.infoCurrentTopik,
      })
      this.infoCurrentTopik = ''
    },

    deleteInfoTopik(noUrut) {
      this.infoTopikList.filter((item) => {
        if (item.nomorUrut == noUrut) {
          this.infoTopikList.splice(this.infoTopikList.indexOf(item), 1)
        }
      })
    },

    async getListTema() {
      this.optionsTema = await this.$store.dispatch('loadListTema', {
        idSektor: this.form.idSektor,
      })
    },

    viewSelectSektor({ namaSektor }) {
      return `${namaSektor}`
    },

    viewSelectTema({ namaTema }) {
      return `${namaTema}`
    },

    viewSelectSearch({ alias, deskripsi }) {
      return `${alias} - ${deskripsi}`
    },

    async submit() {
      const isSomeNull = this.$func.isNullOfObjElement(this.form)

      if (isSomeNull) {
        this.submitted = true

        const resultFormData = this.appendToFormData()

        try {
          if (this.mode == 'create') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: '/api/topik',
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            const responseDataTopik = await response.data

            this.infoTopikList.forEach(async (item) => {
              const dataInfoTopik = {
                idTopik: responseDataTopik.id,
                idTema: parseInt(this.form.idTema),
                idSektor: parseInt(this.form.idSektor),
                detailInfoTopik: item.info,
                noUrut: parseInt(item.nomorUrut),
                nip: localStorage.getItem('nip'),
              }

              await axios({
                method: 'POST',
                baseURL: this.$apiAddress,
                url: '/api/infotopik',
                data: dataInfoTopik,
                params: {
                  token: localStorage.getItem('token'),
                },
              })
            })

            if (response.status != 200) {
              this.error = 'Gagal menyimpan data'
            } else {
              this.loading = false
              this.$router.push('/topik')
              this.toastSuccess('Berhasil menyimpan data')
            }
          } else if (this.mode == 'update') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: `/api/topik/${this.idTopik}`,
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            this.infoTopikList.forEach(async (item) => {
              const dataInfoTopik = {
                idTopik: this.idTopik,
                idTema: parseInt(this.form.idTema),
                idSektor: parseInt(this.form.idSektor),
                detailInfoTopik: item.info,
                noUrut: parseInt(item.nomorUrut),
                nip: localStorage.getItem('nip'),
              }

              await axios({
                method: 'POST',
                baseURL: this.$apiAddress,
                url: '/api/infotopik',
                data: dataInfoTopik,
                params: {
                  token: localStorage.getItem('token'),
                },
              })
            })

            if (response.status != 200) {
              this.error = 'Gagal merubah data'
            } else {
              this.loading = false
              this.$router.push('/topik')
              this.toastSuccess('Berhasil merubah data')
            }
          }
        } catch (error) {
          setTimeout(() => {
            this.loading = false
            this.toastError('Terjadi kesalahan saat submit data')
          }, 500)
        }
      } else {
        this.toastWarning('Lengkapi data sebelum submit!')
      }
    },
    reset() {
      this.form = this.getEmptyForm()
      this.submitted = false

      this.selectedSektor = null
      this.selectedTema = null
      this.viewDeputi = null
      this.selectedRendal = null
    },

    getEmptyForm() {
      return {
        tahun: null,
        idSektor: null,
        idTema: null,
        namaTopik: null,
        // deskripsi: null,
        idKedeputian: null,
        idUnitKerja: null,
        triwulan: null,
      }
    },

    appendToFormData() {
      const fd = new FormData()
      if (this.mode == 'update') {
        fd.append('_method', 'PATCH')
      }
      fd.append('idSektor', this.form.idSektor)
      fd.append('idTema', this.form.idTema)
      fd.append('namaTopik', this.form.namaTopik)
      // fd.append('deskripsi', this.form.deskripsi)
      fd.append('idKedeputian', this.form.idKedeputian)
      fd.append('idUnitKerja', this.form.idUnitKerja)
      fd.append('tahun', this.form.tahun)
      fd.append('triwulan', this.form.triwulan)
      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    async loadTopikById() {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: this.$apiAddress,
          url: `/api/topik/${this.idTopik}`,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.editData = await response.data

        if (response.status == 200) {
          // console.log('DETAIL TOPIK')
          // console.log(this.editData)

          this.form = {
            tahun: this.editData.tahun,
            idSektor: this.editData.idSektor,
            idTema: this.editData.idTema,
            namaTopik: this.editData.namaTopik,
            // deskripsi: this.editData.deskripsi,
            idKedeputian: this.editData.idKedeputian,
            idUnitKerja: this.editData.idUnitKerja,
            triwulan: this.editData.triwulan,
          }
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

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__tags {
  border: 1px solid var(--cui-input-border-color, #b1b7c1);
}
</style>
