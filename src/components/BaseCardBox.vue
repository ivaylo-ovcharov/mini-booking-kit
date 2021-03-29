<template>
  <v-card
    outlined
    class="base_card_box"
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
.base_card_box {
  .label_wrapper {
      padding: 4px 8px;
      display: inline-block;
      background-color: #a3a3a3;
      color: white;
      font-weight: bold;
    }
      box-shadow: 10px 10px 40px #d6d8d9, -20px -20px 60px #ffffff;
}
</style>
