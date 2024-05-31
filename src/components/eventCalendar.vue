<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div>
            <v-img class="d-md-block d-none detail__bgImage" position="top" :src="calendar[0].images[0].image"></v-img>
            <v-img class="d-md-none d-block detail__bgImage" position="top" :src="calendar[0].images[0].image_small"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10 px-3">
      <v-row class="responsive__style">
        <v-col cols="12">
          <p class="text-md-h4 text-h5 mb-0">{{ calendar[0].title }}</p>
        </v-col>

        <v-col cols="12" class="my-6">
          <v-card class="py-4 px-3">
            <div class="d-md-flex align-center justify-space-between d-block">

              <div class="d-md-flex align-center d-block">
                <div class="d-flex align-center mr-2" v-for="times, index in calendar[0].sessions" :key="index">
                  <v-chip small outlined color="var(--main-color)" class="px-2 mr-2">
                    <span
                      style="width: 3px; height: 3px; border-radius: 50%; background-color: var(--main-color); margin-right: 3px;"></span>
                    start
                  </v-chip>
                  <v-icon>mdi-calendar-month-outline</v-icon>
                  <p class="mx-1 mb-0 text-caption">
                    {{ times.start_time?.slice(0, 10) }}
                  </p>
                  <v-icon>mdi-clock-outline</v-icon>
                  <p class="ml-1 mb-0 text-caption">
                    {{ times.start_time?.slice(11, 16) }}
                  </p>
                </div>

                <div class="d-md-flex d-none">
                  <p class="mb-0"> — </p>
                </div>

                <div class="d-flex align-center ml-md-2 my-md-0 my-2 mr-4" v-for="times, index in calendar[0].sessions"
                  :key="index">
                  <v-chip small outlined color="red" class="px-2 mr-2">
                    <span
                      style="width: 3px; height: 3px; border-radius: 50%; background-color:red; margin-right: 3px;"></span>
                    finish
                  </v-chip>
                  <v-icon>mdi-calendar-month-outline</v-icon>
                  <p class="mx-1 mb-0 text-caption">
                    {{ times.finish_time?.slice(0, 10) }}
                  </p>
                  <v-icon>mdi-clock-outline</v-icon>
                  <p class="ml-1 mb-0 text-caption">
                    {{ times.finish_time?.slice(11, 16) }}
                  </p>
                </div>

                <div class="d-flex my-md-0 my-2 align-center">
                  <v-icon>mdi-map-marker</v-icon>
                  <p class="ml-1 mb-0 text-caption">
                    {{ calendar[0].location }}
                  </p>
                </div>

                <div class="ml-md-4">
                  <v-chip small outlined color="var(--admin-color)" class="px-2 mr-2">
                    <span
                      style="width: 3px; height: 3px; border-radius: 50%; background-color: var(--admin-color); margin-right: 3px;"></span>
                    ${{ calendar[0].price }} +
                  </v-chip>
                </div>
              </div>

              <div class="d-flex  my-md-0 my-2 align-center">
                <a style="text-decoration: none;" :href="calendar[0].ticket_link">
                  <v-btn color="var(--main-color)" class="white--text px-5 ">{{ $t("buy") }}</v-btn>
                </a>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" class="mb-6">
          <v-card class="py-4 px-3">
            <p class="text-h6 mb-2">Artist</p>
            <p class="text-body-1"><b>Name:</b> {{ calendar[0].artists[0].name }}</p>
            <p class="text-body-1"><b>Genre:</b> {{ calendar[0].artists[0].genre }}</p>
            <p class="text-body-1"><b>Bio:</b> {{ calendar[0].artists[0].bio }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" class="mb-6">
          <v-card class="py-4 px-3">
            <p class="text-h6 mb-2">Description</p>
            <p class="text-body-1">
              <span v-html="calendar[0].description"></span>
            </p>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <p class="text-h6 mb-2">Fotos</p>
            </v-col>
            <v-col cols="12" lg="6" class="py-5">
              <v-img class="image__detail" :src="calendar[0].images[0].image"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
            
<script>
import calendar from '@/store/modules/calendar';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'EventCalendar',
  data() {
    return {
    }
  },
  created() {
    console.log(this.$route.query.date);
    this.getCalendarByQuery(this.$route.query.date);
    //   this.getCalendar(this.$route.query.date);
  },
  computed: {
    ...mapGetters("calendar", ["calendar"])
  },
  methods: {
    ...mapActions("calendar", ["getCalendarByQuery"])
  }
};
</script>
        
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.detail__bgImage {
  width: 100%;
  height: 95vh;
  background-color: linear-gradient(to bottom, #00000099, #00000099);
  background-size: cover;
  padding: 20px;
  position: relative;
}

.image__detail {
  width: 100%;
  max-width: 550px;
  height: 250px;
  border-radius: 5px;
}

@media screen and (max-width: 599px) {
.detail__bgImage{
  width: 100%;
  height: auto;
}
  .image__detail {
    max-width: 430px;
  }
}

@media screen and (max-width: 475px) {
  .image__detail {
    max-width: 350px;
  }
}

@media screen and (max-width: 400px) {
  .image__detail {
    max-width: 340px;
  }
}

@media screen and (max-width: 374px) {
  .image__detail {
    max-width: 300px;
  }
}

@media screen and (max-width: 336px) {
  .image__detail {
    max-width: 280px;
  }
}


@keyframes detail {
  from {
    transform: scale(1.05);
  }

  to {
    transform: scale(1);
  }
}

.banner_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
          