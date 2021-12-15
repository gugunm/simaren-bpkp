<template>
  <CToaster placement="top-end">
    <CToast :autohide="true">
      <CToastHeader closeButton>
        <svg
          class="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" :fill="color"></rect>
        </svg>
        <span class="me-auto fw-bold">{{ title }}</span>
      </CToastHeader>
      <CToastBody>
        {{ msg }}
      </CToastBody>
    </CToast>
  </CToaster>
</template>

<script>
export default {
  props: ['color', 'title', 'msg'],
}
</script>

<style></style>
