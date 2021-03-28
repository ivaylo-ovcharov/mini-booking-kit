<template>
  <div>
    <v-app>
      <v-app-bar
        app
      >
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="@/assets/logo.png"
            width="100"
          />
        </div>
      </v-app-bar>
      <v-container>
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
