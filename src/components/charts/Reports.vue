<template>
  <bar-chart
    class="chart"
    :data="data"
    :options="options"
  />
</template>

<script>
import BarChart from './base/Bar'

export default {
  name: 'ReportsChart',
  components: { BarChart },
  data () {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'reports',
            backgroundColor: 'rgba(52, 152, 219, 0.8)',
            borderColor: 'transparent',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
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
