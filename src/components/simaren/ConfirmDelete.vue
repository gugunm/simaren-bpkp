<template>
  <CModal
    :visible="statVisible"
    @close="
      () => {
        confirmCancel()
      }
    "
  >
    <CModalBody class="p-0"
      ><div class="flex flex-col">
        <div class="flex flex-row p-4">
          <div
            class="mr-4 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mr-4 sm:h-10 sm:w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgba(220, 38, 38)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <div>
            <p class="text-lg font-semibold mb-2">
              {{ title || 'Meninggalkan halaman' }}
            </p>
            <p>
              {{
                msg ||
                'Meniggalkan halaman tanpa melakukan submit data akan menghilangkan data yang telah diinput.'
              }}
            </p>
          </div>
        </div>
        <div
          class="bg-gray-50 rounded-b-md px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="confirmOk"
          >
            <div v-if="loading">
              <CSpinner color="white" size="sm" class="mr-2" />
            </div>
            Hapus
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="confirmCancel()"
          >
            Cancel
          </button>
        </div>
        <!-- <div
          class="flex rounded-b-md justify-end px-4 py-3"
          style="background: #f9fafb"
        >
          <CButton
            class="mr-2"
            color="dark"
            variant="outline"
            @click="confirmOk"
          >
            Oke
          </CButton>
          <CButton
            color="info"
            class="text-white"
            @click="
              () => {
                confirmCancel()
              }
            "
          >
            Cancel
          </CButton>
        </div> -->
      </div></CModalBody
    >
  </CModal>
</template>
<script>
export default {
  props: ['statVisible', 'title', 'msg'],
  emits: ['close-modal', 'confirm-ok'],
  computed: {},
  watch: {
    value(val) {
      if (val == false) {
        this.confirmCancel()
      }
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    confirmCancel() {
      this.$emit('close-modal', false)
    },
    confirmOk() {
      this.loading = true
      setTimeout(() => {
        this.$emit('confirm-ok')
      }, 500)
      this.loading = false
    },
  },
}
</script>
