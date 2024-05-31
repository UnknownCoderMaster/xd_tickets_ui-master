<template>
  <div>
    <Placard />
    <v-container fluid class="pt-15 background">
      <v-container class="mx-auto">
        <v-row class="responsive__style">
          <v-col cols="12" sm="6" md="4" v-for="item, index in datas" :key="index"
            class="hover__effect pb-0 my-lg-0 my-5" :data-aos="item.aos">
            <div class="text-center inside__style">
              <div class="mb-3"><v-icon large color="var(--main-color)">mdi-{{ item.icon }}</v-icon></div>
              <p class="text-md-body-1 text-body-2 font-weight-bold mb-1 acer--text">
                {{ $t(item.title) }}
              </p>
              <p class="grey--text text-caption">{{ $t(item.text) }}</p>
            </div>
            <div class="circle__style"></div>

          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <FeaturedEvent />
    <HomeEvent />
    <v-container fluid class="py-14">
      <v-container class="mx-auto px-2">
        <v-row class="responsive__style">
          <v-col cols="12" class="text-center">
            <p class="text-h5 font-weight-bold">{{ $t("sponsor") }}</p>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" data-aos="zoom-in" data-aos-duration="300">
            <div class="sponsor__effect">
              <v-img class="imgHover" max-width="120" src="../assets/image/lexuz.png"></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" data-aos="zoom-in" data-aos-duration="600">
            <div class="sponsor__effect">
              <v-img class="imgHover" max-width="120" src="../assets/image/iticket.png"></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" data-aos="zoom-in" data-aos-duration="900">
            <div class="sponsor__effect py-4">
              <div class="d-flex px-3">
                <v-img class="imgHover" width="54" src="../assets/image/gerb.png"></v-img>
                <p class="mb-0 text-caption font-weight-bold pl-3 my-2 black--text">O‘zbekiston Respublikasi <br>
                  Madaniyat va turizm
                  vazirligi </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" data-aos="zoom-in" data-aos-duration="1200">
            <div class="sponsor__effect py-2">
              <v-img class="imgHover" max-width="103" src="../assets/image/madaniy.png"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Placard from '@/components/placard.vue';
import FeaturedEvent from '../components/featuredEvent.vue'
import HomeEvent from '../components/homeEvent.vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: 'HomeView',
  components: {
    Placard,
    Swiper,
    SwiperSlide,
    FeaturedEvent,
    HomeEvent
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  },
  data() {
    return {
      arrayEvents: null,
      datePicker: false,
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

      datas: [
        { icon: 'check-circle', aos: 'zoom-in', title: "header.choose", text: "header.chooseText" },
        { icon: 'cart', aos: 'zoom-in', title: "header.buy", text: "header.buyText" },
        { icon: 'ticket-percent', aos: 'zoom-in', title: "header.ticket", text: "header.ticketText" },
      ],
      swiperOption: {
        // direction: 'vertical',

        spaceBetween: 0,
        initialSlide: 0,
        autoplay: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        speed: 1200,
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
        // on: {
        //   slideChangeTransitionStart() {
        //     document.getElementById("card").style.opacity = "0"

        //   },
        //   slideChangeTransitionEnd() {
        //     document.getElementById("card").style.opacity = "1";
        //   }
        // }
      },
    }
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}


.imageFirst3D {
  animation: mymove 5s infinite;
}

@keyframes mymove {
  from {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);
  }

}

.swiper-container {
  width: 100%;
  height: 100vh;
  margin-top: 48px;
}

.swiper-slide {
  text-align: center;
  position: relative;
  font-size: 18px;
  background: #fff;
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
  z-index: 99;
}

#card {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #03030357;
}

.slide__image-style {
  width: 100%;
  height: auto;
}

.title__info {
  width: 60%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 50px;
  bottom: 100px;
  z-index: 999;
  padding: 20px;

  p {
    font-size: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
}

.large__buy-button {
  position: absolute;
  right: 50px;
  bottom: 60px;
  z-index: 999;
}

.small__buy-button {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 999;
}

.calendar__style {
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000075;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 0;
  bottom: 50px;
  z-index: 99999;

}

.datePicker {
  display: none;
  position: absolute;
  left: 60px;
  bottom: 0px;
}

.calendar__style:hover .datePicker {
  display: block;
}

::v-deep .v-picker__title {
  padding: 0px 0 0 10px;
}

::v-deep .swiper-button-next {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #00000096;
  font-weight: 100;
  color: white;
}

::v-deep .swiper-button-prev {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #00000096;
  font-weight: 100;
  color: white;
}

.hover__effect {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.inside__style {
  margin-bottom: 35px;
  transition: all 0.3s ease;
}

.circle__style {
  position: absolute;
  bottom: -6px;
  left: 49%;
  width: 6px;
  height: 6px;
  padding: 6px;
  border-radius: 100%;
  margin: 0 auto;
  border: 1px solid white;
  background-color: rgb(222, 220, 220);
  transition: all 0.3s ease;

}

.hover__effect:hover .inside__style {
  transform: translateY(-10px);
}

.hover__effect:hover .circle__style {
  background-color: #656464;
  transform: translateY(0px);
}

.sponsor__effect {
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
  transition: all 0.5s ease;
}

.imgHover {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 0.5s ease;
}

.sponsor__effect:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .56);
}

.sponsor__effect:hover .imgHover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}
@media screen and (max-width: 992px) {
  .title__info {
    width: 75%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);
    position: absolute;
    right: 20px;
    bottom: 44px;
    z-index: 999;
    padding: 10px;
  
    p {
      font-size: 14px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
  }

}

@media screen and (max-width: 768px) {
  .swiper-container {
    width: 100%;
    height: 380px;
  }

  .slide__image-style {
    height: 380px;
  }
}
</style>