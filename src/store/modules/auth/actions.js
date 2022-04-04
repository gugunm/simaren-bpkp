import qs from 'qs'
import axios from 'axios'

import { API_URL } from '@/api.js'

let timer

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    })
  },
  async auth(context, payload) {
    let url = API_URL + '/api/loginldap'

    const responseMap = await axios({
      method: 'POST',
      url: url,
      data: qs.stringify({
        username: payload.username,
        password: payload.password,
        tahun: payload.tahun,
        // kelas_user: 0,
        // email: payload.email,
        // password: payload.password,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    if (responseMap.status == 200) {
      // expire login dalam 1 jam
      const expiresIn = 3600000
      const expirationDate = new Date().getTime() + expiresIn

      const data = responseMap.data

      localStorage.setItem('token', data.access_token)
      localStorage.setItem('tokenExpiration', expirationDate)
      localStorage.setItem('namaUser', await data.name)
      localStorage.setItem('idunitsima', await data.idUnitSima)
      localStorage.setItem('namaUnit', await data.namaUnit)
      localStorage.setItem('tahun', payload.tahun)
      localStorage.setItem('nip', await data.nipLama)
      localStorage.setItem('nipbaru', await data.nipBaru)

      timer = setTimeout(function () {
        context.dispatch('autoLogout')
      }, expiresIn)

      context.commit('setUser', {
        token: data.access_token,
        // userId: responseData.message.user_nip,
      })
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    // const userId = localStorage.getItem('userId')
    // const imageLink = localStorage.getItem('imageLink')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token) {
      context.commit('setUser', {
        token: token,
        // userId: userId,
        // imageLink: imageLink,
      })
    }
  },
  logout(context) {
    localStorage.removeItem('token')
    // localStorage.removeItem('userId')
    // localStorage.removeItem('imageLink')
    localStorage.removeItem('tokenExpiration')
    localStorage.removeItem('namaUser')
    localStorage.removeItem('idunitsima')
    localStorage.removeItem('namaUnit')
    localStorage.removeItem('tahun')
    localStorage.removeItem('nip')
    localStorage.removeItem('nipbaru')
    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      // userId: null,
      // imageLink: null,
    })
  },
  autoLogout(context) {
    context.dispatch('logout')
    context.commit('setAutoLogout')
  },
}
