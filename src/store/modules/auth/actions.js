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
    let url = 'https://map.bpkp.go.id/api/v3/login'
    // let url = API_URL + '/api/login'

    const responseMap = await axios({
      method: 'POST',
      url: url,
      data: qs.stringify({
        username: payload.username,
        password: payload.password,
        kelas_user: 0,
        // email: payload.email,
        // password: payload.password,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    if (responseMap.status == 200) {
      const response = await axios({
        method: 'POST',
        url: API_URL + '/api/login',
        data: {
          email: 'admin@admin.com',
          password: 'password',
        },
        // headers: {
        // 'content-type': 'application/x-www-form-urlencoded',
        // },
      })

      const responseData = await response.data

      if (response.status != 200) {
        const error = new Error(
          responseData.message ||
            'Failed to authenticate. Check your login data.',
        )
        throw error
      }

      // ini kalo api nya ngasih property expiresIn
      // const expiresIn = +responseData.expiresIn * 1000;

      // expire login dalam 1 jam
      const expiresIn = 3600000
      const expirationDate = new Date().getTime() + expiresIn

      localStorage.setItem('token', responseData.access_token)
      localStorage.setItem('tokenExpiration', expirationDate)
      localStorage.setItem('namaUser', await responseMap.data.message.name)
      localStorage.setItem('namaUnit', await responseMap.data.message.namaunit)
      localStorage.setItem('tahun', payload.tahun)
      localStorage.setItem('nip', await responseMap.data.message.user_nip)

      timer = setTimeout(function () {
        context.dispatch('autoLogout')
      }, expiresIn)

      context.commit('setUser', {
        token: responseData.access_token,
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
    localStorage.removeItem('namaUnit')
    localStorage.removeItem('tahun')
    localStorage.removeItem('nip')

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
