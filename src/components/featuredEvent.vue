<template>
  <div>
    <v-container fluid class="secondary_bg">
      <v-container class="py-10 mx-auto">
        <v-row class="responsive__style">

          <v-col cols="12" class="d-flex px-5 justify-space-between align-center">
            <div class="d-flex">
              <v-icon large color="grey">mdi-bookmark</v-icon>
              <p class="mb-0 text-h5 "> {{ $t("upcoming") }} </p>
            </div>

            <div class="float-right">
              <button class="feature-button-prev">
                <v-icon color="var(--main-color)">mdi-arrow-left-bold-box</v-icon>
              </button>
              <button class="feature-button-next">
                <v-icon color="var(--main-color)">mdi-arrow-right-bold-box</v-icon>
              </button>
            </div>
          </v-col>
          <v-col cols="12" class="pa-4">
            <Swiper class="swiper swiper-wrapper" :options="swiperOption">
              <SwiperSlide class="swiper-slide" v-for="(item, index) in events" :key="index">
                <router-link style="text-decoration: none;" class="windowHover my-md-6 my-4 mx-auto acer--text" :to="`/event/${item.id}`">
                <div>
                  <div class="positionRelative">
                    <div v-for="picture, index in item.images" :key="index">
                      <v-img v-if="index == 0" :src="picture.image_small" class="hoverImage rounded"></v-img>
                    </div>
                    <div class="positionAbsolute rounded">
                      <div class="white--text pa-2">
                        <p class="mb-0 text-body-2 text-center">{{ item.sessions[0].start_time.slice(8, 10) }}</p>
                        <p class="mb-0 text-body-2">
                          <b>
                            {{ months[(item.sessions[0].start_time.slice(5, 7) - 1)] }}
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="px-3">
                    <p class="text-h6 mt-2 mb-1">{{ item.artists[0].name }}</p>
                    <v-chip small outlined color="var(--main-color)" class="px-2">
                      <span
                        style="width: 3px; height: 3px; border-radius: 50%; background-color: var(--main-color); margin-right: 3px;"></span>
                      from ${{ item.price }}+
                    </v-chip>
                    <div class="text-body-2 py-4">
                      <div> <v-icon class="mr-1" small color="var(--main-color)">mdi-map-marker</v-icon>
                        <span>{{ item.location }} </span>
                      </div>
                    </div>
                  </div>
                </div>
                </router-link>
              </SwiperSlide>

            </Swiper>
          </v-col>
          <v-col cols="12" class="py-5">
            <div class="d-sm-flex justify-center d-block text-center">
              <div class="mr-sm-3">
                <p class="text-h6 grey--text">NOT YOUR INTERESTED ?</p>
              </div>
              <div class="ml-sm-3"><v-btn class="rounded px-6 py-4 white--text" color="var(--main-color)">Discovery
                  events</v-btn></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
      
<script>
import events from '@/store/modules/events';
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "EventSlide",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  },
  data: () => ({
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 10,
      initialSlide: 2,
      autoplay: true,
      loop: false,
      speed: 1000,
      navigation: {
        nextEl: ".feature-button-next",
        prevEl: ".feature-button-prev",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "bullets",
      //   clickable: true
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

    },
    featureData: [
      { name: 'Nodirbek Xaitov', image: "afisha4.png", price: 25 },
      { name: 'Benom guruhi', image: "afisha6.jpg", price: 30 },
      { name: 'Bunyodbek Saidov', image: "afisha5.jpg", price: 20 },
      { name: 'Millon jamoasi', image: "afisha.jpg", price: 40 },
      { name: 'Jaloliddin Ahmadaliyev', image: "afisha8.jpg", price: 33 },
      { name: 'Yulduz Usmonova', image: "afisha9.png", price: 45 },
    ]
  }),
  computed: {
    ...mapGetters("events", ["events"]),
  },
  mounted() {
    this.getEventsWithoutArchive();
  },
  methods: {
    ...mapActions("events", ["getEventsWithoutArchive"]),

    eventList() {
      this.$router.push('/event')
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

body {
  position: relative;
  height: 100%;
}

.swiper-container {
  position: relative;
  width: 100%;
  height: auto;
}

.swiper-slide {
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

#card {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.windowHover {
  width: 100%;
  max-width: 550px;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .2);
  cursor: pointer;
}

.hoverImage {
  width: 100%;
  max-width: 550px;
  height: 250px;
  transition: all 0.3s ease;
}

.windowHover:hover .hoverImage {
  transform: scale(1.1);
}

.positionRelative {
  position: relative;
  overflow: hidden;
}

.positionAbsolute {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);

}
</style>
      