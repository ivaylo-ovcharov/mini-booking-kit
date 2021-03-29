<template>
  <div>
    <v-app>
      <the-navigation-bar />
      <v-container>
        <router-view />
      </v-container>
      <the-footer />
    </v-app>
  </div>
</template>

<script>
import TheNavigationBar from '@/components/TheNavigationBar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavigationBar,
    TheFooter
  }
}
</script>

