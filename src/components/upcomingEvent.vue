<template>
  <div>
    <v-container fluid style="background-color: #f3f3f3;">
      <v-container class="py-10 mx-auto">
        <v-row class="responsive__style">
          <v-col cols="12" class="d-lg-flex d-block px-5 justify-space-between align-center">
            <div class="d-flex">
              <v-icon large color="grey">mdi-calendar-month-outline</v-icon>
              <p class="mb-0 text-h5 ">Upcoming Events</p>
            </div>
            <div class="d-sm-flex float-right d-none">
              <router-link to="/" class="black--text text-body-2 mr-3">This Week</router-link>
              <router-link to="/" class="black--text text-body-2">This Month</router-link>
            </div>
          </v-col>
          <v-col cols="12" class="pa-4">
            <div class="float-right d-none">
              <button class="button-prev">
                <v-icon color="var(--main-color)">mdi-arrow-left-thin</v-icon>
              </button>
              <button class="button-next">
                <v-icon color="var(--main-color)">mdi-arrow-right-thin</v-icon>
              </button>
            </div>
            <Swiper class="swiper swiper-wrapper" :options="swiperOption">
              <SwiperSlide class="swiper-slide" v-for="(item, index) in upcomingData" :key="index">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                    :src="require(`../assets/image/${item.image}`)"
                      class="hoverImage rounded"></v-img>
                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-lg-subtitle-1 text-caption white--text">
                        <v-icon class="mr-1" small color="white">mdi-map-marker</v-icon> <span>Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Id, earum.</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="text-h6 mt-2 mb-1">Linkin park Live at the small of asia arena</p>
                    <p class="orange--text mb-1">$30 - $100</p>
                    <div class="d-flex justify-space-between">
                      <div class="d-flex align-center">
                        <v-icon>mdi-folder-outline</v-icon>
                        <a href="@" class="text-body-1">Entertaiment. Event.</a>
                      </div>
                      <div class="d-flex align-center">
                        <v-icon small>mdi-eye-outline</v-icon>
                        <p class="mb-0 text-body-2 ">164{{ index }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
    
<script>
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
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
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 10,
      initialSlide: 2,
      autoplay:true,
      loop: false,
      speed: 1000,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination:{
        el: ".swiper-pagination",
        type: "bullets",
        clickable:true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },

    },
    upcomingData:[
      {image:'upcome1.jpg'},
      {image:'upcome2.png'},
      {image:'upcome3.jpg'},
      {image:'upcome4.jpg'},
    ]
  }),
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
  height: 480px;
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

::v-deep .swiper-pagination-bullet {
  opacity: 0;
  width: 50px;
  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.698);
  background: transparent;
}
::v-deep .swiper-pagination-bullet-active {
  opacity: 1;
  width: 200px;
  padding: 2px;
  border-radius: 5px;
  background: #4f8ad3; 
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
}

.hoverImage {
  width: 100%;
  max-width: 550px;
  transition: all 0.5s ease;
}

.windowHover:hover .hoverImage {
  transform: scale(1.1);
}

.positionRelative {
  position: relative;
  overflow: hidden;
}

.positionAbsolute {
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top,
      rgba(12, 12, 12, 1),
      rgba(12, 12, 12, 0.8),
      rgba(19, 19, 19, 0.1));
}
</style>
    