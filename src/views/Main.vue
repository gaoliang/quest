<template>
  <!-- Provides the application the proper gutter -->
  <v-container fluid :style="{padding: 0}">
    <v-row no-gutters>
      <v-col cols="6" class="pr-2">
        <request-panel ref="request" />
      </v-col>
      <v-col cols="6">
        <v-toolbar dense>
          <v-chip class="ma-2" color="green" text-color="white" v-if="request.response">
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            {{ request.response.status }} {{request.response.statusText}}
          </v-chip>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RequestPanel from '@/components/RequestPanel'
export default {
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.request = to.params.request
      console.log(to.params.requests)
    }
  },
  components: {
    RequestPanel
  },
  data () {
    return {
      request: {}
    }
  }
}
</script>

<style>
</style>
