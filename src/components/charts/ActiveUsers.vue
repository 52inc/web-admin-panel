<template>
  <line-chart
    class="chart"
    :data="data"
    :options="options"
  />
</template>

<script>
import LineChart from './base/Line'

export default {
  name: 'ListingsChart',
  components: { LineChart },
  data () {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Users',
            backgroundColor: 'rgba(52, 152, 219, 0.4)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(52, 152, 219, 1)',
            data: [60, 29, 30, 20, 16, 10, 2]
          }, {
            label: 'Organizations',
            backgroundColor: 'rgba(46, 204, 113, 0.4)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(46, 204, 113, 1)',
            data: [40, 39, 10, 40, 39, 80, 40]
          }, {
            label: 'Sponsors',
            backgroundColor: 'rgba(142, 68, 173, 0.4)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(142, 68, 173, 1)',
            data: [4, 10, 2, 5, 20, 10, 100]
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
</style>
