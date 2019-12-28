<template>
  <v-app id="inspire">
    <drawer></drawer>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid :style="{padding: 0}">
        <v-row no-gutters>
          <v-col cols="6">
            <v-toolbar dense>
              <v-select
                value="GET"
                dense
                hide-details
                :menu-props="{ maxHeight: '400' }"
                :items="items"
                :style="{flex: '0 0 100px'}"
              ></v-select>
              <v-text-field dense hide-details single-line :style="{fontSize: '13px'}"></v-text-field>

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
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field label="header" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field label="value" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field label="header" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field label="value" required></v-text-field>
                    </v-col>
                  </v-row>
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
          </v-col>
          <v-col cols="6">
            <v-toolbar dense></v-toolbar>
          </v-col>
        </v-row>
      </v-container>
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
  data () {
    return {
      select: 'Programming',
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
