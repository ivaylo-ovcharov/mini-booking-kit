<template>
  <v-card
    outlined
  > 
    <span v-if="label" class="label_wrapper">{{ label }}</span>
    <slot />
  </v-card>
</template>
<script>
export default {
  name: 'BaseCardBox',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="scss">
    .label_wrapper {
        padding: 4px 8px;
        display: inline-block;
        background-color: #BABABA;
        color: white;
        font-weight: bold;
    }
</style>