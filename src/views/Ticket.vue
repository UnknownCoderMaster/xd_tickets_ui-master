<template>
    <div>
      <swiper class="swiper" :options="swiperOption">
        <div class="calendar__style d-md-flex justify-center align-center d-none">
          <v-icon @click="datePicker = !datePicker" color="white" large>mdi-calendar-month</v-icon>
  
          <div v-if="datePicker" class="datePicker d-md-flex justify-center align-center d-none" style="z-index: 99999;">
            <v-date-picker landscape v-model="date1" color="var(--main-color)" locale="ru"></v-date-picker>
          </div>
        </div>
  
        <div class="swiper-button-next d-md-flex justify-center align-center d-none" slot="button-next"></div>
        <swiper-slide class="slide">
          <v-img src="../assets/image/afisha6.jpg" max-height="100vh" position="top" />
          <!-- <div id="card">
            <div class="d-block" data-aos="fade-right">
              <p class="text-center text-md-h2 text-h4 font-weight-regular">SELLING <br> CONCERT TICKETS
              </p>
              <p class="text-center text-md-h6 text-body-1 font-weight-regular">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam ratione
                quam
                at eum possimus</p> <br>
              <v-btn color="var(--main-color)" class="px-4 white--text">Read More</v-btn>
            </div>
          </div> -->
        </swiper-slide>
        <swiper-slide class="slide">
          <v-img src="../assets/image/afisha4.png" max-height="100vh" position="top" />
          <!-- <div id="card">
            <div class="d-block">
              <p class="text-center text-md-h2 text-h4 font-weight-regular">EVENT <br> TICKETS</p>
              <p class="text-center text-md-h6 text-body-1 font-weight-regular">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam ratione
                quam
                at eum possimus</p> <br>
              <v-btn color="var(--main-color)" class="px-4 white--text">Read More</v-btn>
            </div>
          </div> -->
        </swiper-slide>
        <swiper-slide class="slide">
          <v-img src="../assets/image/afisha8.jpg" max-height="100vh" position="top" />
          <!-- <div id="card">
            <div class="d-block">
              <p class="text-center text-md-h2 text-h4 font-weight-regular">TICKETBOX <br> EVENTS & TICKETS </p>
              <p class="text-center text-md-h6 text-body-1 font-weight-regular">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam ratione
                quam
                at eum possimus</p> <br>
              <v-btn color="var(--main-color)" class="px-4 white--text">Read More</v-btn>
            </div>
          </div> -->
        </swiper-slide>
  
        <div class="swiper-button-prev d-md-flex justify-center align-center d-none" slot="button-prev">
        </div>
        <div class="swiper-pagination" slot="pagination" />
      </swiper>
      <v-container fluid class="pt-15">
        <v-container class="responsive__style">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="item, index in datas" :key="index"
              class="hover__effect pb-0 my-lg-0 my-5 " :data-aos="item.aos">
              <div class="text-center inside__style">
                <div class="mb-3"><v-icon large color="var(--main-color)">mdi-{{ item.icon }}</v-icon></div>
                <p class="text-body-1 black--text font-weight-bold mb-1">{{ item.title.toUpperCase() }}</p>
                <p class="grey--text text-caption">{{ item.text }}</p>
              </div>
              <div class="circle__style"></div>
  
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <UpcomingEvent />
      <FeaturedEvent />
      <Event />
      <v-container fluid class="py-14">
        <v-container class="responsive__style px-2">
          <v-row>
            <v-col cols="12" class="text-center">
              <p class="text-h5 font-weight-bold">Sponsors</p>
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
                  <p class="mb-0 text-caption font-weight-bold pl-3 my-2">O‘zbekiston Respublikasi <br> Madaniyat va turizm
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
  import UpcomingEvent from '../components/upcomingEvent.vue'
  import FeaturedEvent from '../components/featuredEvent.vue'
  import Event from '../components/event.vue'
  import { Pagination, Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  
  export default {
    name:'Ticket',
    components: {
      Swiper,
      SwiperSlide,
      UpcomingEvent,
      FeaturedEvent,
      Event
    },
    setup() {
      return {
        modules: [Pagination, Navigation]
      }
    },
    data() {
      return {
        datePicker: false,
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  
        datas: [
          { icon: 'check-circle', aos: 'fade-right', title: 'Choose events and tickets', text: 'with only a few clicks' },
          { icon: 'cart', aos: 'zoom-in', title: 'Buy Directly from Organizers', text: 'Pay online or cash on delivery' },
          { icon: 'ticket-percent', aos: 'fade-left', title: 'Receive Tickets', text: 'via email or right at your door' },
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
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #03030342;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    position: absolute;
    left: 60px;
    bottom: -50px;
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
  }</style>