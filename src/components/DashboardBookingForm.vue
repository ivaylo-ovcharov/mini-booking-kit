<template>
  <base-card-box label="Add new booking">
    <v-form
      ref="form"
      v-model="valid"
      class="pa-8"
      lazy-validation
    >
      <p class="mb-1">
        First name
      </p>
      <v-text-field
        v-model="booking.firstName"
        solo
        label="ex: Micheal"
        class="form-field"
        :rules="firstNameRules"
        required
      />
      <p class="mb-1">
        Last name
      </p>
      <v-text-field
        v-model="booking.lastName"
        solo
        label="ex: Kooper"
        class="form-field"
        :rules="lastNameRules"
        required
      />
      <p class="mb-1">
        Booking date
      </p>
      <v-menu
        v-model="datepicker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="booking.date"
            solo
            :rules="dateRules"
            label="Choose your booking date"
            append-outer-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="booking.date"
          @input="datepicker = false"
        />
      </v-menu>
      <v-btn
        :disabled="!valid"
        color="secondary"
        rounded
        class="mr-4 elevation-0 submit_button"
        @click="submit()"
      >
        Add booking
      </v-btn>
    </v-form>
  </base-card-box>
</template>
<script>
import { mapMutations } from 'vuex'
import BaseCardBox from '../components/BaseCardBox.vue'

export default {
  name: 'DashboardBookingForm',
  components: {
    BaseCardBox
  },
  data: () => ({
    valid: true,
    firstNameRules: [v => !!v || 'First name is required'],
    lastNameRules: [v => !!v || 'Last name is required'],
    dateRules: [v => !!v || 'Date is required'],
    booking: {
      firstName: '',
      lastName: '',
      date: new Date().toISOString().substr(0, 10),
    },
    datepicker: false,
  }),
  methods: {
    ...mapMutations([
      'addBooking'
    ]),
    submit () {
      if (this.$refs.form.validate()) {
        this.addBooking(this.booking)
        this.clearForm()
      }
    },
    clearForm () {
      this.$refs.form.reset()
      this.booking.firstName = ''
      this.booking.lastName = ''
      this.booking.date = ''
    }
  }
}
</script>
<style lang="scss">
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot.v-input__slot {
    box-shadow: none;
    border: 1px solid #dfdfdf;
  }
   .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot:focus {
    border: 1px solid red !important;
  }
</style>