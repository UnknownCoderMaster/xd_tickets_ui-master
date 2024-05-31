<template>
  <div>
    <div :class="{ rocketUp: comin, rocketDown: leavin }" @click="scrollPos()">
      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.52 256.01">
        <path class="cls-1"
          d="M487.41,355.05,252.74,120.38a10.67,10.67,0,0,0-15.08,0L3,355.05a10.67,10.67,0,0,0,15.09,15.08L245.19,143,472.31,370.15a10.66,10.66,0,0,0,15.08-15.08Z"
          transform="translate(0 -117.26)" />
        <path
          d="M479.86,373.27a10.68,10.68,0,0,1-7.55-3.12L245.19,143,18.08,370.15A10.67,10.67,0,0,1,3,355.07L237.66,120.4a10.67,10.67,0,0,1,15.08,0L487.41,355.07a10.67,10.67,0,0,1-7.55,18.2Z"
          transform="translate(0 -117.26)" />
      </svg>
    </div>
    <v-app>
      <v-app-bar class="mx-auto" dense dark absolute style="z-index: 99;" color="black">
        <div class="responsive__style">

          <div class="d-md-flex align-center d-none">
            <v-icon small>mdi-email-outline</v-icon>
            <p class="mb-0 mr-3 ml-1 text-caption">istiqlolsanatsaroyi@gmail.com</p>
            <v-icon small>mdi-phone</v-icon>
            <p class="mb-0 ml-1 text-caption">+998 71 245 92 51</p>
          </div>

          <div class="d-md-none d-flex">

            <ul class="menu">
              <li class="menu__item pl-2">
                <a href="#">
                  <v-icon>mdi-account-group</v-icon></a>
                <ul class="drop__menu">
                  <li class="drop__menu-item">
                    <a href="#" class="d-flex align-center">
                      <v-icon small color="black" class="mr-2">mdi-email-outline</v-icon>
                      <p class="mb-0 mr-3 text-caption">istiqlolsanatsaroyi@gmail.com</p>
                    </a>
                  </li>
                  <li class="drop__menu-item">
                    <a href="#" class="d-flex align-center">
                      <v-icon small color="black" class="mr-2">mdi-phone</v-icon>
                      <p class="mb-0 text-caption">+998 71 245 92 51</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <v-spacer></v-spacer>
          <div class="search_section d-none d-md-block">
            <div class="search__block">
              <input class="nosubmit" type="search" v-model="searchArtist" @change="searching()" placeholder="Search...">
            </div>
          </div>


          <div class="text-center">
            <v-dialog v-model="dialogSearch">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="d-md-none d-block" icon v-bind="attrs" v-on="on">
                  <v-icon size="18">mdi-magnify</v-icon>
                </v-btn>
              </template>

              <v-card class="pa-1">
                <v-form @submit.prevent="searching()">
                  <v-text-field v-model="searchArtist" prepend-inner-icon="mdi-magnify" outlined hide-details dense
                    clearable label="Search..."></v-text-field>
                </v-form>
              </v-card>
            </v-dialog>
          </div>


          <v-btn icon @click="toggleTheme()">
            <!-- <v-icon size="18" v-if="!darken">mdi-weather-night</v-icon>
            <v-icon size="18" v-else>mdi-white-balance-sunny</v-icon> -->
            <span v-if="$vuetify.theme.dark" style="font-size: 15px;">☀️</span>
            <span v-else style="font-size: 15px;">🌙</span>
          </v-btn>
          <v-menu rounded offset-y open-on-hover>
            <template v-slot:activator="{ attrs, on }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon size="18" color="white">mdi-web</v-icon>
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
          <v-btn icon @click="logout()">
            <v-icon size="18">mdi-login</v-icon>
          </v-btn>
        </div>
      </v-app-bar>
      <Navbar />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>
  
<script>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue'
import { mapActions } from 'vuex';

export default {
  name: "AuthLayout",
  data: () => ({
    topPoint: 0,
    dialogSearch: false,
    searchArtist: "",
    items: [
      { flag: "lat", state: "O'zbek", value: "uz", appear: true },
      { flag: "russia", state: "Русский", value: "ru", appear: true },
    ],
  }),
  components: { Navbar, Footer },
  computed: {
    comin() {
      return this.topPoint > 250 ? true : false;
    },
    leavin() {
      return this.topPoint > 250 ? false : true;
    },
  },
  mounted() {
    this.$vuetify.theme.dark = localStorage.getItem('DarkMode') === 'true' ?? false;
    window.addEventListener("scroll", () => {
      this.topPoint = window.scrollY;
    });
  },
  methods: {
    ...mapActions("eventDetail", ["getSingleEventBySearch"]),
    exchange(locale) {
      this.$i18n.locale = locale;
    },
    searching() {
      this.dialogSearch = false;
      if (this.searchArtist.trim()) {
        let newTrim = this.searchArtist.trim();
        this.$router.push(`/search?q=${newTrim}`);
        this.getSingleEventBySearch(newTrim).then(() =>
          this.searchArtist = ''
        )
      }
    },
    scrollPos() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    toggleTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("DarkMode", this.$vuetify.theme.dark)
      }
      else {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("DarkMode", this.$vuetify.theme.dark)
      }
    },
    exchange(locale) {
      this.$i18n.locale = locale;
    },
    logout() {
      // localStorage.removeItem('token', "Bearer");
      this.$router.push('/login')
    }
  },
  watch: {
    "$vuetify.theme.dark": {
      handler() {
        this.refresh();
      }
    }
  }
};
</script>
  
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

.rocketUp {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--main-color);
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  animation: comingUp 0.5s linear;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 10px 0px rgb(111, 190, 74);
  }

  svg {
    width: 100%;
    max-width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    path {
      fill: white;
    }
  }
}

.rocketDown {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--main-color);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingDown 0.5s linear forwards;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 20px 0px rgb(111, 190, 74);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    path {
      fill: white;
    }
  }
}

@keyframes comingUp {
  from {
    bottom: -50px;
    opacity: 0;
  }

  to {
    visibility: visible;
    bottom: 20px;
    opacity: 1;
  }
}

@keyframes comingDown {
  from {
    bottom: 20px;
    opacity: 1;
  }

  to {
    visibility: hidden;
    bottom: -50px;
    opacity: 0;
  }
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
  z-index: 10;
  position: absolute;
  top: 36px;
  background-color: #fff;
  border-top: 3px solid var(--main-color);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px, 10px, 0 rgba(0, 0, 0, .12);
  transition: all .5s ease;

}

.drop__menu-item {
  width: 100%;
  transition: all .5s ease;
  padding: 6px 10px;
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
  z-index: 10;
  transition: .1s;
}

input[type="search"] {
  width: 150px;
  height: 28px;
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: 50px;
}

input[type="search"]::placeholder {
  color: #bbb;
}


input[type="search"]:focus {
  box-shadow: 0 0 3px 0 var(--main-color);
  border-color: var(--main-color);
  outline: none;
}

.nosubmit {
  border: none;
  padding: 0;
  border-radius: 50px;
}

input.nosubmit {
  border: 1px solid #555;
  width: 100%;
  padding: 9px 4px 9px 40px;
  background-color: #9a9a9a4d !important;
  background: transparent url("../assets/image/searching.png") no-repeat 10px center;
}
</style>
  