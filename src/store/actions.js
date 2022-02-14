import axios from 'axios'
import { API_URL } from '@/api'

export default {
  async loadListDeputi() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listdeputi',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListRendal() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listrendal',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListSektor() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listsektor',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListTema(context, payload) {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listtema',
      params: {
        token: localStorage.getItem('token'),
        idSektor: payload.idSektor,
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListTopik(context, payload) {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listtopik',
      params: {
        token: localStorage.getItem('token'),
        idSektor: payload.idSektor,
        idTema: payload.idTema,
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadTopikKap() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/topikkap',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadTopikKapEdit() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/topikkapedit',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListUnitKontributor() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listunitkontributor',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListKap() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listkap',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadBidwas(context, payload) {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listbidwas',
      params: {
        token: localStorage.getItem('token'),
        idKontributor: payload.idUnit,
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadSelectUnitPkpt(context, payload) {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listunitkerjapkpt',
      params: {
        token: localStorage.getItem('token'),
        idKap: payload.idKap,
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListSumberDana() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listsumberdana',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListJenisKegiatan() {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: '/api/listjeniskegiatan',
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },

  async loadListInfoTopik(context, payload) {
    const response = await axios({
      method: 'GET',
      baseURL: API_URL,
      url: `/api/infotopik/${payload.idTopik}`,
      params: {
        token: localStorage.getItem('token'),
      },
    })

    const responseData = await response.data

    if (response.status != 200) {
      const error = new Error(responseData.message || 'Failed to fetch data')
      throw error
    }

    return responseData
  },
}
