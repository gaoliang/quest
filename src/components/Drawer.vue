<template>
  <v-navigation-drawer app permanent>
    <template v-slot:prepend>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">B站相关接口</v-list-item-title>
            <v-list-item-subtitle>https://www.bilibili.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>

    <v-divider></v-divider>

    <v-text-field label="Filter" dense clearable></v-text-field>
    <v-list dense nav>
      <v-list-item-group>
        <v-list-item
          v-for="api in apis"
          :key="api.id"
          link
          :to="{ name: 'main', params: { apiId: api.id, api: api }}"
          @click.right="show($event, api.id)"
        >
          <v-list-item-icon>GET</v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ api.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ api.url }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="show($event, api.id)">
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
      <v-card>
        <v-list dense>
          <v-list-item @click="console.log('hi')">
            <v-list-item-icon>
              <v-icon>mdi-content-duplicate</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Duplicate</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-textbox</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Rename</v-list-item-title>
          </v-list-item>
          <v-list-item @click="deleteApi">
            <v-list-item-icon>
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="success" @click="dialog = true">
          <v-icon dark>mdi-plus</v-icon>New
        </v-btn>
      </div>
    </template>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New Request:</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Name*" required v-model="newRequestName"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="createNewRequest()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  mounted () {
    this.apis = this.$db.read().get('apis').value()
  },
  data () {
    return {
      dialog: false,
      newRequestName: '',
      currentActionApiId: '',
      apis: [],
      showMenu: false,
      x: 0,
      y: 0,
      popupItems: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
      right: null
    }
  },
  methods: {
    createNewRequest () {
      this.$db.read().get('apis').insert({ title: this.newRequestName }).write()
      this.newRequestName = ''
      this.apis = this.$db.read().get('apis').value()
      this.dialog = false
    },
    deleteApi () {
      console.log('delete api: ' + this.currentActionApiId)
      this.$db.get('apis').remove({ id: this.currentActionApiId }).write()
      this.apis = this.$db.read().get('apis').value()
    },
    show (e, apiId) {
      e.preventDefault()
      this.currentActionApiId = apiId
      this.showMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.showMenu = true
      })
    }
  }
}
</script>

<style>
</style>
