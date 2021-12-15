<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CCard class="mb-4">
    <CCardBody class="p-4">
      <h4 v-if="mode == 'create'" class="h4 mb-4">Tambah Kontributor</h4>
      <h4 v-else-if="mode == 'update'" class="h4 mb-4">Edit Kontributor</h4>
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
            <VueMultiselect
              id="nama-topik"
              v-model="selectedTopik"
              :options="optionsTopik"
              placeholder="Pilih Topik"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectTopik"
            >
            </VueMultiselect>
          </div>
        </CRow>
        <!-- <CRow>
          <pre>{{ form.valDeputi }} - {{ form.valRendal }}</pre>
        </CRow> -->
        <CRow class="mb-3">
          <CFormLabel for="unit-kontributor" class="col-sm-3 col-form-label"
            >Unit Kerja Kontributor<span class="text-red-500"
              >*</span
            ></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="unit-kontributor"
              v-model="selectedKontributor"
              :options="optionsKontributor"
              placeholder="Pilih Unit Kerja Kontributor"
              label="deskripsi"
              track-by="deskripsi"
              :custom-label="viewSelectSearch"
            >
            </VueMultiselect>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="info-kontributor" class="col-sm-3 col-form-label"
            >Informasi Kontributor Yang Diharapkan
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <CFormTextarea
              id="info-kontributor"
              rows="3"
              v-model="form.deskripsi"
              required
              placeholder="Info A; Info B; Info C;"
            ></CFormTextarea>
            <p class="text-sm mt-2 text-red-500">
              note : pisahkan informasi kontributor dengan titik koma ';'
            </p>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="tw-tema" class="col-sm-3 col-form-label"
            >Triwulan Pelaporan Tema
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-4">
            <VueMultiselect
              id="tw-sektor"
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
              @click="$router.push('/kontributor')"
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
  props: ['mode', 'idKontributor'],
  data() {
    return {
      form: this.getEmptyForm(),
      submitted: false,
      loading: false,
      selectedSektor: null,
      optionsSektor: [],
      selectedTema: null,
      optionsTema: [],
      selectedTopik: null,
      optionsTopik: [],
      selectedKontributor: null,
      optionsKontributor: [],
      optionsTriwulan: [1, 2, 3, 4],
      editData: {},
      valDeputi: null,
      valRendal: null,
    }
  },
  watch: {
    selectedSektor: function (val) {
      if (val) {
        this.form.idSektor = val.idSektor
        this.selectedTema = ''
        this.getListTema()
        this.selectedTopik = ''
        this.getListTopik()
      }
    },
    selectedTema: function (val) {
      if (val) {
        this.form.idTema = val.idTema
        this.selectedTopik = ''
        this.getListTopik()
      }
    },
    selectedTopik: function (val) {
      if (val) {
        this.form.idTopik = val.idTopik
        this.form.valDeputi = val.idKedeputian
        this.form.valRendal = val.idUnitKerja
      }
    },
    selectedKontributor: function (val) {
      if (val) {
        this.form.idUnitKontributor = val.id
      }
    },
  },
  async mounted() {
    this.form.tahun = localStorage.tahun

    this.optionsSektor = await this.$store.dispatch('loadListSektor')
    this.optionsKontributor = await this.$store.dispatch(
      'loadListUnitKontributor',
    )

    if (this.mode == 'update') {
      this.loading = true
      await this.loadKontributorById()

      const dataSekt = this.optionsSektor.filter((sek) => {
        return sek.idSektor == this.form.idSektor
      })
      this.selectedSektor = dataSekt[0]

      await this.getListTema()
      const dataTema = this.optionsTema.filter((tema) => {
        return tema.idTema == this.form.idTema
      })
      this.selectedTema = dataTema[0]

      await this.getListTopik()
      const dataTopik = this.optionsTopik.filter((topik) => {
        return topik.idTopik == this.form.idTopik
      })
      this.selectedTopik = dataTopik[0]

      const dataKont = this.optionsKontributor.filter((kont) => {
        return kont.id == this.form.idUnitKontributor
      })
      this.selectedKontributor = dataKont[0]
    }
  },

  methods: {
    async getListTema() {
      this.optionsTema = await this.$store.dispatch('loadListTema', {
        idSektor: this.form.idSektor,
      })
    },

    async getListTopik() {
      this.optionsTopik = await this.$store.dispatch('loadListTopik', {
        idSektor: this.form.idSektor,
        idTema: this.form.idTema,
      })
    },

    viewSelectSektor({ namaSektor }) {
      return `${namaSektor}`
    },

    viewSelectTema({ namaTema }) {
      return `${namaTema}`
    },

    viewSelectTopik({ namaTopik }) {
      return `${namaTopik}`
    },

    viewSelectSearch({ alias, deskripsi }) {
      return `${alias} - ${deskripsi}`
    },

    async submit() {
      const isSomeNull = this.$func.isNullOfObjElement(this.form)

      // console.log('FOORM')
      // console.log(this.form)

      if (isSomeNull) {
        this.submitted = true

        const resultFormData = this.appendToFormData()

        try {
          if (this.mode == 'create') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: '/api/kontributor',
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal menyimpan data'
            } else {
              this.loading = false
              this.$router.push('/kontributor')
              this.toastSuccess('Berhasil menyimpan data')
            }
          } else if (this.mode == 'update') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: `/api/kontributor/${this.idKontributor}`,
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal merubah data'
            } else {
              this.loading = false
              this.$router.push('/kontributor')
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
      this.selectedTopik = null
      this.valDeputi = null
      this.valRendal = null
      this.selectedKontributor = null
    },

    getEmptyForm() {
      return {
        tahun: null,
        idSektor: null,
        idTema: null,
        idTopik: null,
        valDeputi: null,
        valRendal: null,
        idUnitKontributor: null,
        deskripsi: null,
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
      fd.append('idTopik', this.form.idTopik)
      fd.append('idKedeputian', this.form.valDeputi)
      fd.append('idUnitKerja', this.form.valRendal)
      fd.append('idUnitKontributor', this.form.idUnitKontributor)
      fd.append('deskripsi', this.form.deskripsi)
      fd.append('tahun', this.form.tahun)
      fd.append('triwulan', this.form.triwulan)
      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    async loadKontributorById() {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: this.$apiAddress,
          url: `/api/kontributor/${this.idKontributor}`,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.editData = await response.data

        if (response.status == 200) {
          // console.log('DETAIL KONTRIBUTOR')
          // console.log(this.editData)

          this.form = {
            tahun: this.editData.tahun,
            idSektor: this.editData.idSektor,
            idTema: this.editData.idTema,
            idTopik: this.editData.idTopik,
            idKedeputian: this.editData.idKedeputian,
            idUnitKerja: this.editData.idUnitKerja,
            idUnitKontributor: this.editData.idUnitKontributor,
            deskripsi: this.editData.deskripsi,
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
