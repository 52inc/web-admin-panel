<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm4 class="mb-4">
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  name="filterKeyword"
                  label="Keyword"
                  single-line
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-btn-dropdown
                  v-bind:options="[
                    { text: 'Report Post' },
                    { text: 'Report User' },
                    { text: 'Delete Matched' },
                  ]"
                  label="Action"
                ></v-btn-dropdown>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm8>
        <v-card>
          <v-card-title>
            Filters
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-bind:headers="headers"
            v-bind:items="items"
            v-bind:search="search"
          >
            <template slot="items" scope="props">
              <td>
                <v-edit-dialog
                  @open="props.item._name = props.item.name"
                  @cancel="props.item.name = props.item._name || props.item.name"
                  lazy
                > {{ props.item.name }}
                  <v-text-field
                    slot="input"
                    label="Edit"
                    v-bind:value="props.item.name"
                    v-on:change="val => props.item.name = val"
                    single-line counter="counter"
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">{{ props.item.keyword }}</td>
              <td class="text-xs-right">{{ props.item.action }}</td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Filters',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Keyword',
            value: 'keyword',
            left: true,
          }, {
            text: 'Action',
            value: 'action',
          },
        ],
        items: [
          {
            keyword: 'fuck',
            action: 'notification',
          }, {
            keyword: 'shit',
            action: 'delete',
          }, {
            keyword: 'dick',
            action: 'notification',
          }, {
            keyword: 'cunt',
            action: 'notification',
          }
        ]
      }
    }
  }
</script>

<style scoped>
.container {
  position: relative;
}
</style>
