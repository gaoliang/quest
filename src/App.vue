<template>
  <v-app id="inspire">
    <drawer></drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'

export default {
  name: 'App',
  components: {
    Drawer
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>
