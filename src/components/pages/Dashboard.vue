<template>
  <v-container fluid>
    <v-card>
      <v-card-title >
        Dashboard
        <v-spacer></v-spacer>

        <v-btn
          icon
          class="primary--text"
          @click.native.stop="isRefreshing = !isRefreshing"
        >
          <transition name="rotate">
            <v-icon :class="{'is-rotating': isRefreshing}">
              cached
            </v-icon>
          </transition>
        </v-btn>
      </v-card-title>

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
      isRefreshing: false,
    }
  },
  watch: {
    isRefreshing: () => {
      setTimeout(() => {
        this.isRefreshing = false
        console.log(this.isRefreshing)
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes rotation
  from
    transform: rotate(360deg)
  to
    transform: rotate(0deg)

.is-rotating
  animation: rotation 1s infinite linear

.rotate-enter-active
  animation: rotation 1s infinite linear

.rotate-leave-active
  animation: rotation 1s infinite linear
</style>
