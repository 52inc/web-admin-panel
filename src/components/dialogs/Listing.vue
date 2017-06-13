<template>
  <v-layout row justify-center>
    <v-dialog v-model="isListingDialogOpen">
      <!--<v-btn primary light slot="activator">Open Dialog</v-btn>-->
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
          <v-btn class="blue--text darken-1" flat @click.native="isListingDialogOpen = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="isListingDialogOpen = false">Save</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'ListingDialog',
    props: ['isListingDialogOpen'],
    watch: {
      isListingDialogOpen: (value) => {
        console.log(value)
      }
    }
    // data () {
    //   return {
    //     dialog: this.dialog
    //   }
    // }
  }
</script>

<style lang="stylus" scoped>

</style>
