<template>
  <div>
    <v-toolbar dense>
      <v-select
        v-model="request.method"
        dense
        hide-details
        :menu-props="{ maxHeight: '400' }"
        :items="items"
        :style="{flex: '0 0 100px'}"
      ></v-select>
      <v-text-field
        v-model="request.url"
        dense
        hide-details
        single-line
        :style="{fontSize: '13px'}"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-toolbar>
    <v-tabs show-arrows>
      <v-tab v-for="item in tabItems" :key="item" class="px-2">{{item}}</v-tab>

      <v-tab-item v-for="item in items" :key="item">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="header" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field label="value" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  methods: {
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.request = to.params.request
      console.log(to.params.requests)
    }
  },
  data () {
    return {
      request: {},
      tabItems: ['Headers', 'Body', 'Auth', 'Dependencies', 'Docs', 'Settings'],
      items: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
        'HEAD',
        'OPTIONS'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.v-tab {
  text-transform: none;
  font-size: 15px;
  min-width: 0;
  letter-spacing: 0;
}
</style>
