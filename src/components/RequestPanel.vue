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
      <v-tab key="headers" class="px-2">Header</v-tab>
      <v-tab key="body" class="px-2">Body</v-tab>

      <v-tab-item key="headers">
        <v-container>
          <v-row v-for="(header, index) in request.headers" :key="index">
            <v-col cols="12" md="6" class="py-0">
              <v-combobox :items="items" label="name" hide-details :value="header.name"></v-combobox>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                label="value"
                required
                hide-details
                v-model="header.value"
                append-outer-icon="mdi-delete"
                @click:append-outer="deleteHeader(index)"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="text-center pt-4">
            <v-btn small color="primary" @click="addHeader">Add Header</v-btn>
          </div>
        </v-container>
      </v-tab-item>

      <v-tab-item key="body">
        <v-container>
          this is body
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>

export default {
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.request = to.params.request
      console.log(to.params.requests)
    }
  },
  methods: {
    addHeader () {
      this.request.headers.push({ 'name': '', 'value': '' })
    },
    deleteHeader (index) {
      this.request.headers.splice(index, 1)
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
