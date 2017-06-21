<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Listings
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
        :headers="headers"
        :items="items"
        :search="search"
      >
        <template
          slot="items"
          scope="props"
        >
          <td @click.stop="isListingDialogOpen = !isListingDialogOpen">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.author }}</td>
          <td class="text-xs-right">{{ props.item.category }}</td>
          <td class="text-xs-right">{{ props.item.reports }}</td>
          <td class="text-xs-right">{{ props.item.archived }}</td>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>

    <v-btn primary light @click.native.stop="isListingDialogOpen = !isListingDialogOpen">Open Dialog</v-btn>
    <listing-dialog :isListingDialogOpen="isListingDialogOpen" />
  </v-container>
</template>

<script>
import ListingDialog from '@/components/dialogs/Listing'

const data = [
  {
    name: 'textbook',
    author: 'zach barnes',
    category: 'books',
    reports: '0',
    archived: 'false',
  }, {
    name: 'dvd',
    author: 'garfield',
    category: 'electronics',
    reports: '2',
    archived: 'false',
  }, {
    name: 'umbrella',
    author: 'big boy',
    category: 'everything else',
    reports: '0',
    archived: 'true',
  }
]

const headers = [
  { text: 'Name', value: 'name', left: true },
  { text: 'Author', value: 'author' },
  { text: 'Category', value: 'category' },
  { text: 'Reports', value: 'reports' },
  { text: 'Archived', value: 'archived' },
]

export default {
  name: 'Listings',
  components: { ListingDialog },
  data () {
    return {
      search: '',
      pagination: {},
      isListingDialogOpen: false,
      headers: headers,
      items: data,
    }
  },
  watch: {
    isListingDialogOpen: (value) => {
      console.log('Listings', value)
    }
  }
}
</script>

<style lang="stylus">

</style>
