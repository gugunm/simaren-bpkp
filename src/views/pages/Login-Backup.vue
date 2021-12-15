<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm method="POST" @submit.prevent="submitForm">
                  <h1 class="h3">Login</h1>
                  <p class="text-medium-emphasis mb-2">
                    Login menggunakan akun user BPKP
                  </p>
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
                  <!-- <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-at" />
                    </CInputGroupText>
                    <CFormInput placeholder="Email" autocomplete="email" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </CInputGroup> -->
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="info" class="px-4 text-white mt-3">
                        <template v-if="isLoading">
                          <CSpinner color="white" size="sm" class="mr-2" />
                          Login
                        </template>
                        <template v-else> Login </template>
                      </CButton>
                    </CCol>
                    <!-- <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol> -->
                  </CRow>
                  <CRow v-if="error" class="mt-3">
                    <CCol>
                      <CAlert
                        color="danger"
                        dismissible
                        @close="error = null"
                        >{{ error }}</CAlert
                      >
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-info py-5">
              <CCardBody class="text-center pt-5">
                <div>
                  <h2 class="h2">SIMARen</h2>
                  <p>
                    Aplikasi untuk entry data pada kebutuhan agenda prioritas
                    pengawasan tahun 2022
                  </p>
                  <!-- <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton> -->
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      formIsValid: false,
      isLoading: false,
      error: null,
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true

      this.isLoading = true
      const actionPayload = {
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
