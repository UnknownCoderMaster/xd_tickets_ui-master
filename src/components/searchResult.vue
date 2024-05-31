<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="news__bgImage">
            <div class="banner_title">
              <p class="text-md-h4 text-h5 font-weight-regular white--text mb-1 text-center">
                {{ $t("search.title") }}
              </p>
              <p class="white--text text-body-1 text-center">
                {{ $t("search.text") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10 px-3">
      <v-row class="responsive__style align-start">
        <v-col cols="12">
          <p class="text-md-h5 text-h6 mb-4"> {{ $t("search.head") }}</p>
        </v-col>
        <v-col cols="12" class="py-15" v-if="eventDetail.count == 0">
          <div>
            <p><b>{{ queryResult }}</b> {{ $t("search.error") }}</p>
          </div>
        </v-col>
        <v-col cols="12" v-else>
          <v-row>
            <v-col cols="12" class="my-2" v-for="item, index in eventDetail.results" :key="index">
              <router-link style="text-decoration: none;" class="acer--text" :to="`/event/${item.id}`">
                <v-card>
                  <div class="py-3 px-5 d-sm-flex d-block justify-space-between">
                    <div class="d-sm-flex d-block">
                      <div>
                        <p class="text-h6 mt-2 mb-1">{{ item.artists[0].name }}</p>
                        <p class="text-body-1 mt-2 mb-1">{{ item.artists[0].genre }}</p>
                      </div>
                      <div class="ml-sm-4">
                        <p class="text-body-2 mt-4 mb-0 ">
                          <v-icon small color="var(--main-color)">mdi-calendar-month</v-icon>
                          {{ item.sessions[0].start_time.slice(0, 10) }} 
                          <v-icon small color="var(--main-color)">mdi-clock</v-icon>
                          {{ item.sessions[0].start_time.slice(11, 16) }}
                        </p>
                      </div>
                    </div>
    
                    <div class="text-body-2 py-4">
                      <div> <v-icon class="mr-1" small color="var(--main-color)">mdi-map-marker</v-icon>
                        <span>{{ item.location }} </span>
                      </div>
                    </div>
                  </div>
                </v-card>
              </router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="text-center" v-if="eventDetail.count > 10">
          <v-pagination color="var(--main-color)" v-model="page" class="my-4" :length="3"
            :total-visible="7"></v-pagination>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>
          
<script>
import eventDetail from '@/store/modules/eventDetail';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Event',
  data() {
    return {
      page: 1,
    }
  },
  created() {
    console.log(this.$route.query.q);
    this.getSingleEventBySearch(this.$route.query.q)
  },
  computed: {
    ...mapGetters("eventDetail", ["eventDetail"]),
    queryResult(){
      return this.$route.query.q;
    }
  },
  methods: {
    ...mapActions("eventDetail", ["getSingleEventBySearch"])
  }
};
</script>
      
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.news__bgImage {
  width: 100%;
  height: 450px;
  background-image: linear-gradient(to bottom, #00000099, #00000099), url('../assets/image/search1.jpg');
  background-size: cover;
  background-position: center left;
  padding: 20px;
  position: relative;
  animation: news 5s forwards;
}

@keyframes news {
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
</style>
        