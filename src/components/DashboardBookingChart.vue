<template>
  <base-card-box label="Booking statistics" style="height: 100%">
    <line-chart
      v-if="bookingCollection"
      class="pa-6"
      :height="barheight"
      :chart-data="bookingCollection"
      :options="options"
    />
    <p v-if="!bookingCollection" class="font-weight-bold">
      No Available Data for Events
    </p>
  </base-card-box>
</template>
<script>
import BaseCardBox from '@/components/BaseCardBox.vue'
import LineChart from '@/components/BaseLineChart.vue'
import { mapGetters } from 'vuex'
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels'
import { bookingOptions } from '@/config/bookingChartOptions.js'
import chroma from 'chroma-js'
import { countBy, uniqBy, map, sortBy } from 'lodash'

export default {
  name: 'DashboardBookingChart',
  components: {
    LineChart,
    BaseCardBox
  },
  data:() => ({
    barheight: 280,
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
      const eventColorPallete = chroma.scale(['#004F73', '#8ec2ed']).mode('lab').colors(bookingDates.length)
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
  .chart_card {
    height: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  
</style>