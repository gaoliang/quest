<template>
  <div>
    <v-toolbar dense>
      <v-select
        v-model="api.method"
        dense
        hide-details
        :menu-props="{ maxHeight: '400' }"
        :items="items"
        :style="{flex: '0 0 100px'}"
      ></v-select>
      <v-text-field v-model="api.url" dense hide-details single-line :style="{fontSize: '13px'}"></v-text-field>

      <v-btn icon>
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-toolbar>
    <v-tabs centered center-active slider-size="2" height="30px">
      <v-tab v-for="item in tabItems" :key="item">{{item}}</v-tab>

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
      this.api = to.params.api
    }
  },
  data () {
    return {
      api: {},
      tabItems: ['Header', 'Body', 'Auth', 'Dependencies', 'Docs', 'Settings'],
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
.url_input {
}
</style>
