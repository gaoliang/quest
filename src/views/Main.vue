<template>
  <!-- Provides the application the proper gutter -->
  <v-container fluid :style="{padding: 0}">
    <v-row no-gutters>
      <v-col cols="6">
        <request ref="request" />
      </v-col>
      <v-col cols="6">
        <v-toolbar dense></v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Request from '@/components/Request'
export default {
  components: {
    Request
  }
}
</script>

<style>
</style>
