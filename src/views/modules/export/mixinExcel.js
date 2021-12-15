import axios from 'axios'
import { API_URL } from '@/api'

export default {
  methods: {
    async loadSektor() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: API_URL,
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

      this.jsonFields = {
        'Nama Sektor': 'namaSektor',
        'Informasi Sektor Yang Diharapkan': 'deskripsi',
        'Kedeputian Koord Sektor': 'pjDeputi',
        'Unit Kerja PJ Sektor': 'unitKerja',
        'TW Pelaporan Sektor': 'triwulan',
      }
      this.jsonData = responseData
      this.jsonDataCopy = responseData
      this.loading = false
    },

    async loadTema() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: API_URL,
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

      this.jsonFields = {
        'Nama Sektor': 'namaSektor',
        'Nama Tema': 'namaTema',
        'Informasi Tema Yang Diharapkan': 'deskripsi',
        'Kedeputian Koord Tema': 'pjDeputi',
        'Unit Kerja PJ Tema': 'unitKerja',
        'TW Pelaporan Tema': 'triwulan',
      }
      this.jsonData = responseData
      this.jsonDataCopy = responseData
      this.loading = false
    },

    async loadTopik() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: API_URL,
        url: '/api/topik',
        params: {
          token: localStorage.getItem('token'),
        },
      })

      const responseData = await response.data

      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }

      this.jsonFields = {
        'Nama Sektor': 'namaSektor',
        'Nama Tema': 'namaTema',
        'Nama Topik': 'namaTopik',
        'Informasi Topik Yang Diharapkan': 'deskripsi',
        'Kedeputian Koord Topik': 'pjDeputi',
        'Unit Kerja PJ Topik': 'unitKerja',
        'TW Pelaporan Topik': 'triwulan',
      }
      this.jsonData = responseData
      this.jsonDataCopy = responseData
      this.loading = false
    },

    async loadKontributor() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: API_URL,
        url: '/api/kontributor',
        params: {
          token: localStorage.getItem('token'),
        },
      })

      const responseData = await response.data

      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }

      this.jsonFields = {
        'Nama Topik': 'namaTopik',
        'Unit Kerja Kontributor': 'unitKontributor',
        'Informasi Kontributor Yang Diharapkan': 'deskripsi',
        'Kedeputian Koord Topik': 'pjDeputi',
        'Unit Kerja PJ Topik': 'unitKerja',
        'TW Pelaporan Kontributor': 'triwulan',
      }
      this.jsonData = responseData
      this.jsonDataCopy = responseData
      this.loading = false
    },

    async loadKap() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: API_URL,
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

      this.jsonFields = {
        'Nama KAP': 'namaKap',
        'PJ KAP': 'unitKerjaKap',
        'Nama Topik': 'namaTopik',
        'Informasi Yang Diharapkan': 'deskripsi',
        Kontributor: 'kontributors',
      }

      // console.log('DATA KAP')
      // console.log(responseData)

      const dataClean = []
      responseData.forEach((d) => {
        const topiks = d.topiks.map((topik) => {
          topik.kontributors = topik.kontributors.join(',')
          return {
            idKap: d.idKap,
            idUnitKerja: d.idUnitKerja,
            namaKap: d.namaKap,
            topikId: d.topikId,
            unitKerjaKap: d.unitKerjaKap,
            ...topik,
          }
        })
        dataClean.push(topiks)
      })

      this.jsonData = dataClean.flat()
      this.jsonDataCopy = dataClean.flat()
      // console.log('CLEANN')
      // console.log(dataClean.flat())
      // console.log(this.jsonData)

      this.loading = false
    },

    async loadPkpt() {
      this.loading = true
      const response = await axios({
        method: 'GET',
        baseURL: API_URL,
        url: '/api/pkpt',
        params: {
          token: localStorage.getItem('token'),
        },
      })
      const responseData = await response.data
      if (response.status != 200) {
        const error = new Error(responseData.message || 'Failed to fetch data')
        throw error
      }

      this.jsonFields = {
        ID: 'idPkpt',
        'Nama KAP': 'namaKap',
        'PJ KAP': 'namaUnitKerjaKap',
        'Rendal Pelaporan': 'namaRendalPelaporan',
        'Unit Kerja PKPT': 'namaUnitKerjaPkpt',
        'Nama PKPT': 'namaPkpt',
        'Bidang Pengawasan': 'namaBidwasPkpt',
        'TW Pelaporan Kontributor': 'triwulan',
      }

      this.jsonData = responseData.map((data) => {
        return {
          ...data,
          namaRendalPelaporan: data.namaRendalPelaporan
            ? data.namaRendalPelaporan
            : data.namaUnitKerjaPkpt,
        }
      })

      this.jsonDataCopy = [...this.jsonData]
      this.loading = false
    },
  },
}
