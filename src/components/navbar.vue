<template>
  <div>
    <v-navigation-drawer width="276" v-model="drawer" temporary app style="z-index: 999;">
      <div class="title py-3 pl-4">
        <h3>Xalqlar Do'stligi</h3>
      </div>

      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="var(--main-color)">
          <v-list-item v-for="item, index in navbarDate" :key="index" @click="routerLink(item.link)"
            active-class="var(--main-color)--text" class="pa-2">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-2 text-start">{{ $t(item.title) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="mx-auto px-0" absolute style="z-index: 9; top: 47px;" color="rgba(5,0,0,0.4)">
      <div class="responsive__style">
        <div>
          <router-link to="/">
            <v-img class="shrink" width="130" src="../assets/image/logo4.png" alt="Logotip" />
          </router-link>
        </div>
        <div>
          <div class="d-md-none d-block">
            <v-app-bar-nav-icon class="d-md-none d-block" @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
          </div>
          <div class="d-md-flex align-md-center d-none">
            <ul class="menu">
              <li class="menu__item">
                <router-link to="/"> {{ $t("navbar.home") }} </router-link>
              </li>
              <li class="menu__item">
                <a href="#"> {{ $t("navbar.placard") }} </a>
                <ul class="drop__menu">
                  <li class="drop__menu-item">
                    <router-link to="/" class="menu__link">Page 1</router-link>
                  </li>
                  <li class="drop__menu-item">
                    <router-link to="/" class="menu__link">Page 2</router-link>
                  </li>
                  <li class="drop__menu-item">
                    <router-link to="/" class="menu__link">Page 3</router-link>
                  </li>
                </ul>
              </li>

              <li class="menu__item">
                <router-link to="/event"> {{ $t("navbar.ticket") }} </router-link>
                <ul class="drop__menu">
                  <li class="drop__menu-item">
                    <router-link to="/" class="menu__link">Page 1</router-link>
                  </li>
                  <li class="drop__menu-item">
                    <router-link to="/" class="menu__link">Page 2</router-link>
                  </li>
                </ul>
              </li>

              <li class="menu__item">
                <router-link to="/news"> {{ $t("navbar.news") }} </router-link>
              </li>

              <li class="menu__item">
                <router-link to="/contact"> {{ $t("navbar.contact") }} </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>
  
<script>
export default {
  name: "Navbar",

  data: () => ({
    drawer: false,
    selectedItem: 0,
    navbarDate: [
      {
        link: '/',
        title: "navbar.home",
        icon: "mdi-view-dashboard"
      },
      {
        link: '/',
        title: "navbar.placard",
        icon: "mdi-advertisements"
      },
      {
        link: '/event',
        title: "navbar.ticket",
        icon: "mdi-ticket"
      },
      {
        link: '/news',
        title: "navbar.news",
        icon: "mdi-newspaper"
      },
      {
        link: '/contact',
        title: "navbar.contact",
        icon: "mdi-phone"
      },

    ]
  }),
  methods: {
    routerLink(link) {
      this.$router.push(link)
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

.menu,
.drop__menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu__item {
  display: inline-block;
  padding: 0 15px;
  position: relative;

  a {
    color: white;
  }
}

.drop__menu {
  width: 100%;
  min-width: 220px;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 45px;
  background-color: #fff;
  border-top: 3px solid var(--main-color);
  ;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px, 10px, 0 rgba(0, 0, 0, .12);
  transition: all .5s ease;
}

.drop__menu-item {
  width: 100%;
  transition: all .5s ease;
  padding: 4px 10px;
  border-bottom: 1px solid #eee;
}

.drop__menu-item:hover {
  background-color: #eee;
  transition: .1s;
}

.drop__menu-item a {
  color: #555
}

.menu__item:hover .drop__menu {
  visibility: visible;
  opacity: 1;
  transition: .1s;
}

.menu__link {
  width: 100%;
  color: #292c43;
  display: inline-block;
  font-weight: 500;
  margin-bottom: 0;
  padding-left: 3px;
  position: relative;
  transition: all 0.3s ease;
}

.menu__link:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 10px;
  background-color: var(--main-color);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.menu__link:hover:before {
  opacity: 1;
}

.menu__link:hover {
  color: var(--main-color);
  padding-left: 16px;
}
</style>
  
  
  