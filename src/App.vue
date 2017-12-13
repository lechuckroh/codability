<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          router
          v-for="(item, idx) in menuItems"
          :key="idx"
          :to="item.to"
          value="true"
        >
          <v-list-tile-action>
            <v-icon light color="green" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="true" app>
      <span>Codability &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        menuItems: [{
          icon: 'bubble_chart',
          title: 'Hello',
          to: '/'
        }, {
          icon: 'bubble_chart',
          title: 'Timer',
          to: '/timer'
        }],
        miniVariant: false,
        title: 'Codability'
      };
    }
  };
</script>
