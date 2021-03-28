<template>
  <div class="dashboard pt-12 mt-12">
    <v-row>
      <v-col cols="5">
        <v-card
          outlined
        >
          <v-form
            ref="form"
            v-model="valid"
            class="pa-8"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            />

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />

            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="Date"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
              />
            </v-menu>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
            >
              Validate
            </v-btn>
          </v-form>
        </v-card>
        <v-card
          class="mt-6"
          outlined
        >
          s
        </v-card>
      </v-col>
      <v-col cols="7">
        <v-card
          outlined
        >
          <dashboard-booking-chart />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DashboardBookingChart from '../components/DashboardBookingChart.vue'

export default {
  name: 'Home',
  components: {
    DashboardBookingChart
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
  })
}
</script>

<style lang="scss">
.dashboard {
  .v-card, .v-app-bar {
    background: #f8fafb;
    box-shadow: 10px 10px 40px #d6d8d9, -20px -20px 60px #ffffff;
  }
}

</style>