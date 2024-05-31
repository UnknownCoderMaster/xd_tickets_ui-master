<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="event__bgImage">
            <div class="banner_title">
              <p class="text-md-h4 text-h5 font-weight-regular white--text mb-1 text-center">
                {{ $t("ticket.title") }}
              </p>
              <p class="white--text text-body-1 text-center">
                {{ $t("ticket.text") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10 px-3">
      <v-row class="responsive__style">
        <v-col cols="12">
          <v-row class="align-center">
            <v-col cols="6" md="8">
              <p class="text-md-h4 text-h5 mb-0"> {{ $t("ticket.head") }}</p>
            </v-col>
            <v-col cols="6" md="4" class="pr-2">
              <v-text-field color="var(--main-color)" outlined rounded hide-details dense clearable label="Search..."
                append-icon="mdi-magnify"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-4">
          <v-row>
            <v-col cols="12">
            </v-col>
            <v-col cols="12" sm="6" lg="4" data-aos="zoom-in" v-for="item, index in events" :key="index"
              class="pa-md-4 pa-2">
              <!-- :to="`/tag/${tag.text}`" -->
              <router-link style="text-decoration: none;" class="acer--text" :to="`/event/${item.id}`">
                <div class="windowHover mx-auto my-md-6 my-4">
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
                    <div v-for="artist, index in item.artists" :key="index">
                      <p class="text-h6 mt-2 mb-1">{{ artist.name }}</p>
                    </div>
                    <v-chip small outlined color="var(--main-color)" class="px-2">
                      <span
                        style="width: 3px; height: 3px; border-radius: 50%; background-color: var(--main-color); margin-right: 3px;"></span>
                      from ${{ item.price }}+
                    </v-chip>
                    <div class="text-body-2 pt-4">
                      <div> <v-icon class="mr-1" small color="var(--main-color)">mdi-map-marker</v-icon>
                        <span>{{ item.location }} </span>
                      </div>
                    </div>
                    <div class="py-4 px-1">
                      <a style="text-decoration: none;" :href="item.ticket_link">
                        <v-btn @click.stop block class="white--text" color="var(--main-color)">{{ $t("buy") }}</v-btn>
                      </a>
                    </div>
                  </div>
                </div>
              </router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-pagination color="var(--main-color)" v-model="page" class="my-4" :length="2"
            :total-visible="7"></v-pagination>
        </v-col>

      </v-row>
    </v-container>
  </div>
  <!-- <v-text-field color="var(--main-color)" outlined rounded hide-details dense clearable label="Search..."
    append-icon="mdi-magnify"></v-text-field> -->
</template>
        
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Event',
  data() {
    return {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      page: 1,
      featureData: [
        { name: 'Nodirbek Xaitov', image: "afisha4.png", price: 25 },
        { name: 'Benom guruhi', image: "afisha6.jpg", price: 30 },
        { name: 'Bunyodbek Saidov', image: "afisha5.jpg", price: 20 },
        { name: 'Millon jamoasi', image: "afisha.jpg", price: 40 },
        { name: 'Jaloliddin Ahmadaliyev', image: "afisha8.jpg", price: 33 },
        { name: 'Yulduz Usmonova', image: "afisha9.png", price: 45 },
      ]
    }
  },
  computed: {
    ...mapGetters("events", ["events"])
  },
  mounted() {
    this.getEventsWithoutArchive();
  },
  methods: {
    ...mapActions("events", ["getEventsWithoutArchive"]),
  }
};
</script>
    
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.event__bgImage {
  width: 100%;
  height: 450px;
  background-image: linear-gradient(to bottom, #00000099, #00000099), url('../assets/image/concert5.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  position: relative;
  animation: event 5s forwards;

}

@keyframes event {
  from {
    transform: scale(1.015);
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

.windowHover {
  width: 100%;
  max-width: 550px;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .3);
  cursor: pointer;
}

.hoverImage {
  width: 100%;
  max-width: 550px;
  height: 250px;
  transition: all 0.5s ease;
}

@media screen and (max-width: 599px) {
  .windowHover {
    width: 430px;
  }

  .hoverImage {
    max-width: 430px;
  }
}

@media screen and (max-width: 475px) {
  .windowHover {
    width: 350px;
  }

  .hoverImage {
    max-width: 350px;
  }
}

@media screen and (max-width: 400px) {
  .windowHover {
    width: 340px;
  }

  .hoverImage {
    max-width: 340px;
  }
}

@media screen and (max-width: 374px) {
  .windowHover {
    width: 300px;
  }

  .hoverImage {
    max-width: 300px;
  }
}

@media screen and (max-width: 336px) {
  .windowHover {
    width: 280px;
  }

  .hoverImage {
    max-width: 280px;
  }
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

@media screen and (max-width: 425px) {
  .card__style {
    width: 100%;
    max-width: 350px;
  }

  .hoverImage {
    max-width: 400px;

  }
}
</style>
      