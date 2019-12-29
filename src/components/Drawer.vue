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
      <v-text-field label="Filter" dense clearable></v-text-field>
    </template>
    <!-- <v-divider></v-divider> -->

    <v-list dense>
      <v-list-item-group>
        <v-list-item
          v-for="request in requests"
          :key="request.id"
          link
          :to="{ name: 'main', params: { requestId: request.id, request: request }}"
          @click.right="show($event, request.id)"
        >
          <v-list-item-icon>GET</v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ request.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ request.url }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="show($event, request.id)">
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
          <v-list-item @click="deleteRequest">
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
    this.requests = this.$db.read().get('requests').value()
  },
  data () {
    return {
      dialog: false,
      newRequestName: '',
      currentActionRequestId: '',
      requests: [],
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
      this.$db.read().get('requests').insert({ title: this.newRequestName }).write()
      this.newRequestName = ''
      this.requests = this.$db.read().get('requests').value()
      this.dialog = false
    },
    deleteRequest () {
      console.log('delete request: ' + this.currentActionRquestId)
      this.$db.get('requests').remove({ id: this.currentActionRequestId }).write()
      this.requests = this.$db.read().get('requests').value()
    },
    show (e, requestId) {
      e.preventDefault()
      this.currentActionRequestId = requestId
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
