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

      <v-btn icon @click="doRequest">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col :cols="12">
          <v-card>
            <v-tabs show-arrows class="pt-2 pl-2 pr-2">
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
                  <editor
                    v-model="request.body.value"
                    @init="editorInit"
                    lang="json"
                    theme="tomorrow_night_eighties"
                    height="100"
                  ></editor>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {
    editor: require('vue2-ace-editor')

  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.request = to.params.request
      console.log(to.params.requests)
    }
  },
  methods: {
    editorInit: function () {
      require('brace/ext/language_tools') // language extension prerequsite...
      require('brace/mode/html')
      require('brace/mode/json') // language
      require('brace/mode/less')
      require('brace/theme/tomorrow_night_eighties')
      require('brace/snippets/json') // snippet
    },
    addHeader () {
      this.request.headers.push({ 'name': '', 'value': '' })
    },
    deleteHeader (index) {
      this.request.headers.splice(index, 1)
    },
    doRequest () {
      let that = this
      this.$axios({
        method: this.request.method,
        url: this.request.url
      }).then(response => {
        console.log(response)
        that.$set(that.request, 'response', response)
      })
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
