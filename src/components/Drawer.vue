<template>
  <v-navigation-drawer app permanent>
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

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item-group color="primary">
        <v-list-item v-for="api in apis" :key="api.id" link @click.right="show">
          <v-list-item-icon>GET</v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ api.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ api.url }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click.stop="show">
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
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>底部按钮</v-btn>
      </div>
    </template>
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
      apis: [],
      items: [
        { title: '获取个人信息', method: 'GET', 'url': 'https://www.bilibili.com/api/userProfile' },
        { title: '获取视频封面', method: 'POST', 'url': 'https://www.bilibili.com/api/thumb/hello' }
      ],
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
    show (e) {
      e.preventDefault()
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
