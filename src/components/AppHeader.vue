<template>
  <Loading v-model:active="loading" :is-full-page="true" />
  <CHeader position="sticky" class="" style="background: #f3f7fb">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderBrand class="d-lg-none">
        <p class="text-base font-normal text-gray-700">
          Halo, {{ namaUser.split(' ').slice(0, 2).join(' ') }}
        </p>
      </CHeaderBrand>
      <!-- <CHeaderBrand class="mx-auto d-lg-none" to="/">
        <CIcon :icon="logo" height="48" alt="Logo" />
      </CHeaderBrand> -->
      <!-- <CHeaderNav class="d-none d-md-flex me-auto"> -->
      <!-- <CNavItem class="flex items-center">
          <p class="ml-2 text-sm text-gray-700">{{ namaUnit }}</p>
        </CNavItem> -->
      <!-- <CNavItem>
          <CNavLink href="/dashboard"> Dashboard </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Users</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Settings</CNavLink>
        </CNavItem> -->
      <!-- </CHeaderNav> -->
      <CHeaderNav>
        <!-- <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-list" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-envelope-open" size="lg" />
          </CNavLink>
        </CNavItem> -->
        <!-- <AppHeaderDropdownAccnt /> -->
        <CNavItem class="flex items-center hidden lg:block pt-2">
          <p class="text-sm text-gray-700">
            <span class="font-semibold inline-block mr-1"
              >Halo, {{ namaUser.split(' ').slice(0, 2).join(' ') }}
            </span>
            <span class="font-light">({{ namaUnit }})</span>
          </p>
        </CNavItem>
        <CNavItem>
          <CButton @click="logout" class="text-gray-500 hover:text-gray-700">
            <CIcon class="mx-2" icon="cil-account-logout" size="md" />
            <span class="">Logout</span>
          </CButton>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
// import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { logo } from '@/assets/brand/logo'
import Loading from 'vue3-loading-overlay'

export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    // AppHeaderDropdownAccnt,
    Loading,
  },
  setup() {
    return {
      logo,
    }
  },
  data() {
    return {
      namaUser: '',
      namaUnit: '',
      loading: false,
    }
  },
  mounted() {
    if (localStorage.namaUser && localStorage.namaUnit) {
      this.namaUser = localStorage.namaUser
      this.namaUnit = localStorage.namaUnit
    }
  },
  methods: {
    logout() {
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch('logout')
        this.$router.push({ name: 'login' })
      }, 500)
    },
  },
}
</script>
