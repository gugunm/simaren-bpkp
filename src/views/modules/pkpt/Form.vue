<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CCard class="mb-4">
    <CCardBody class="p-4">
      <h4 v-if="mode == 'create'" class="h4 mb-4">Tambah PKPT</h4>
      <h4 v-else-if="mode == 'update'" class="h4 mb-4">Edit PKPT</h4>
      <CRow class="mb-3" v-if="mode == 'update'">
        <CFormLabel for="tahun" class="col-sm-3 col-form-label">ID </CFormLabel>
        <div class="col-sm-2">
          <CFormInput v-model="editData.idPkpt" readonly />
        </div>
      </CRow>
      <CForm>
        <CRow class="mb-2">
          <CFormLabel for="nama-kap" class="col-sm-3 col-form-label"
            >Nama KAP <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-9">
            <div v-if="mode == 'update'">
              <CFormInput
                v-if="selectedKap"
                type="text"
                :value="selectedKap.namaKap"
                readonly
              />
            </div>
            <div v-else>
              <CFormInput
                v-if="isReadOnlyKap"
                type="text"
                :value="selectedKap.namaKap"
                readonly
              />
              <VueMultiselect
                v-else
                id="nama-kap"
                placeholder="Pilih KAP"
                label="namaKap"
                v-model="selectedKap"
                :options="optionsKap"
                track-by="namaKap"
                deselectLabel=""
                selectLabel=""
              >
              </VueMultiselect>
            </div>
          </div>
        </CRow>
        <CRow class="mb-2">
          <CFormLabel for="pj-kap" class="col-sm-3 col-form-label"
            >Unit Kerja PJ KAP <span class="text-red-500">*</span></CFormLabel
          >
          <div class="col-sm-2">
            <CFormInput
              type="text"
              id="pj-kap"
              v-model="pjKap"
              readonly
              placeholder="sesuai kap"
            />
          </div>
        </CRow>
        <CRow class="mb-4 mt-4" v-if="mode == 'create'">
          <div class="col-sm-2">
            <CButton
              type="button"
              class="px-4 py-2"
              color="info"
              size="sm"
              @click="isOpenForm = !isOpenForm"
              variant="outline"
            >
              + PKPT
            </CButton>
          </div>
        </CRow>

        <div v-if="isOpenForm">
          <CRow class="mb-2">
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
          <CRow class="mb-2">
            <CFormLabel for="unit-kerja" class="col-sm-3 col-form-label"
              >Unit Kerja<span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <VueMultiselect
                id="unit-kontributor"
                v-model="selectedUnitPkpt"
                :options="optionsUnitPkpt"
                placeholder="Pilih Unit Kerja"
                label="namaUnitKontributor"
                track-by="namaUnitKontributor"
                :custom-label="viewSelectUnitPkpt"
                selectLabel=""
                deselectLabel=""
              >
              </VueMultiselect>
            </div>
          </CRow>
          <CRow class="mb-2">
            <CFormLabel for="nama-pkpt" class="col-sm-3 col-form-label"
              >Nama PKPT<span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-9">
              <CFormTextarea
                id="nama-pkpt"
                v-model="form.namaPkpt"
                rows="3"
                required
              ></CFormTextarea>
            </div>
          </CRow>
          <CRow class="mb-2">
            <CFormLabel for="bidwas" class="col-sm-3 col-form-label"
              >BIDWAS<span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-9">
              <VueMultiselect
                id="bidwas"
                v-model="selectedBidwas"
                :options="optionsBidwas"
                placeholder="Pilih Bidwas"
                label="namaBidwas"
                track-by="namaBidwas"
                selectLabel=""
                deselectLabel=""
              >
              </VueMultiselect>
            </div>
          </CRow>
          <CRow class="mb-2">
            <CFormLabel for="info-pkpt" class="col-sm-3 col-form-label"
              >Informasi Yang Diharapkan<span class="text-red-500"
                >*</span
              ></CFormLabel
            >
            <div class="col-sm-9">
              <CFormTextarea
                id="info-pkpt"
                rows="3"
                v-model="infoDiharapkanPkpt"
                readonly
                required
              ></CFormTextarea>
            </div>
          </CRow>
          <CRow class="mb-2" v-if="isUnitPkptPerwakilan || isSektorAppd">
            <CFormLabel for="rendal-pelaporan" class="col-sm-3 col-form-label"
              >Rendal Pelaporan<span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <CFormInput v-if="isSektorAppd" value="D302" readonly />
              <VueMultiselect
                v-else
                id="rendal-pelaporan"
                v-model="selectedRendPelaporan"
                :options="optionsRendPelaporan"
                placeholder="Pilih Rendal Pelaporan"
                label="namaUnitKontributor"
                track-by="namaUnitKontributor"
                :custom-label="viewSelectUnitPkpt"
                selectLabel=""
                deselectLabel=""
              >
              </VueMultiselect>
            </div>
          </CRow>
          <CRow class="mb-2">
            <CFormLabel for="hp" class="col-sm-3 col-form-label"
              >HP <span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-2">
              <CFormInput type="number" v-model="form.hp" id="hp" required />
            </div>
          </CRow>
          <CRow class="mb-4">
            <CFormLabel for="jenis-kegiatan" class="col-sm-3 col-form-label"
              >Jenis Kegiatan <span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <VueMultiselect
                id="jenis-kegiatan"
                v-model="selectedJenisKegiatan"
                :options="optionsJenisKegiatan"
                placeholder="Pilih Jenis Kegiatan"
                label="jenisKegiatanName"
                track-by="jenisKegiatanName"
                selectLabel=""
                deselectLabel=""
              />
            </div>
          </CRow>
          <!-- <CRow class="mb-2">
            <CFormLabel for="sumber-dana" class="col-sm-3 col-form-label"
              >Sumber Dana <span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <VueMultiselect
                id="sumber-dana"
                v-model="selectedDana"
                :options="optionsDana"
                placeholder="Pilih Sumber"
                label="deskripsi"
                track-by="deskripsi"
              >
              </VueMultiselect>
            </div>
          </CRow> -->
          <CRow class="mb-3">
            <CCol sm="3">
              <CFormLabel for="sumber-dana" class="col-form-label"
                >Sumber Dana <span class="text-red-500">*</span></CFormLabel
              >
            </CCol>
            <CCol sm="9">
              <CRow
                v-for="itemDana in optionsDana"
                :key="itemDana.deskripsi"
                class="mb-2"
              >
                <CCol sm="3">
                  <input
                    class="mr-3"
                    type="checkbox"
                    :id="itemDana.deskripsi"
                    :value="`${itemDana.deskripsi}#${itemDana.id}`"
                    v-model="choosenDana"
                    @change="changeCheckedDana(itemDana)"
                  />
                  <label :for="itemDana.deskripsi">{{
                    itemDana.deskripsi
                  }}</label>
                </CCol>
                <CCol sm="5">
                  <CFormInput
                    type="number"
                    v-model="itemDana.nilai"
                    :readonly="!itemDana.status"
                  />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <!-- <p>{{ choosenDana.join(',') }}</p>
          <p>{{ optionsDana }}</p>
          <p>{{ refOptionsDana }}</p> -->
          <CRow class="mb-2">
            <CFormLabel for="dana" class="col-sm-3 col-form-label"
              >Total Dana <span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <CFormInput
                :value="$func.thousandSeprator(totalDana)"
                id="dana"
                readonly
              />
              <!-- {{ $func.thousandSeprator(totalDana) }} -->
              <!-- v-model="form.dana" -->
            </div>
          </CRow>
          <CRow class="mb-2">
            <CFormLabel for="rmp" class="col-sm-3 col-form-label"
              >RMP<span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <VueMultiselect
                id="rmp"
                v-model="selectedRmp"
                :options="optionsRmp"
                placeholder="Pilih RMP"
                label="deskripsi"
                track-by="deskripsi"
              >
              </VueMultiselect>
            </div>
          </CRow>
          <CRow class="mb-3">
            <CFormLabel for="tw" class="col-sm-3 col-form-label"
              >RPL Triwulan <span class="text-red-500">*</span></CFormLabel
            >
            <div class="col-sm-4">
              <VueMultiselect
                id="tw"
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
          <CRow v-if="mode == 'create'" class="mb-4 mt-4 text-center">
            <div class="col-sm-12">
              <CButton
                type="button"
                class="px-4 text-white"
                color="success"
                size="sm"
                @click="submit"
              >
                <div v-if="loading">
                  <CSpinner color="white" size="sm" class="mr-2" /> Simpan PKPT
                </div>
                <span v-else>Simpan PKPT</span>
              </CButton>
            </div>
          </CRow>
        </div>
        <div v-if="mode != 'update'" class="flex flex-col mt-4">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="shadow-sm overflow-hidden border-b border-gray-200 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nama PKPT
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Unit Kerja
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Bidang Was
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        TW Pelaporan
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Hapus</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(pkpt, idxPkpt) in pkpts" :key="pkpt.nama">
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">
                          {{ pkpt.nama_pkpt }}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ pkpt.nama_kontributor_pkpt }}
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-sm text-gray-900">
                          {{ pkpt.nama_bidwas }}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ pkpt.triwulan }}
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                      >
                        <button
                          class="text-red-600 hover:text-red-900"
                          @click="deletePkpt(idxPkpt, pkpt.id)"
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
        <CRow class="mt-8 view-form">
          <CCol sm="12" lg="6" class="mb-3">
            <CButton
              v-if="mode != 'view'"
              variant="outline"
              color="dark"
              @click="$router.push('/pkpt')"
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
            <CButton
              v-if="mode == 'create'"
              type="button"
              color="info"
              class="px-5 ml-2 text-white"
              @click="submitToBack"
            >
              <p>Simpan</p>
            </CButton>
            <CButton
              v-else
              type="button"
              color="info"
              class="px-5 ml-2 text-white"
              @click="submit"
            >
              <div v-if="loading">
                <CSpinner color="white" size="sm" class="mr-2" /> Ubah PKPT
              </div>
              <p v-else>Ubah PKPT</p>
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

// const optionsDana = [
//   {
//     id: 52,
//     deskripsi: 'APBN',
//     nilai: 0,
//     status: false,
//   },
//   {
//     id: 53,
//     deskripsi: 'Mitra',
//     nilai: 0,
//     status: false,
//   },
//   {
//     id: 1518,
//     deskripsi: 'ABT',
//     nilai: 0,
//     status: false,
//   },
// ]

const optionsRmp = [
  {
    id: 60,
    deskripsi: 'Belum Ditentukan',
  },
  {
    id: 1,
    deskripsi: 'Januari',
  },
  {
    id: 2,
    deskripsi: 'Februari',
  },
  {
    id: 3,
    deskripsi: 'Maret',
  },
  {
    id: 4,
    deskripsi: 'April',
  },
  {
    id: 5,
    deskripsi: 'Mei',
  },
  {
    id: 6,
    deskripsi: 'Juni',
  },
  {
    id: 7,
    deskripsi: 'Juli',
  },
  {
    id: 8,
    deskripsi: 'Agustus',
  },
  {
    id: 9,
    deskripsi: 'September',
  },
  {
    id: 10,
    deskripsi: 'Oktober',
  },
  {
    id: 11,
    deskripsi: 'November',
  },
  {
    id: 12,
    deskripsi: 'Desember',
  },
]

export default {
  components: { VueMultiselect, Loading },
  props: ['mode', 'idPkpt'],
  data() {
    return {
      isSektorAppd: false,
      idKap: null,
      pjKap: null,
      form: this.getEmptyForm(),
      submitted: false,
      loading: false,
      isOpenForm: true,
      editData: {},
      selectedKap: null,
      optionsKap: [],
      selectedKontributor: null,
      optionsKontributor: [],
      selectedBidwas: null,
      optionsBidwas: [],
      // selectedDana: null,
      optionsJenisKegiatan: [],
      selectedJenisKegiatan: null,
      refOptionsDana: [],
      optionsDana: [],
      choosenDana: [],
      selectedRmp: null,
      optionsRmp,
      selectedUnitPkpt: null,
      optionsUnitPkpt: [],
      selectedRendPelaporan: null,
      optionsRendPelaporan: [],
      optionsTriwulan: [1, 2, 3, 4],
      infoDiharapkanPkpt: null,
      pkpts: [
        // {
        //   namaPkpt: 'Nama Topik ABC',
        //   namaUnitKerja: 'D302',
        //   namaBidwasPkpt: 'Sub Direktorat..',
        //   triwulan: [1, 4],
        // },
      ],
    }
  },
  watch: {
    selectedKap: function (val) {
      if (val) {
        // console.log('KAP')
        // console.log(val)
        if (val.topiks.some((element) => element.idSektor == 28)) {
          this.isSektorAppd = true
          this.form.idRendPelaporan = 339
        } else {
          this.isSektorAppd = false
          this.form.idRendPelaporan = 0
        }
        this.idKap = val.idKap
        this.pjKap = val.pjKap
        this.getOptionsUnitPkpt()
      }
    },

    selectedUnitPkpt: function (val) {
      if (val) {
        this.form.idTopikOrKontributor = val.idKontributor
        this.form.idUnitKerja = val.idUnitKontributor
        this.form.namaUnitKerja = val.namaUnitKontributor
        this.form.peranPkpt = val.peranPkpt
        this.infoDiharapkanPkpt = val.infoKontributor

        this.selectedBidwas = null
        this.optionsBidwas = []
        this.loadBidwas(this.form.idUnitKerja)

        if (val.namaUnitKontributor.includes('PW')) {
          this.getOptionsRendPelaporan()
        }
      }
    },

    selectedRendPelaporan: function (val) {
      if (val) {
        this.form.idRendPelaporan = val.idUnitKontributor
      }
    },

    selectedBidwas: function (val) {
      if (val) {
        this.form.idBidwas = val.id
        this.form.namaBidwasPkpt = val.namaBidwas
      }
    },

    selectedJenisKegiatan: function (val) {
      if (val) {
        this.form.jenisKegiatanId = val.jenisKegiatanId
        this.form.jenisKegiatanName = val.jenisKegiatanName
      }
    },

    // selectedDana: function (val) {
    //   if (val) {
    //     this.form.idSumberDana = val.id
    //     this.form.namaSumberDana = val.deskripsi
    //   }
    // },

    selectedRmp: function (val) {
      if (val) {
        this.form.idRmp = val.id
        this.form.namaRmp = val.deskripsi
      }
    },
  },
  computed: {
    isReadOnlyKap: function () {
      return this.pkpts.length > 0 ? true : false
    },
    isUnitPkptPerwakilan: function () {
      if (this.selectedUnitPkpt) {
        return this.selectedUnitPkpt.namaUnitKontributor.includes('PW')
          ? true
          : false
      } else {
        return false
      }
    },
    totalDana() {
      return this.optionsDana.length > 0
        ? this.optionsDana.reduce((n, { nilai }) => n + Number(nilai), 0)
        : 0
    },
  },
  async mounted() {
    this.form.tahun = localStorage.tahun

    this.optionsKap = await this.$store.dispatch('loadListKap')
    // this.optionsKontributor = await this.$store.dispatch(
    //   'loadListUnitKontributor',
    // )

    this.optionsJenisKegiatan = await this.$store.dispatch(
      'loadListJenisKegiatan',
    )

    const resultRefOptionsDana = await this.$store.dispatch(
      'loadListSumberDana',
    )
    this.refOptionsDana = resultRefOptionsDana.map((item) => {
      return {
        id: item.idSumberDana,
        deskripsi: item.namaSumberDana,
        nilai: 0,
        status: false,
      }
    })
    this.optionsDana = this.refOptionsDana.map((a) => ({ ...a }))

    // :::: MOUNTED IF UPDATE ::::
    if (this.mode == 'update') {
      this.loading = true
      await this.loadPkptById()

      this.selectedKap = this.optionsKap.filter((kap) => {
        return kap.idKap == this.idKap
      })[0]

      await this.getOptionsUnitPkpt()
      this.selectedUnitPkpt = this.optionsUnitPkpt.filter((unit) => {
        return unit.idUnitKontributor == this.form.idUnitKerja
      })[0]

      if (this.selectedUnitPkpt.namaUnitKontributor.includes('PW')) {
        await this.getOptionsRendPelaporan()
        this.selectedRendPelaporan = this.optionsRendPelaporan.filter(
          (unit) => {
            return unit.idUnitKontributor == this.form.idRendPelaporan
          },
        )[0]
      }

      await this.loadBidwas(this.form.idUnitKerja)
      this.selectedBidwas = this.optionsBidwas.filter((bid) => {
        return bid.id == this.form.idBidwas
      })[0]

      this.selectedJenisKegiatan = this.optionsJenisKegiatan.filter((jenis) => {
        return jenis.jenisKegiatanId == this.form.jenisKegiatanId
      })[0]

      // this.selectedDana = this.optionsDana.filter((d) => {
      //   return d.id == this.form.idSumberDana
      // })[0]

      this.selectedRmp = this.optionsRmp.filter((r) => {
        return r.id == this.form.idRmp
      })[0]

      this.optionsDana = this.optionsDana.map((dana) => {
        const danaPkpt = this.form.dataDana.find(
          (d) => d.idSumberDanaPkpt == dana.id,
        )
        if (danaPkpt) {
          // id: 52,
          // deskripsi: 'APBN',
          // nilai: 0,
          // status: false,
          dana.nilai = danaPkpt.jumlahDanaPkpt
          dana.status = true
          // masukin dana yang suda di pilih kedalam choosendana, agar centangnya nyala
          this.choosenDana.push(`${dana.deskripsi}#${dana.id}`)
        }
        return dana
      })

      //this.form.dataDana
      // console.log('OPTIONS UNIT')
      // console.log(this.optionsUnitPkpt)
      // console.log(this.idKap)
      // console.log(this.selectedUnitPkp)
      // console.log(this.form.idUnitKerja)
    }
  },
  methods: {
    changeCheckedDana(itemDana) {
      itemDana.status = !itemDana.status
      if (itemDana.status == false) {
        itemDana.nilai = 0
      }
    },

    async getOptionsUnitPkpt() {
      let options = await this.$store.dispatch('loadSelectUnitPkpt', {
        idKap: this.idKap,
      })

      // console.log('options')
      // console.log(this.idKap)
      // console.log(options)

      const optionsClean = []

      options.forEach((el) => {
        optionsClean.push(...el.kontributors)
      })

      this.optionsUnitPkpt = optionsClean
    },

    async getOptionsRendPelaporan() {
      let options = await this.$store.dispatch('loadSelectUnitPkpt', {
        idKap: this.idKap,
      })

      const optionsClean = []

      options.forEach((el) => {
        optionsClean.push(...el.kontributors)
      })

      // filter list tanpa PW
      this.optionsRendPelaporan = optionsClean.filter((opt) => {
        return !opt.namaUnitKontributor.includes('PW')
      })
    },

    async loadBidwas(id) {
      this.optionsBidwas = await this.$store.dispatch('loadBidwas', {
        idUnit: id,
      })
    },

    viewSelectSearch({ alias, deskripsi }) {
      return `${alias} - ${deskripsi}`
    },

    viewSelectUnitPkpt({ namaUnitKontributor, peranPkpt }) {
      return `${namaUnitKontributor} - ${
        peranPkpt == 1 ? 'Koordinator Topik' : 'Kontributor Topik'
      }`
    },

    // addPkptLokal() {
    //   this.pkpts.push(this.form)
    //   this.reset()
    // },
    async deletePkpt(idxPkpt, idPkpt) {
      try {
        const response = await axios({
          method: 'DELETE',
          baseURL: this.$apiAddress,
          url: `/api/pkpt/${idPkpt}`,
          params: {
            token: localStorage.getItem('token'),
            nip: localStorage.getItem('nip'),
          },
        })

        if (response.status == 200) {
          this.toastSuccess(`Berhasil menghapus data`)
          this.pkpts.splice(idxPkpt)
        }
      } catch (error) {
        this.toastError(error.message)
      }
    },

    submitToBack() {
      if (this.pkpts.length > 0) {
        // this.loading = true
        setTimeout(() => {
          this.$router.push('/pkpt')
          this.toastSuccess('Berhasil membuat PKPT')
        }, 500)
      } else {
        this.toastWarning('Selesaikan dahulu pembuatan PKPT')
      }
    },

    async submit() {
      const isSomeNull = this.$func.isNullOfObjElement(this.form)

      // console.log('FOORM')
      // console.log(this.form)

      if (isSomeNull) {
        this.submitted = true

        const resultFormData = this.appendToFormData()

        try {
          // ::: POST DATA TO BACKEND :::
          if (this.mode == 'create') {
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: '/api/pkpt',
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            const responseDataPkpt = await response.data

            this.optionsDana
              .filter((item) => {
                return item.nilai > 0
              })
              .forEach(async (dana) => {
                await axios({
                  method: 'POST',
                  baseURL: this.$apiAddress,
                  url: '/api/danapkpt',
                  data: {
                    idPkpt: responseDataPkpt.id_pkpt,
                    idSumberDana: dana.id,
                    namaSumberDana: dana.deskripsi,
                    nilaiSumberDana: dana.nilai,
                  },
                  params: {
                    token: localStorage.getItem('token'),
                  },
                })
              })

            if (response.status == 200) {
              this.loading = false
              this.toastSuccess('Berhasil menyimpan data')
            } else {
              this.error = 'Gagal menyimpan data'
              // this.$router.push('/pkpt')
            }

            this.pkpts.push(responseDataPkpt)
            this.reset()
            this.form.tahun = localStorage.tahun
          } else if (this.mode == 'update') {
            // ::: UPDATE DATA TO BACKEND :::
            this.loading = true

            const response = await axios({
              method: 'POST',
              baseURL: this.$apiAddress,
              url: `/api/pkpt/${this.idPkpt}`,
              data: resultFormData,
              params: {
                token: localStorage.getItem('token'),
              },
            })

            this.optionsDana
              .filter((item) => {
                return item.nilai > 0
              })
              .forEach(async (dana) => {
                await axios({
                  method: 'POST',
                  baseURL: this.$apiAddress,
                  url: '/api/danapkpt',
                  data: {
                    idPkpt: this.idPkpt,
                    idSumberDana: dana.id,
                    namaSumberDana: dana.deskripsi,
                    nilaiSumberDana: dana.nilai,
                  },
                  params: {
                    token: localStorage.getItem('token'),
                  },
                })
              })

            if (response.status != 200) {
              this.error = 'Gagal merubah data'
            } else {
              this.loading = false
              this.$router.push('/pkpt')
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

      this.selectedUnitPkpt = null
      this.infoDiharapkanPkpt = null

      if (!this.isReadOnlyKap) {
        this.pjKap = null
        this.selectedKap = null
      }
      this.selectedKontributor = null
      this.selectedBidwas = null
      this.selectedJenisKegiatan = null
      // this.selectedDana = null
      this.selectedRmp = null

      this.choosenDana = []
      this.optionsDana = this.refOptionsDana.map((a) => ({ ...a }))
    },

    getEmptyForm() {
      return {
        //form
        tahun: null,
        idTopikOrKontributor: null,
        peranPkpt: null,
        idUnitKerja: null,
        namaPkpt: null,
        idBidwas: null,
        idRendPelaporan: 0,
        hp: null,
        jenisKegiatanId: null,
        jenisKegiatanName: null,
        // dana: this.totalDana,
        idSumberDana: 52,
        idRmp: null,
        namaRmp: null,
        triwulan: [],
        //auto pas milih id
        namaBidwasPkpt: null,
        namaUnitKerja: null,
        // namaSumberDana: null,
      }
    },

    appendToFormData() {
      const fd = new FormData()
      if (this.mode == 'update') {
        fd.append('_method', 'PUT')
      } else {
        fd.append('idKap', this.idKap)
        fd.append('tahunPkpt', this.form.tahun)
      }
      fd.append('idRendalPelaporan', this.form.idRendPelaporan)
      fd.append('idUnitKerja', this.form.idUnitKerja)
      fd.append('namaUnitKerja', this.form.namaUnitKerja)
      fd.append('namaPkpt', this.form.namaPkpt)
      fd.append('idBidwas', this.form.idBidwas)
      fd.append('namaBidwasPkpt', this.form.namaBidwasPkpt)
      fd.append('triwulan', this.form.triwulan)
      fd.append('hp', this.form.hp)
      fd.append('jenisKegiatanId', this.form.jenisKegiatanId)
      fd.append('jenisKegiatanName', this.form.jenisKegiatanName)
      fd.append('dana', this.totalDana)
      fd.append('idSumberDana', this.form.idSumberDana)
      // fd.append('namaSumberDana', this.form.namaSumberDana)
      fd.append('namaSumberDana', this.choosenDana.join(','))
      fd.append('idRmp', this.form.idRmp)
      fd.append('namaRmp', this.form.namaRmp)
      fd.append('peranPkpt', this.form.peranPkpt)
      fd.append('idTopikOrKontributor', this.form.idTopikOrKontributor)

      fd.append('nip', localStorage.getItem('nip'))
      return fd
    },

    async loadPkptById() {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: this.$apiAddress,
          url: `/api/pkpt/${this.idPkpt}`,
          params: {
            token: localStorage.getItem('token'),
          },
        })

        this.editData = await response.data

        if (response.status == 200) {
          // console.log('DETAIL PKPT')
          // console.log(this.editData)

          this.idKap = this.editData.idKap

          this.form = {
            //form
            tahun: this.editData.tahunPkpt,
            idTopikOrKontributor:
              this.editData.peranPkpt == 0
                ? this.editData.idKontributor
                : this.editData.idTopik,
            peranPkpt: this.editData.peranPkpt,
            idUnitKerja: this.editData.idUnitKerja,
            namaPkpt: this.editData.namaPkpt,
            idBidwas: this.editData.idBidwas,
            hp: this.editData.hp,

            jenisKegiatanId: this.editData.jenisKegiatanId,
            jenisKegiatanName: this.editData.jenisKegiatanName,

            dana: this.editData.dana,
            idSumberDana: this.editData.idSumberDana,
            idRmp: this.editData.idRmp,
            triwulan: this.editData.triwulan,
            idRendPelaporan: this.editData.idRendalPelaporan,

            dataDana: this.editData.dataDana,
            //auto pas milih id
            // namaBidwasPkpt: null,
            // namaUnitKerja: null,
            // namaSumberDana: null,
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

<style></style>
