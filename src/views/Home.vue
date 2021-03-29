<template>
  <div class="dashboard pt-12 mt-12">
    <p class="headline font-weight-bold mb-0">
      Mini BookingKit
    </p>
    <p>Hello dear visitor, add some records to our database.</p>
    <v-row>
      <v-col cols="12" md="5">
        <dashboard-booking-form />
        <dashboard-booking-table />
      </v-col>
      <v-col cols="12" md="7">
        <dashboard-booking-chart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DashboardBookingChart from '../components/DashboardBookingChart.vue'
import DashboardBookingForm from '../components/DashboardBookingForm.vue'
import DashboardBookingTable from '../components/DashboardBookingTable.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardBookingChart,
    DashboardBookingForm,
    DashboardBookingTable, 
  },
}
</script>
