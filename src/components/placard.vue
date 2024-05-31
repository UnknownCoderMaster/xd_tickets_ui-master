<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <div class="calendar__style d-flex justify-center align-center">
        <v-icon color="white" size="48">mdi-calendar-month</v-icon>
        <div class="datePicker" style="z-index: 99999;">
          <v-date-picker :events="concertEvent" event-color="green lighten-1" no-title v-model="date"
            color="var(--main-color)" locale="ru" @change="showDateEvent(date)"></v-date-picker>
        </div>
      </div>

      <div class="swiper-button-next d-md-flex justify-center align-center d-none" slot="button-next"></div>

      <swiper-slide class="slide" v-for="(element, index) in events" :key="index">
        <div v-for="picture, index in element.images" :key="index">
          <v-img v-if="index == 0" :src="picture.image" class="d-md-block d-none slide__image-style"></v-img>
          <v-img v-if="index == 0" :src="picture.image_small" class="d-md-none d-block slide__image-style"></v-img>
        </div>
        <div id='card'>
          <div class="title__info" data-aos="fade-left">
            <p class="text-end white--text mb-0">{{ element.title }}</p>
          </div>
          <div class="large__buy-button d-md-flex d-none">
            <div>
              <router-link style="text-decoration: none;" class="acer--text" :to="`/api/event/${element.id}`">
                <v-btn color="var(--main-color)" class="px-4 white--text">{{ $t("detail") }}</v-btn>
              </router-link>
            </div>
            <div class="ml-3">
              <a style="text-decoration: none;" :href="element.ticket_link">
                <v-btn color="var(--main-color)" class="px-4 white--text">{{ $t("buy") }}</v-btn>
              </a>
            </div>
          </div>
          <div class="small__buy-button d-md-none d-flex" data-aos="fade-right">
            <div class="mr-3">
              <router-link style="text-decoration: none;" class="acer--text" :to="`/api/event/${element.id}`">
                <v-btn x-small color="var(--main-color)" class="px-4 white--text">{{ $t("detail") }}</v-btn>
              </router-link>
            </div>
            <div>
              <a style="text-decoration: none;" :href="element.ticket_link">
                <v-btn x-small color="var(--main-color)" class="px-4 white--text">{{ $t("buy") }}</v-btn>
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide v-for="image in images" :key="image.id" class="width-100">
        <img :src="image.imageUrl">  
      </swiper-slide>  

      <div class="swiper-button-prev d-md-flex justify-center align-center d-none" slot="button-prev">
      </div>

      <div class="swiper-pagination" slot="pagination" />
    </swiper>
  </div>
</template>
  
<script>
import events from '@/store/modules/events';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Placard',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  },
  data() {
    return {
      images: [{
          id: 111,
          imageUrl: 'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px-1400x787.jpg'
        },
        {
          id: 112,
          imageUrl: 'https://prezentmarzen.com/blog/wp-content/uploads/2022/02/AdobeStock_632496647-1600x897.jpeg'
        },
        {
          id: 113,
          imageUrl: 'https://www.visitphilly.com/wp-content/uploads/2022/08/Nighttime-Set-MIA-crtsy-Made-in-America-2200x1237px-1400x787.jpg'
      }],
      arrayEvents: null,
      datePicker: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      swiperOption: {
        // direction: 'vertical',
        spaceBetween: 0,
        initialSlide: 0,
        autoplay: true,
        loop: false,
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
        },
        on: {
          slideChangeTransitionStart() {
            document.getElementById('card').style.cssText = 'opacity:0;';

          },
          slideChangeTransitionEnd() {
            document.getElementById('card').style.cssText = 'opacity:1; transition: 0.3s';
          }
        }
      },
    }
  },
  computed: {
    ...mapGetters("events", ["events"]),
    ...mapGetters("calendar", ["calendar"]),
    concertEvent() {
      let newEvt = this.calendar.filter((x) => x.has_concert == true).map((val) => { return val.date });
      return newEvt;

    }
  },
  mounted() {
    this.getEventsWithoutArchive(),
      this.getCalendar()
  },
  methods: {
    ...mapActions("events", ["getEventsWithoutArchive"]),
    ...mapActions("calendar", ["getCalendar", "getCalendarByQuery"]),
    showDateEvent(date) {
      for (let i = 0; i <= this.concertEvent.length; i++) {
        if (this.concertEvent[i] == date) {
          this.getCalendarByQuery(date);
          this.$router.push(`/calendar?date=${date}`);
        }
      }
    }
  }
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

.width-100{
  width: 100%;
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
  width: 100vw;
  height: 100vh;
}

.title__info {
  width: 35%;
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
  width: 80px;
  height: 80px;
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
  left: 80px;
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
  transition: all 0.5s ease;
  opacity: 0 !important;
}

::v-deep .swiper-button-prev {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #00000096;
  font-weight: 100;
  color: white;
  transition: all 0.5s ease;
  opacity: 0 !important;
}

.swiper:hover ::v-deep .swiper-button-next {
  opacity: 1 !important;
  animation: arrowRight 0.5s forwards;

}

.swiper:hover ::v-deep .swiper-button-prev {
  opacity: 1 !important;
  animation: arrowLeft 0.5s forwards;

}

@keyframes arrowLeft {
  from {
    transform: translate(20px);
  }

  to {
    transform: translate(0px);

  }
}

@keyframes arrowRight {
  from {
    transform: translate(-20px);
  }

  to {
    transform: translate(0px);

  }
}

@media screen and (max-width: 1440px) {
  .swiper-container {
    width: 100%;
    height: 100vh;
  }

  .slide__image-style {
    height: 100vh;
  }
}

@media screen and (max-width: 1200px) {
  .swiper-container {
    width: 100%;
    height: auto;
  }

  .slide__image-style {
    height: auto;
  }
}

@media screen and (max-width: 1024px) {
  .swiper-container {
    width: 100%;
    height: auto;
  }

  .slide__image-style {
    height: auto;
  }
}

@media screen and (max-width: 992px) {
  .title__info {
    width: 55%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);
    position: absolute;
    right: 20px;
    bottom: 68px;
    z-index: 999;
    padding: 10px;

    p {
      font-size: 14px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
  }

  .swiper-container {
    width: 100%;
    height: auto;
  }

  .slide__image-style {
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .swiper-container {
    width: 100%;
    height: auto;
  }

  .slide__image-style {
    height: auto;
  }

  .calendar__style {
    bottom: 42px;
  }

  .small__buy-button {
    position: absolute;
    right: 20px;
    bottom: 42px;
    z-index: 999;
  }
}
</style>