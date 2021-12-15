<template>
  <router-view />
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    didAutoLogout() {
      return this.$store.getters.didAutoLogout
    },
  },
  created() {
    this.$store.dispatch('tryLogin')
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/login')
      }
    },
  },
}
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style>
.multiselect__tags {
  border: 1px solid var(--cui-input-border-color, #b1b7c1);
}
</style>
