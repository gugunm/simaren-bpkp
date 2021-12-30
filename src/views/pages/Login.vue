<template>
  <div class="flex lg:w-full h-screen justify-center">
    <div
      class="img-login hidden lg:block lg:w-2/6 bg-gradient-to-tr from-green-500 to-blue-500"
    >
      <div class="flex flex-col px-8 h-full text-white justify-center">
        <!-- <h1 class="text-4xl text-center">SIMHPNAS</h1> -->
        <div class="text-left px-4">
          <!-- <CImg
            class="inline-block w-52 lg:w-64 mb-2"
            src="img/simhp/logo-white-login.svg"
          /> -->
          <!-- <h2 class="text-left h2 text-xl lg:text-4xl tracking-wide">
            SIMA-Ren
          </h2> -->
          <div class="text-left tracking-wide">
            <h2 class="h2 text-4xl mb-2">SIMAREN PKPT</h2>
            <p class="text-base font-light">
              Badan Pengawasan Keuangan dan Pembangunan
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-initial content-center w-full lg:w-4/6 bg-white p-6 lg:py-14"
    >
      <div class="mx-auto w-full h-full lg:max-w-xl">
        <div class="flex h-5/6 flex-col justify-center text-left w-full">
          <div class="flex justify-start content-center mb-2 lg:hidden">
            <!-- <CImg class="inline-block w-8 mr-2" src="/img/simhp/logo.svg" /> -->
            <!-- <CImg
              class="inline-block h-12 mr-2"
              src="img/simhp/logo-color-login.svg"
            /> -->
            <h3 class="text-2xl font-light tracking-wider">SIMARen BPKP</h3>
          </div>

          <p class="text-3xl leading-normal tracking-wide font-normal mb-4">
            Halo,<br />Selamat Datang!
          </p>
          <form
            method="POST"
            class="flex flex-col"
            @submit.prevent="submitForm"
          >
            <p class="mb-3 tracking-wide">
              Silahkan login menggunakan akun warga BPKP
            </p>
            <div class="flex flex-wrap mb-4">
              <div class="w-full">
                <div class="flex mb-3">
                  <CFormLabel for="tahun" class="col-sm-2 col-form-label"
                    >Pilih Tahun</CFormLabel
                  >
                  <div class="col-sm-5">
                    <VueMultiselect
                      id="tahun"
                      v-model="tahun"
                      :options="optionsTahun"
                      placeholder="Pilih Tahun"
                    >
                    </VueMultiselect>
                  </div>
                </div>
                <CFormFloating class="mb-3">
                  <CFormInput
                    type="text"
                    id="floatingInput"
                    placeholder="Username BPKP"
                    v-model.trim="username"
                  />
                  <CFormLabel for="floatingInput">Username</CFormLabel>
                </CFormFloating>
                <CFormFloating>
                  <CFormInput
                    type="password"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model.trim="password"
                  />
                  <CFormLabel for="exampleFormControlPassword"
                    >Password</CFormLabel
                  >
                </CFormFloating>
              </div>
            </div>
            <button
              class="rounded-lg appearance-none block w-full bg-blue-500 text-white py-3 px-4 leading-tight hover:bg-blue-600"
              type="submit"
              placeholder="password"
            >
              <template v-if="isLoading">
                <CSpinner color="white" size="sm" class="mr-2" />
                Login
              </template>
              <template v-else> Login </template>
            </button>
          </form>
          <CRow v-if="error" class="mt-3">
            <CCol>
              <CAlert color="danger" dismissible @close="error = null">{{
                error
              }}</CAlert>
            </CCol>
          </CRow>
        </div>
        <div class="text-left h-1/6 flex flex-col justify-end">
          <div class="pb-4 tracking-wide text-sm">
            <span>Pusinfowas</span>
            <span class="ms-1"
              >&copy; {{ new Date().getFullYear() }}
              <span class="text-blue-600">
                Pengelolaan Data dan Informasi</span
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'

export default {
  name: 'Login',
  components: { VueMultiselect },
  data() {
    return {
      username: '',
      password: '',
      formIsValid: false,
      isLoading: false,
      error: null,
      tahun: new Date().getFullYear() + 1,
      optionsTahun: [2020, 2021, 2022],
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true

      this.isLoading = true
      const actionPayload = {
        tahun: this.tahun,
        username: this.username,
        password: this.password,
      }
      try {
        await this.$store.dispatch('login', actionPayload)
        this.$router.replace('/')
      } catch (err) {
        this.error = 'Username atau Password salah'
      }
      this.isLoading = false
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
