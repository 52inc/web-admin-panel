<template>
  <doughnut-chart
    class="chart"
    :data="data"
    :options="options"
  />
</template>

<script>
import DoughnutChart from './base/Doughnut'

export default {
  name: 'PageviewsChart',
  components: { DoughnutChart },
  data () {
    return {
      data: {
        labels: ['Chrome', 'Firefox', 'IE', 'Safari', 'Mobile'],
        datasets: [
          {
            backgroundColor: [
              'rgba(52, 152, 219, 0.8)',
              'rgba(46, 204, 113, 0.8)',
              'rgba(142, 68, 173, 0.8)',
              'rgba(52, 73, 94, 0.8)',
              'rgba(243, 156, 18, 0.8)',
            ],
            borderColor: 'transparent',
            data: [40, 20, 75, 10, 5]
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
