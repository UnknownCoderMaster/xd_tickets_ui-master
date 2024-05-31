<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="news__bgImage">
            <div class="banner_title">
              <p class="text-md-h4 text-h5 font-weight-regular white--text mb-1 text-center">
                {{ $t("news.title") }}
              </p>
              <p class="white--text text-body-1 text-center">
                {{ $t("news.text") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10 px-3">
      <v-row class="responsive__style align-start">
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12">
              <p class="text-md-h5 text-h6 mb-0"> {{ $t("news.head") }}</p>
            </v-col>
            <v-col cols="12" sm="8" data-aos="zoom-in" v-for="item, index in featureData.slice(0, 1)" :key="index" class="pa-2">
              <div class="windowHover mx-auto my-4">
                <div class="positionRelative">
                  <v-img :src="require(`../assets/image/${item.image}`)" class="hoverImage rounded"></v-img>
                  <div class="positionAbsolute white--text pa-3">
                    <p class="my-2 text-caption"
                      :class="{ 'red--text': item.type == 'Konsert', 'blue--text': item.type == 'Tadbir' }">{{ item.type }}
                    </p>
                    <p class="text-caption font-weight-light mt-2 mb-0" style="line-height: 1.5;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis numquam adipisci accusamus eum amet repellat culpa unde provident corporis...
                    </p>

                    <div class="text-body-2 py-2 d-flex justify-start align-center">
                      <div>
                        <v-icon class="mr-1" small color="var(--main-color)">mdi-calendar</v-icon>
                        <span>25.04.2023 </span>
                      </div>
                      <div class="ml-4">
                        <v-icon class="mr-1" small color="var(--main-color)">mdi-eye</v-icon>
                        <span>455 </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="4" data-aos="zoom-in" v-for="item, index in featureData.slice(1)" :key="index" class="pa-2">
              <div class="windowHover mx-auto my-4">
                <div class="positionRelative">
                  <v-img :src="require(`../assets/image/${item.image}`)" class="hoverImage rounded"></v-img>

                  <div class="positionAbsolute white--text pa-3">
                    <p class="my-2 text-caption"
                      :class="{ 'red--text': item.type == 'Konsert', 'blue--text': item.type == 'Tadbir' }">{{ item.type }}
                    </p>
                    <p class="text-caption font-weight-light mt-2 mb-0" style="line-height: 1.5;">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis numquam adipisci accusamus corporis...
                    </p>
  
                    <div class="text-caption py-2 d-flex justify-start align-center">
                      <div>
                        <v-icon class="mr-1" small color="var(--main-color)">mdi-calendar</v-icon>
                        <span>25.04.2023 </span>
                      </div>
                      <div class="ml-4">
                        <v-icon class="mr-1" small color="var(--main-color)">mdi-eye</v-icon>
                        <span>455 </span>
                      </div>
                    </div>
  
                  </div>
                </div>
               
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="3" class="px-3">
          <p class="mb-3 text-h5">Latest news</p>

          <div>
            <div class="py-2"><v-icon color="grey" normal>mdi-chevron-right</v-icon>Konsert</div>
            <v-divider light></v-divider>
          </div>
          <div>
            <div class="py-2"><v-icon color="grey" normal>mdi-chevron-right</v-icon>Ballet</div>
            <v-divider light></v-divider>
          </div>
          <div>
            <div class="py-2"><v-icon color="grey" normal>mdi-chevron-right</v-icon>Gala Konsert</div>
            <v-divider light></v-divider>

          </div>
          <div>
            <div class="py-2"><v-icon color="grey" normal>mdi-chevron-right</v-icon>Festival</div>
            <v-divider light></v-divider>

          </div>
          <div>
            <div class="py-2"><v-icon color="grey" normal>mdi-chevron-right</v-icon>So'ngi yangiliklar</div>
          </div>

        </v-col>


        <v-col cols="12" class="text-center">
          <v-pagination color="var(--main-color)" v-model="page" class="my-4" :length="3"
            :total-visible="7"></v-pagination>
        </v-col>

      </v-row>
    </v-container>
  </div>
  <!-- <v-text-field color="var(--main-color)" outlined rounded hide-details dense clearable label="Search..."
    append-icon="mdi-magnify"></v-text-field> -->
</template>
        
<script>
export default {
  name: 'Event',
  data() {
    return {
      page: 1,
      featureData: [
        {  type: "Konsert", image: "banner1.jpg" },
        {  type: "Tadbir", image: "banner2.jpg" },
        {  type: "Tadbir", image: "banner3.jpeg" },
        {  type: "Konsert", image: "banner4.jpg" },
        {  type: "Konsert", image: "concert1.jpg" },
        {  type: "Konsert", image: "concert2.jpg" },
        {  type: "Konsert", image: "concert4.jpg" },
      ]
    }
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
  background-image: linear-gradient(to bottom, #00000099, #00000099), url('../assets/image/news.jpg');
  background-size: cover;
  background-position: top;
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
  height: 350px;
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


.windowHover:hover .hoverImage {
  transform: scale(1.1);
}

.positionRelative {
  position: relative;
  overflow: hidden;
}

.positionAbsolute {
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
      rgba(12, 12, 12, 0.89),
      rgba(19, 19, 19, 0.0191));
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
</style>
      