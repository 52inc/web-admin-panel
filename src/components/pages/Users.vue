<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Users
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        />
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
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.sodium }}</td>
          <td class="text-xs-right">{{ props.item.calcium }}</td>
          <td>
            <v-edit-dialog
              class="text-xs-right"
              @open="props.item._iron = props.item.iron"
              @cancel="props.item.iron = props.item._iron || props.item.iron"
              large
              lazy
            >
              <div class="text-xs-right">{{ props.item.iron }}</div>
              <div slot="input" class="mt-3 title">Update Iron</div>
              <v-text-field
                slot="input"
                label="Edit"
                v-bind:value="props.item.iron"
                v-on:blur="val => props.item.iron = val"
                single-line
                counter
                autofocus
              ></v-text-field>
            </v-edit-dialog>
          </td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>

    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @addUser="addUser"
    ></fab>

    <v-dialog v-model="isUserDialogOpen">
      <v-card>
        <v-card-row>
          <v-card-title>User Profile</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-text-field label="Email" required></v-text-field>
            <v-text-field label="Password" type="password" required></v-text-field>
            <v-text-field label="Legal first name" required></v-text-field>
            <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
            <v-text-field label="Legal last name" hint="example of persistent helper text"
              persistent-hint
              required
            ></v-text-field>
            <v-select
              label="Age"
              required
              :items="['0-17', '18-29', '30-54', '54+']"
            ></v-select>
            <small>*indicates required field</small>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="isUserDialogOpen = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="isUserDialogOpen = false">Save</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import fab from 'vue-fab'

export default {
  name: 'Users',
  components: {
    fab
  },
  data () {
    return {
      isUserDialogOpen: false,
      search: '',
      pagination: {},
      bgColor: '#52A9DB',
      position: 'bottom-right',
      fabActions: [
        {
          name: 'addUser',
          icon: 'account_circle'
        }
      ],
      headers: [
        {
          text: 'Dessert (100g serving)',
          left: true,
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Sodium (mg)', value: 'sodium' }
      ],
      items: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54
        }
      ]
    }
  },
  methods: {
    addUser (event) {
      console.log('Adding user...')
      this.isUserDialogOpen = !this.isUserDialogOpen
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
