<template>
  <div>
    <nav>
      <v-navigation-drawer v-model="drawer" dark app color="var(--admin-color)">
        <div class="px-2 py-4 d-flex justify-space-between">
          <div>
            <v-icon color="white" class="ml-2" large>mdi-ticket</v-icon>
          </div>
          <div class="d-flex">
            <div class="mr-2">
              <v-btn icon>
                <v-badge color="#0d9488" content="3" dot><v-icon color="white" medium>mdi-bell-outline</v-icon></v-badge>
              </v-btn>
            </div>
            <div>
              <v-btn @click="logout()" icon>
                <v-icon color="white" medium>mdi-account-circle-outline</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <v-layout column align-center>
          <div class="mt-5 text-center">
            <v-avatar size="100">
              <v-img src="../assets/image/admin2.jpg"></v-img>
            </v-avatar>
            <p class="white--text subheading my-2 text-center">Adminbek</p>
            <p class="white--text subheading text-center grey--text text-caption">admin@gmail.com</p>
          </div>
        </v-layout>

        <v-list dense nav class="px-2">
          <v-list-item-group v-model="selectedItem" color="gray">
            <v-list-item v-for="link, index in links" :key="index" link @click="routerLink(link.to)">
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-2 text-start" v-text="link.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="white" dark app>
        <v-app-bar-nav-icon color="var(--admin-color)" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <div>
          <div class="d-md-flex align-md-center justify-md-end d-none">
            <v-text-field style="width: 100%; height: 40px; background: var(--admin-color);" outlined rounded hide-details dense
              clearable label="Search..." append-icon="mdi-magnify"></v-text-field>
            <v-btn icon>
              <v-icon color="var(--admin-color)">mdi-cog-outline</v-icon>
            </v-btn>
            <v-menu rounded offset-y open-on-hover>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon color="var(--admin-color)">mdi-web</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item class="d-flex align-center px-5 py-0" v-for="(item, index) in items" :key="index" link
                  @click="exchange(item.value)">
                  <v-img :src="require(`../assets/image/${item.flag}.png`)" width="20" class="mr-1"></v-img>
                  <v-list-item-title v-text="item.state" class="text-caption"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-app-bar>
      
    </nav>
  </div>
</template>
    
<script>

export default {
  name: "AdminNavbar",
  data: () => ({
    drawer: true,
    group: null,
    selectedItem: 0,
    items: [
      { flag: "lat", state: "O'zbek", value: "uz", appear: true },
      { flag: "russia", state: "Русский", value: "ru", appear: true },
    ],
    links: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        to: "/admin",
      },
      {
        title: "Create Form",
        icon: "mdi-text-box",
        to: "/create",
      },
      {
        title: "Artists List",
        icon: "mdi-microphone",
        to: "/artist",
      },
      // {
      //   title: "Table",
      //   icon: "mdi-chart-bar",
      //   to: "/table",
      // },
      // {
      //   title: "Lists",
      //   icon: "mdi-list-box",
      //   to: "/",
      // },
      // {
      //   title: "Guide",
      //   icon: "mdi-navigation-variant",
      //   to: "/",
      // },
      {
        title: "Report",
        icon: "mdi-information",
        to: "/report",
      }
    ]
  }),


  methods: {
    routerLink(to) {
      this.$router.push(to);
    },
    routerVirtual(to) {
      this.$router.push(to);
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    addUser() {
      this.$router.push('/userCreate');
    }

  }
}
</script>
    
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>