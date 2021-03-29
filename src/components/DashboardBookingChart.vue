/* eslint-disable no-console */
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
import { countBy, groupBy, map, sortBy } from 'lodash'
import chroma from 'chroma-js'
import moment from 'moment'


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
      const groupedByMonth = this.groupDateByMonth(sortedBookingsByDate)
      const bookingDates = Object.keys(groupedByMonth)
      const bookingCountByMonth = map(groupedByMonth, 'length')
      const eventColorPallete = chroma.scale(['#004F73', '#206789']).mode('lab').colors(bookingDates.length)
      return {
        labels: bookingDates,
        datasets: [
          {
            label: ['Bookings by day'],
            backgroundColor: eventColorPallete,
            data: bookingCountByMonth
          }
        ]
      }
    },
    groupDateByMonth (bookings) {  
      return groupBy(bookings,function (booking){
        return moment(booking.date).format('MMM YY')
      })
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