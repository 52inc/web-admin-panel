<template>
  <v-container fluid>
    <v-card>
      <v-card-row class="primary">
        <v-card-title>
          <span class="white--text">Dashboard</span>
        </v-card-title>
      </v-card-row>
      <v-divider></v-divider>
      <v-card-row class="pa-4">
        <line-chart></line-chart>
      </v-card-row>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40],
        },
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
    })
  }
})

export default {
  name: 'Dashboard',
  data () {
    return {
      message: 'Hello World',
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
