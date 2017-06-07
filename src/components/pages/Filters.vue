<template>
  <v-container fluid>
    <v-card>
      <v-card-row class="primary">
        <v-card-title>
          <span class="white--text">Add filters</span>
        </v-card-title>
      </v-card-row>
      <v-card-text>

      </v-card-text>
      <v-divider></v-divider>
      <v-card-row actions>
        <v-btn flat class="primary--text">View Email</v-btn>
      </v-card-row>
    </v-card>

    <!-- v-btn floating right class="indigo text-xs-right">
      <v-icon light>add</v-icon>
    </v-btn> -->

    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @cache="cache"
      @alertMe="alert"
    ></fab>
  </v-container>
</template>

<script>
  import fab from 'vue-fab'

  export default {
    name: 'Filters',
    components: {
      fab
    },
    data () {
      return {
        bgColor: '#52A9DB',
        position: 'bottom-right',
        fabActions: [
          {
            name: 'cache',
            icon: 'cached'
          }, {
            name: 'alertMe',
            icon: 'add_alert'
          }
        ]
      }
    },
    methods: {
      cache () {
        console.log('Cache Cleared')
      },
      alert () {
        alert('Clicked on alert icon')
      }
    }
  }
</script>

<style scoped>
.container {
  position: relative;
}
</style>
