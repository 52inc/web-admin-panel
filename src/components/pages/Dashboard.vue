<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            Active users
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="secondary--text"
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
            <active-users-chart />
          </v-card-row>
        </v-card>
      </v-flex>

      <v-flex xs12 md5>
        <v-card class="mt-4">
          <v-card-title>
            Pageviews by browser
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="secondary--text"
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
            <pageviews-chart />
          </v-card-row>
        </v-card>
      </v-flex>

      <v-flex xs12 md7>
        <v-card class="mt-4">
          <v-card-title>
            Reports in past month
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="secondary--text"
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
            <reports-chart />
          </v-card-row>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card class="mt-4">
          <v-card-title>
            Listings (past month)
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="secondary--text"
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
            <listings-chart />
          </v-card-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ActiveUsersChart from '@/components/charts/ActiveUsers'
import ReportsChart from '@/components/charts/Reports'
import PageviewsChart from '@/components/charts/Pageviews'
import ListingsChart from '@/components/charts/Listings'

export default {
  name: 'Dashboard',
  components: {
    ActiveUsersChart,
    ReportsChart,
    PageviewsChart,
    ListingsChart,
  },
  data () {
    return {
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
