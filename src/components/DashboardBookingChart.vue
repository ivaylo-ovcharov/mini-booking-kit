<template>
  <base-card-box label="Booking statistics" class="dashboard_booking_chart">
    <div class="d-flex justify-center align-center chart_container">
      <bar-chart
        v-if="bookingCollection && getBookings.length"
        class="pa-6 bar_chart"
        :height="barheight"
        :chart-data="bookingCollection"
        :options="options"
      />
      <p v-else class="font-weight-bold">
        No Available Data for bookings
      </p>
    </div>
  </base-card-box>
</template>
<script>
import BaseCardBox from '@/components/BaseCardBox.vue'
import BarChart from '@/components/BaseBarChart.vue'
import { mapGetters } from 'vuex'
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels'
import { bookingOptions } from '@/config/bookingChartOptions.js'
import { countBy, uniqBy, map, sortBy } from 'lodash'
import chroma from 'chroma-js'

export default {
  name: 'DashboardBookingChart',
  components: {
    BarChart,
    BaseCardBox
  },
  data:() => ({
    barheight: 240,
    bookingCollection: null,
    options: bookingOptions
  }),
  computed: {
    ...mapGetters(['getBookings'])
  },
  mounted () {
    this.$watch('getBookings', bookings => {
      this.bookingCollection = this.generateBookingChart(bookings)
    },
    {
      immediate: true
    })
    
  },
  methods: {
    generateBookingChart (bookings) {
      const sortedBookingsByDate = sortBy(bookings, 'date')
      const bookingDates = this.getBookingDates(sortedBookingsByDate)
      const bookingCountByDay = this.getBookingCountByDate(sortedBookingsByDate)
      const eventColorPallete = chroma.scale(['#004F73', '#206789']).mode('lab').colors(bookingDates.length)
      return {
        labels: bookingDates,
        datasets: [
          {
            label: ['Bookings by day'],
            backgroundColor: eventColorPallete,
            data: bookingCountByDay
          }
        ]
      }
    },
    getBookingDates (bookings) {
      const bookingUniqueByDates = uniqBy(bookings, 'date')
      return map(bookingUniqueByDates, 'date')
    },
    getBookingCountByDate (bookings) {
      return Object.values(countBy(bookings, 'date'))
    }
  }
}
</script>

<style lang="scss">
.dashboard_booking_chart {
  height: 100%;
  .chart_container {
    height: 100%
  }
  .bar_chart {
    width: 100%
  }
}
</style>