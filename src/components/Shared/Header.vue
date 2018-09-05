<template>
  <header>
    <v-navigation-drawer dark v-model="sideNav" fixed>
      <v-toolbar flat>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-list-tile-title>
              {{item.title}}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>

    <v-toolbar dense dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Lisa Rohrmoser</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Home', icon: '', link: '/' },
        { title: 'Alle Posts', icon: '', link: '/posts' },
        { title: 'Über uns', icon: '', link: '/about' }
      ]
    }
  }
}
</script>
