<template>
  <div>
    <v-container class="mx-auto mt-5">
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto pa-3 mb-15" elevation="24">
            <v-card-text class="px-1">
              <div class="text-start">
                <p class="text-h5 mb-0 font-weight-bold black--text">
                  Create Event
                </p>
              </div>
            </v-card-text>
            <form style="width: 100%" @submit.prevent="sendForm()">
              <v-row>
                <v-col cols="12" sm="6" class="px-5">
                  <v-text-field required v-model="event.title" class="mt-0" label="Title*"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-5">
                  <v-text-field required v-model="event.price" class="mt-0" label="Price*" type="number"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-5">
                  <v-text-field required v-model="event.location" class="mt-0" label="Location*"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="px-5">
                  <v-text-field required v-model="event.ticket_link" class="mt-0" label="Ticket buy link*"></v-text-field>
                </v-col>

                <v-col cols="12" md="6" class="px-5 my-3 d-flex align-center">
                  <p class="mb-0 mr-3">Boshlanish vaqti:</p>
                  <div class="dateTimePicker">
                    <Datetime type="datetime" placeholder="select date time" v-model="event.sessions[0].start_time">
                    </Datetime>

                    <!-- <date-time-picker v-model="event.sessions[0].start_time"></date-time-picker> -->
                  </div>
                </v-col>

                <v-col cols="12" md="6" class="px-5 my-4 d-flex align-center">
                  <p class="mb-0 mr-3">Tugash vaqti:</p>
                  <div class="dateTimePicker">
                    <Datetime type="datetime" placeholder="select date time" v-model="event.sessions[0].finish_time">
                    </Datetime>
                    <!-- <date-time-picker v-model="event.sessions[0].finish_time"></date-time-picker> -->
                  </div>
                </v-col>

                <v-col cols="12" class="px-5">
                  <v-select v-model="event.artist_ids" :items="artistList" item-value="id" item-text="name"
                    label="Aritst*" attach chips></v-select>
                </v-col>

                <v-col cols="12">
                  <v-row class="d-flex align-start">
                    <v-col cols="12" class="pb-0 px-5">
                      <v-btn @click="addImage()" class="px-8" small dark color="var(--admin-color)">
                        + Add
                      </v-btn>
                    </v-col>
                    <v-col cols="12" class="px-5 pt-0">
                      <v-card class="my-3">
                        <v-col cols="12">
                          <v-row class="d-flex align-center">
                            <v-col cols="12" lg="4">
                              <label for="image1">Large Image (1200x600):</label>
                              <br>
                              <div class="input_container">
                                <input type="file" ref="largeInput" id="image1" @change="onFileChange1()" />
                              </div>
                            </v-col>
                            <v-col cols="12" lg="4">
                              <label for="image2">Small Image (600x600):</label>
                              <br>
                              <div class="input_container">
                                <input type="file" ref="smallInput" id="image2" @change="onFileChange2()" />
                              </div>
                            </v-col>
                            <v-col cols="12" lg="1">
                              <v-checkbox v-model="event.images[0].is_primary" label="Primary"
                                color="var(--admin-color)"></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" class="px-5">
                  <vue-editor v-model="event.description" placeholder="Description*"></vue-editor>
                </v-col>
                <v-col cols="12" class="px-5">
                  <v-checkbox v-model="event.is_published" label="Publish" color="var(--admin-color)"></v-checkbox>
                </v-col>
                <v-col cols="12">
                  <v-btn type="submit" block class="white--text" color="var(--admin-color)">Create Event</v-btn>
                </v-col>
              </v-row>
            </form>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-snackbar v-model="snackbar" color="success" min-width="250" right top>
            <span>Successful</span>
            <template v-slot:action="{ attrs }">
              <v-btn color="gray" text v-bind="attrs" @click="snackbarError = false">
                x
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import DateTimePicker from "vue-vanilla-datetime-picker";
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'


import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateForm",
  components: {
    VueEditor,
    DateTimePicker,
    Datetime
  },
  data() {
    return {
      snackbar: false,
      countImage: 1,
      event: {
        title: "",
        price: null,
        location: "",
        description: "",
        ticket_link: "",
        is_published: false,
        sessions: [
          {
            start_time: "",
            finish_time: "",
          },
        ],
        images: [
          {
            image: null,
            image_small: null,
            is_primary: false,
          },
        ],
        artist_ids: "",
      },
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
    };
  },
  computed: {
    ...mapGetters("events", ["events"]),
    ...mapGetters("artists", ["artists"]),
    ...mapGetters("login", ["login"]),

    artistList() {
      let newArt = this.artists.map(({ id, name }) => ({ id, name }));
      return newArt;
    },
  },
  mounted() {
    console.log(this.login);
    this.getArtists();
  },
  methods: {
    ...mapActions("events", ["addEvent"]),
    ...mapActions("artists", ["getArtists"]),

    addImage() {
      this.countImage++;
      this.event.images.push({
        image: "",
        image_small: "",
        is_primary: false,
      });
    },
    onFileChange1() {
      this.event.images[0].image = this.$refs.largeInput.files[0];
      console.log(this.$refs.largeInput.files[0]);
    },
    onFileChange2() {
      this.event.images[0].image_small = this.$refs.smallInput.files[0];
      console.log(this.event.images[0].image_small);
    },
    sendForm() {
      const formData = new FormData();
      formData.append("title", this.event.title);
      formData.append("price", this.event.price);
      formData.append("location", this.event.location);
      formData.append("description", this.event.description);
      formData.append("ticket_link", this.event.ticket_link);
      formData.append("is_published", this.event.is_published);
      formData.append(
        `sessions[${0}]start_time`,
        this.event.sessions[0].start_time
      );
      formData.append(
        `sessions[${0}]finish_time`,
        this.event.sessions[0].finish_time
      );
      formData.append(`artist_ids`, this.event.artist_ids);
      formData.append(`images[${0}]image`, this.event.images[0].image);
      formData.append(`images[${0}]image_small`, this.event.images[0].image_small);
      formData.append(`images[${0}]is_primary`, this.event.images[0].is_primary);

      // formData.append(
      //   "images",
      //   JSON.stringify([
      //     { image: base64Image, image_small: null, is_primary: false },
      //   ])
      // );
      // }
      // console.log(formData.entries());
        this.addEvent(formData);
        this.event = {
          title: "",
          price: null,
          location: "",
          description: "",
          ticket_link: "",
          is_published: false,
          sessions: [
            {
              start_time: "",
              finish_time: "",
            },
          ],
          images: [
            {
              image: null,
              image_small: null,
              is_primary: false,
            },
          ],
          artist_ids: [],
        },
          this.snackbar = true;
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

input[type="number"] {
  outline: none;
  border-bottom: 1px solid grey;
}

.dateTimePicker {
  padding: 0px 20px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #eee;
  color: black;
}

.input_container {
  border: 1px solid #e5e5e5;
}


input[type=file]::file-selector-button {
  background-color: #c6c5c5;
  color: #000;
  border: 0px;
  border-right: 1px solid #e5e5e5;
  padding: 10px 15px;
  margin-right: 20px;
  transition: .5s;
}

input[type=file]::file-selector-button:hover {
  background-color: #eee;
  border: 0px;
  border-right: 1px solid #e5e5e5;
}</style>
