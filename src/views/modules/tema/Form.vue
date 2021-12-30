<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CCard class="mb-4">
    <CCardBody class="p-4">
      <h4 v-if="mode == 'create'" class="h4 mb-4">Tambah Tema</h4>
      <h4 v-else-if="mode == 'update'" class="h4 mb-4">Edit Tema</h4>
      <CRow class="mb-3" v-if="mode == 'update'">
        <CFormLabel for="tahun" class="col-sm-3 col-form-label">ID </CFormLabel>
        <div class="col-sm-2">
          <CFormInput v-model="editData.idTema" readonly />
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
            <CFormInput
              type="text"
              id="nama-tema"
              v-model="form.namaTema"
              required
            />
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="info-tema" class="col-sm-3 col-form-label"
            >Informasi Tema Yang Diharapkan
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <CFormTextarea
              id="info-tema"
              rows="3"
              v-model="form.deskripsi"
              required
              placeholder="Info A; Info B; Info C;"
            ></CFormTextarea>
            <p class="text-sm mt-2 text-red-500">
              note : pisahkan informasi tema dengan titik koma ';'
            </p>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="deputi-tema" class="col-sm-3 col-form-label"
            >Kedeputian Koord Tema
            <span class="text-red-500">*</span></CFormLabel
          >
          <!-- <div class="col-sm-9">
            <VueMultiselect
              id="deputi-tema"
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
              id="dep-tema"
              :value="viewDeputi"
              readonly
            />
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="pj-tema" class="col-sm-3 col-form-label"
            >Unit Kerja PJ Tema <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="pj-tema"
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
          <CFormLabel for="tw-tema" class="col-sm-3 col-form-label"
            >Triwulan Pelaporan Tema
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-4">
            <VueMultiselect
              id="tw-tema"
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
              @click="$router.push('/tema')"
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
  components: { VueMultiselect, Loading },
  props: ['mode', 'idTema'],
  data() {
    return {
      form: this.getEmptyForm(),
      submitted: false,
      loading: false,
      selectedSektor: null,
      optionsSektor: [],
      viewDeputi: null,
      selectedRendal: null,
      optionsRendal: [],
      optionsTriwulan: [1, 2, 3, 4],
      editData: {},
    }
  },
  watch: {
    selectedSektor: function (val) {
      if (val) {
        this.form.idSektor = val.idSektor
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
    this.optionsRendal = await this.$store.dispatch('loadListRendal')

    if (this.mode == 'update') {
      this.loading = true
      await this.loadTemaById()

      const dataSekt = this.optionsSektor.filter((sek) => {
        return sek.idSektor == this.form.idSektor
      })
      this.selectedSektor = dataSekt[0]

      // const dataDep = this.optionsDeputi.filter((dep) => {
      //   return dep.id == this.form.idKedeputian
      // })
      // this.selectedDeputi = dataDep[0]

      const dataRend = this.optionsRendal.filter((rend) => {
        return rend.id == this.form.idUnitKerja
      })
      this.selectedRendal = dataRend[0]
    }
  },

  methods: {
    viewSelectSektor({ namaSektor }) {
      return `${namaSektor}`
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
              url: '/api/tema',
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal menyimpan data'
            } else {
              this.loading = false
              this.$router.push('/tema')
              this.toastSuccess('Berhasil menyimpan data')
            }
          } else if (this.mode == 'update') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: `/api/tema/${this.idTema}`,
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal merubah data'
            } else {
              this.loading = false
              this.$router.push('/tema')
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
      this.viewDeputi = null
      this.selectedRendal = null
    },

    getEmptyForm() {
      return {
        tahun: null,
        idSektor: null,
        namaTema: null,
        deskripsi: null,
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
      fd.append('namaTema', this.form.namaTema)
      fd.append('deskripsi', this.form.deskripsi)
      fd.append('idKedeputian', this.form.idKedeputian)
      fd.append('idUnitKerja', this.form.idUnitKerja)
      fd.append('tahun', this.form.tahun)
      fd.append('triwulan', this.form.triwulan)
      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    async loadTemaById() {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: this.$apiAddress,
          url: `/api/tema/${this.idTema}`,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.editData = await response.data

        if (response.status == 200) {
          this.form = {
            tahun: this.editData.tahun,
            idSektor: this.editData.idSektor,
            namaTema: this.editData.namaTema,
            deskripsi: this.editData.deskripsi,
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
