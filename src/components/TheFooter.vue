<template>
  <v-footer padless class="footer">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Mini BookingKit</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: 'TheFooter'
}
</script>
