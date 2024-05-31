<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div>
            <v-img class="d-md-block d-none detail__bgImage" position="top" :src="eventDetail.images[0].image"></v-img>
            <v-img class="d-md-none d-block detail__bgImage" position="top"
              :src="eventDetail.images[0].image_small"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10 px-3">
      <v-row class="responsive__style">
        <v-col cols="12">
          <p class="text-md-h4 text-h5 mb-0">{{ eventDetail.title }}</p>
        </v-col>

        <v-col cols="12" class="my-6">
          <v-card class="py-4 px-3">
            <div class="d-md-flex align-center justify-space-between d-block">

              <div class="d-md-flex align-center d-block">
                <div class="d-flex align-center mr-2" v-for="times, index in eventDetail.sessions" :key="index">
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

                <div class="d-flex align-center ml-md-2 my-md-0 my-2 mr-4" v-for="times, index in eventDetail.sessions"
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
                    {{ eventDetail.location }}
                  </p>
                </div>

                <div class="ml-md-4">
                  <v-chip small outlined color="var(--admin-color)" class="px-2 mr-2">
                    <span
                      style="width: 3px; height: 3px; border-radius: 50%; background-color: var(--admin-color); margin-right: 3px;"></span>
                    ${{ eventDetail.price }} +
                  </v-chip>
                </div>
              </div>

              <div class="d-flex  my-md-0 my-2 align-center">
                <a style="text-decoration: none;" :href="eventDetail.ticket_link">
                  <v-btn color="var(--main-color)" class="white--text px-5 ">{{ $t("buy") }}</v-btn>
                </a>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" class="mb-6">
          <v-card class="py-4 px-3">
            <p class="text-h6 mb-2">Artist</p>
            <p class="text-body-1"><b>Name:</b> {{ eventDetail.artists[0].name }}</p>
            <p class="text-body-1"><b>Genre:</b> {{ eventDetail.artists[0].genre }}</p>
            <p class="text-body-1"><b>Bio:</b> {{ eventDetail.artists[0].bio }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" class="mb-6">
          <v-card class="py-4 px-3">
            <p class="text-h6 mb-2">Description</p>
            <p class="text-body-1">
              <span v-html="eventDetail.description"></span>
            </p>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <p class="text-h6 mb-2">Fotos</p>
            </v-col>
            <v-col cols="12" lg="6" class="py-5" v-for="pic, index in eventDetail.images" :key="index">

              <v-img class="d-md-block d-none image__detail" :src="pic.image"></v-img>
              <v-img class="d-md-none d-block image__detail" :src="pic.image_small"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
          
<script>
import eventDetail from '@/store/modules/eventDetail';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'Detail',
  data() {
    return {
    }
  },
  created() {
    console.log(this.$route.params.event);
    this.getSingleEvent(this.$route.params.event);
  },
  computed: {
    ...mapGetters("eventDetail", ["eventDetail"])
  },
  methods: {
    ...mapActions("eventDetail", ["getSingleEvent"])
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
  .detail__bgImage {
    width: 100%;
    height: auto;
  }

  .image__detail {
    height: auto;
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
        