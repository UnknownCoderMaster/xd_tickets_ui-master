<template>
  <div>
    <v-container fluid style="background-color: #3c5d7a;">
      <v-container class="mx-auto pt-md-15 pt-5 pb-15 px-4">
        <v-row class="responsive__style align-start pb-5 white--text">
          <v-col cols="12" md="6" lg="4" class="px-md-4">
            <!-- <p class="mb-3 font-weight-bold">ABOUT US.</p> -->
            <div>
              <router-link to="/">
               <div class="d-flex align-center">
                 <v-img class="shrink" width="100" height="100" src="../assets/image/logo3.png" alt="Logotip" />
                 <p class="white--text mb-0 ml-2 text-center" style="font-family: 'Courier New', Courier, monospace; line-height: 1.2;">Xalqlar do'stligi <br> saroyi</p>
               
                </div>
              </router-link>
            </div>
            <p class="mb-4 text-start">{{ $t("footer.title") }}</p>
            <p class="mb-1">{{ $t("footer.phone") }}: +998 71 245 92 51</p>
            <p>{{ $t("footer.email") }}: istiqlolsanatsaroyi@gmail.com</p>
            <div class="d-flex justify-start">
              <div class="mr-2"><a href="#"><v-img width="32" src="../assets/image/telegram.png"></v-img></a></div>
              <div class="mx-2"><a href="#"><v-img width="32" src="../assets/image/instagram.png"></v-img></a></div>
              <div class="mx-2"><a href="#"><v-img width="32" src="../assets/image/twitter.png"></v-img></a></div>
              <div class="mx-2"><a href="#"><v-img width="32" src="../assets/image/facebook.png"></v-img></a></div>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4" class="px-md-4">
            <p class="mb-3 font-weight-bold">{{ $t("footer.post") }}</p>
            <div class="mb-2" v-for="footer, index in footerData" :key="index">
              <div class="d-flex">
                <div>
                  <v-img class="footer__imageHover" max-width="60" :src="require(`../assets/image/${footer.image}.jpg`)">
                    <div class="effectImage"></div>
                  </v-img>
                </div>
                <div class="px-2">
                  <p class="text-body-2 mb-1">{{ footer.title }}</p>
                  <p class="text-caption">December 23, 2016</p>
                </div>
              </div>
              <v-divider dark></v-divider>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4" class="px-md-4">
            <p class="mb-3 font-weight-bold">BE PART OF IT.</p>
            <div>
              <div class="py-2"><v-icon color="white" normal>mdi-chevron-right</v-icon>{{ $t("footer.home") }}</div>
              <v-divider dark></v-divider>
            </div>
            <div>
              <div class="py-2"><v-icon color="white" normal>mdi-chevron-right</v-icon>{{ $t("footer.placard") }}</div>
              <v-divider dark></v-divider>
            </div>
            <div>
              <div class="py-2"><v-icon color="white" normal>mdi-chevron-right</v-icon>{{ $t("footer.ticket") }}</div>
              <v-divider dark></v-divider>
            </div>
            <div>
              <div class="py-2"><v-icon color="white" normal>mdi-chevron-right</v-icon>{{ $t("footer.news") }}</div>
              <v-divider dark></v-divider>
            </div>
            <div>
              <div class="py-2"><v-icon color="white" normal>mdi-chevron-right</v-icon>{{ $t("footer.contact") }}</div>
              <v-divider dark></v-divider>
            </div>
            
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-app-bar class="mx-auto d-flex justify-center" absolute bottom style="z-index: 99;" color="#00000099">
            <div>
              <p class="white--text py-2 mb-0 text-body-2">Copyright 2023 © All rights reserved by ticketbox. Created
                by
                <a href="mailto:ozodbekkamolov@gmail.com" class="white--text">Ok-Software.</a>
              </p>
            </div>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerData: [
        {
          image: 'footer1',
          title: 'Gravida suscipit platea laoreet praesent feugiat malesuada'
        },
        {
          image: 'footer2',
          title: 'Nisi cras vel aptent dictum sem senectus venenatis'
        },
        {
          image: 'footer3',
          title: 'Habitasse augue pulvinar suscipit mattis laoreet sem'
        },
        {
          image: 'footer4',
          title: 'Gravida suscipit platea laoreet praesent feugiat malesuada'
        },
      ]
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

::v-deep .v-input__slot {
  margin-bottom: 0;
}

.footer__imageHover {
  position: relative;
  transition: all 0.5s ease;
}

.effectImage {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #0000005a;

}

.footer__imageHover:hover .effectImage {
  display: block;
}
</style>