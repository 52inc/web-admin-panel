<template>
  <radar-chart
    class="chart"
    :data="data"
    :options="options"
  />
</template>

<script>
import RadarChart from './base/Radar'

export default {
  name: 'ListingsChart',
  components: { RadarChart },
  data () {
    return {
      data: {
        labels: ['Apparel', 'Books', 'Electronics', 'Everything Else', 'Free', 'Housing', 'Recreation', 'Rentals', 'Services'],
        datasets: [
          {
            label: 'Sponsored',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'User based',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.chart
  position: relative
  overflow: hidden
  width: 100%
  height: 100%
  min-height: 500px;
</style>
