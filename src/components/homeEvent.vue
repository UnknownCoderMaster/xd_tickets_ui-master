<template>
  <div>
    <v-container fluid class="bgImage pb-md-10 pb-0">
      <v-container class="mx-auto px-0">
        <v-row class="responsive__style">
          <v-col cols="12" class="pt-0">
            <v-row>
              <v-col cols="12" md="6" lg="3" v-for="item, index in eventData" :key="index" class="d-none d-md-block">
                <div class="statistic">
                  <p class="text-h4 mb-2 event__number" :class="{ 'green--text': index == 2 }">
                    <count-to :start-val="0" :end-val="item.number" :duration="item.duration" />K
                  </p>
                  <p class="text-body-1" style="text-transform:uppercase">{{ item.title }}</p>
                  <div class="appeirIcon" :class="{ 'd-block': index == 2 }">
                    <v-icon x-large color="white">{{ item.icon }}</v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pt-10">
            <p class="white--text text-center text-h5">WE HAVE WHAT YOU NEED!</p>
            <p style="width: 60px; background-color: #f36e0c; margin: 0 auto; padding: 1px;"></p>
          </v-col>
          <v-col cols="12" md="3" class="text-md-start text-center px-md-0 px-3">
            <div class="block" data-aos="zoom-in" data-aos-duration="300">
              <i class="hovicon effect-1 sub-a"> <v-icon color="white" x-large>mdi-flag</v-icon></i>
              <p class="font-weight-bold text-body-1 mb-2">CREATING EVENTS EASILY</p>
              <p class="text-body-2">Hamster reindeer hence shined less gosh furrowed and under magnificently</p>
            </div>
            <div class="block" data-aos="zoom-in" data-aos-duration="600">
              <i class="hovicon effect-1 sub-a"> <v-icon color="white" x-large>mdi-ticket-outline</v-icon></i>
              <p class="font-weight-bold text-body-1 mb-2">BUY ONLINE & CHECK IN</p>
              <p class="text-body-2">Naively adequately irrespective one sheepishly politely terrier ouch kangaroo</p>
            </div>

          </v-col>
          <v-col cols="12" md="6" class="pa-sm-4 pa-3">
            <div class="playVideo">
              <div class="playIcon"><a style="text-decoration: none;"
                  href="https://www.youtube.com/watch?v=b88LQfQh7yQ&ab_channel=ShahromShox"><v-icon color="white"
                    size="72">mdi-play-circle-outline</v-icon></a></div>
            </div>
          </v-col>
          <v-col cols="12" md="3" class="text-md-end text-center px-md-0 px-3">
            <div class="block" data-aos="zoom-in" data-aos-duration="300">
              <i class="hovicon effect-1 sub-a"> <v-icon color="white" x-large>mdi-cash-sync</v-icon></i>
              <p class="font-weight-bold text-body-1 mb-2">PAYMENT METHOD</p>
              <p class="text-body-2">Guinea piquantly contrary far far darn chuckled this this fish and towards</p>
            </div>
            <div class="block" data-aos="zoom-in" data-aos-duration="600">
              <i class="hovicon effect-1 sub-a"> <v-icon color="white" x-large>mdi-headphones</v-icon></i>
              <p class="font-weight-bold text-body-1 mb-2">GREAT SUPPORT</p>
              <p class="text-body-2">Much but had leapt much enticing wept thus dear besides lynx split fidgeted</p>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
  
<script>
import CountTo from 'vue-count-to';
export default {
  name: 'HomeEvent',
  components: {
    CountTo
  },
  data() {
    return {
      eventData: [
        {
          number: 101,
          title: 'Tickets Sold',
          icon: "mdi-ticket",
          duration: 1500
        },
        {
          number: 75,
          title: 'Great Customers',
          icon: "mdi-account-group",
          duration: 2000
        },
        {
          number: 350,
          title: 'Happy clients',
          icon: "mdi-emoticon",
          duration: 1800
        },
        {
          number: 105,
          title: 'Supporter & Partner',
          icon: "mdi-lifebuoy",
          duration: 1000

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
}

.bgImage {
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/event.jpg');
  background-position: center;
}

.statistic {
  background-color: rgba(0, 0, 0, 0.264);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 20px;
}

.event__number {
  color: white;
}

.appeirIcon {
  display: none;
  transition: all 2s ease;
}

.statistic:hover {
  background-color: rgba(0, 0, 0, 0.378);
}

.statistic:hover .appeirIcon {
  opacity: 1;
  display: block;
}

.statistic:hover .event__number {
  color: var(--main-color);
}

.block {
  margin: 10px auto;
  color: white;
}

.hovicon {
  display: inline-block;
  font-size: 45px;
  line-height: 90px;
  cursor: pointer;
  margin: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  text-decoration: none;
  z-index: 1;
  color: var(--main-color);
}

.hovicon.small {
  font-size: 20px;
  line-height: 45px;
  width: 45px;
  height: 45px;
  margin: 7px;
}

.hovicon.mini {
  font-size: 15px;
  line-height: 32px;
  width: 30px;
  height: 30px;
  margin: 7px;
}

.hovicon.auto-width {
  width: auto;
  height: auto;
  padding: 15px;
}

.hovicon:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: '';
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.hovicon:before {
  speak: none;
  font-size: 48px;
  line-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

.hovicon.effect-1 {
  background: rgba(255, 255, 255, 0.1);
  -webkit-transition: background 0.2s, color 0.2s;
  -moz-transition: background 0.2s, color 0.2s;
  transition: background 0.2s, color 0.2s;
}

.hovicon.effect-1:after {
  top: -7px;
  left: -7px;
  padding: 7px;
  box-shadow: 0 0 0 4px var(--main-color);
  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
  -webkit-transform: scale(.8);
  -moz-transition: -moz-transform 0.2s, opacity 0.2s;
  -moz-transform: scale(.8);
  -ms-transform: scale(.8);
  transition: transform 0.2s, opacity 0.2s;
  transform: scale(.8);
  opacity: 0;
}

.hovicon.effect-1.sub-a:hover {
  background: var(--main-color);
}

.hovicon.effect-1.sub-a:hover:after {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

.hovicon.effect-1.sub-b:hover {
  background: var(--main-color);
}

.hovicon.effect-1.sub-b:after {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

.hovicon.effect-1.sub-b:hover:after {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

.playVideo {
  width: 100%;
  height: 400px;
  border-radius: 5px;
  background-image: url('../assets/image/banner3.jpeg');
  background-position: center;
}

.playIcon {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>