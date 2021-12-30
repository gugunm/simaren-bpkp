<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CCard>
    <CCardBody class="p-4">
      <h4 v-if="mode == 'create'" class="h4 mb-4">Tambah Sektor</h4>
      <h4 v-else-if="mode == 'update'" class="h4 mb-4">Edit Sektor</h4>
      <CRow class="mb-3" v-if="mode == 'update'">
        <CFormLabel for="tahun" class="col-sm-3 col-form-label">ID </CFormLabel>
        <div class="col-sm-2">
          <CFormInput v-model="editData.idSektor" readonly />
        </div>
      </CRow>
      <CForm @submit.prevent="submit">
        <CRow class="mb-3">
          <CFormLabel for="tahun" class="col-sm-3 col-form-label"
            >Tahun <span class="text-red-500">*</span>
          </CFormLabel>
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
            <CFormInput
              type="text"
              id="nama-sektor"
              v-model="form.namaSektor"
              required
            />
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="info-sektor" class="col-sm-3 col-form-label"
            >Informasi Sektor Yang Diharapkan<span class="text-red-500"
              >*</span
            ></CFormLabel
          >
          <div class="col-sm-9">
            <CFormTextarea
              id="info-sektor"
              rows="3"
              v-model="form.deskripsi"
              required
              placeholder="Info A; Info B; Info C;"
            ></CFormTextarea>
            <p class="text-sm mt-2 text-red-500">
              note : pisahkan informasi sektor dengan titik koma ';'
            </p>
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="deputi-sektor" class="col-sm-3 col-form-label"
            >Kedeputian Koord Sektor
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <CFormInput
              type="text"
              id="dep-sektor"
              :value="viewDeputi"
              readonly
            />
          </div>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="pj-sektor" class="col-sm-3 col-form-label"
            >Unit Kerja PJ Sektor
            <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <VueMultiselect
              id="pj-sektor"
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
          <CFormLabel for="tw-sektor" class="col-sm-3 col-form-label"
            >Triwulan Pelaporan Sektor
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
              @click="$router.push({ name: 'Index Sektor' })"
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
  props: ['mode', 'idSektor'],
  data() {
    return {
      form: this.getEmptyForm(),
      submitted: false,
      loading: false,
      viewDeputi: null,
      selectedRendal: null,
      optionsRendal: [],
      optionsTriwulan: [1, 2, 3, 4],
      editData: {},
    }
  },
  watch: {
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

    this.optionsRendal = await this.$store.dispatch('loadListRendal')
    if (this.mode == 'update') {
      this.loading = true
      await this.loadSektorById()

      const dataRend = this.optionsRendal.filter((rend) => {
        return rend.id == this.form.idUnitKerja
      })
      this.selectedRendal = dataRend[0]
    }
  },
  methods: {
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
              url: '/api/sektor',
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal menyimpan data'
            } else {
              this.loading = false
              this.$router.push('/sektor')
              this.toastSuccess('Berhasil menyimpan data')
            }
          } else if (this.mode == 'update') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: `/api/sektor/${this.idSektor}`,
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            if (response.status != 200) {
              this.error = 'Gagal merubah data'
            } else {
              this.loading = false
              this.$router.push('/sektor')
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

      this.viewDeputi = null
      this.selectedRendal = null
    },

    getEmptyForm() {
      return {
        tahun: null,
        namaSektor: null,
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
      fd.append('tahun', this.form.tahun)
      fd.append('namaSektor', this.form.namaSektor)
      fd.append('deskripsi', this.form.deskripsi)
      fd.append('idKedeputian', this.form.idKedeputian)
      fd.append('idUnitKerja', this.form.idUnitKerja)
      fd.append('triwulan', this.form.triwulan)
      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    async loadSektorById() {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: this.$apiAddress,
          url: `/api/sektor/${this.idSektor}`,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.editData = await response.data

        if (response.status == 200) {
          // console.log('DETAIL SEKTOR')
          // console.log(responseData)

          this.form = {
            tahun: this.editData.tahun,
            namaSektor: this.editData.namaSektor,
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
