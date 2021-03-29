<template>
  <base-card-box label="Manage bookings" class="mt-4 dashboard_booking_table">
    <v-data-table
      :headers="headers"
      :items="getBookings"
      :hide-default-header="true"
      :items-per-page="3"
      class="elevation-0 pa-6"
    >
      <template v-slot:[`item.firstName`]="{ item }">
        <span class="font-weight-bold primary-lighter-color">{{ item.firstName }}  {{ item.lastName }}</span>
      </template>
      <template v-slot:[`item.id`]="{ item }">
        <v-menu
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list class="menu_options">
            <v-list-item @click="verifyDeleteBooking(item.id)">
              <v-list-item-title style="color: #8D0000">
                Delete
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </base-card-box>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import BaseCardBox from '../components/BaseCardBox.vue'

export default {
  name: 'DashboardBookingTable',
  components: {
    BaseCardBox 
  },
  data () {
    return {
      headers: [
        {
          text: 'name',
          align: 'start',
          sortable: false,
          value: 'firstName',
        },
        { text: 'date', value: 'date' },
        { text: 'action', value: 'id' }
      ]
    }
  },
  computed: {
    ...mapGetters(['getBookings'])
  },
  methods: {
    ...mapMutations([
      'removeBooking'
    ]),
    verifyDeleteBooking (bookingId) {
      if (window.confirm('Are you sure that you want to delete that record?')) {
        this.removeBooking(bookingId)
      } else {

      }
    }
  }
}
</script>
<style lang="scss">
.dashboard_booking_table {
  .v-data-footer__select {
    display: none !important
  }
  .v-data-footer {
    padding-top: 15px
  }
}
.menu_options {
    padding: 0px !important;
    box-shadow: none;
    .v-list-item:hover  {
      cursor: pointer;
      background: #F8FAFB
    }
    .v-list-item {
      border: 1px solid #D6D8D9 !important;
      min-height: 36px;
    }
}
</style>