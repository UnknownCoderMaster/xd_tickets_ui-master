<template>
  <div>
    <v-container class="mx-auto px-md-5 px-2 pt-5">
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">N_</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Title</th>
                  <th class="text-left">Location</th>
                  <th class="text-left">Price</th>
                  <th class="text-left">Data</th>
                  <th class="text-leff">Delete | Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(element, index) in events" :key="index">
                  <td>{{ index + 1 }}.</td>
                  <td>{{ element.artists[0]?.name }}</td>
                  <td>{{ element.title }}</td>
                  <td>{{ element.location }}</td>
                  <td>{{ element.price }}</td>
                  <td>
                    {{ element.sessions[0].start_time.slice(0, 10) }} -
                    {{ element.sessions[0].start_time.slice(11, 16) }}
                  </td>
                  <td>
                    <v-btn icon>
                      <v-icon color="red" @click="showDelete(element.id)">mdi-trash-can-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="blue" @click="showEdit(index)">mdi-pencil-outline</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
    <!-- edit -->
    <div class="text-center">
      <v-dialog v-model="edit" max-width="600">
        <v-card>
          <v-card-title class="text-h5"> Edit event </v-card-title>
          <v-col cosls="12" class="pt-5">
            <v-row>
              <v-col cols="12" sm="6" class="px-5 py-3">
                <v-text-field v-model="editForm.title" class="mt-0" label="Title*"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="px-5 py-3">
                <v-text-field v-model="editForm.price" class="mt-0" label="Price*" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="px-5 py-3">
                <v-text-field v-model="editForm.location" class="mt-0" label="Location*"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="px-5 py-3">
                <v-text-field v-model="editForm.ticket_link" class="mt-0" label="Ticket buy link*"></v-text-field>
              </v-col>

              <v-col cols="12" class="px-5 py-3">
                <v-select v-model="editForm.artist_ids" :items="artistList" item-value="id" item-text="name"
                  label="Aritst*" attach chips></v-select>
              </v-col>

              <v-col cols="12" v-for="(element, index) in editForm.sessions" :key="index">
                <v-row>
                  <v-col cols="12" class="px-5 my-3 d-flex align-center">
                    <p class="mb-0 mr-3">Boshlanish vaqti:</p>
                    <div style="border: 1px solid #c6c5c5; padding: 5px 10px">
                      <Datetime type="datetime" v-model="element.start_time"></Datetime>
                    </div>
                  </v-col>

                  <v-col cols="12" class="px-5 my-4 d-flex align-center">
                    <p class="mb-0 mr-3">Tugash vaqti:</p>
                    <div style="border: 1px solid #c6c5c5; padding: 5px 10px">
                      <Datetime type="datetime" v-model="element.finish_time"></Datetime>
                    </div>
                  </v-col>
                </v-row>
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
                      <v-col cols="12" v-for="(vm, index) in editForm.images" :key="index">
                        <v-row class="d-flex align-center">
                          <v-col cols="12" class="pa-3">
                            <label for="image1">Large Image:</label>
                            <br />
                            <div class="input_container">
                              <input type="file" ref="inputLarge" id="image1" @change="onFileChangeLarge()" />
                            </div>
                          </v-col>
                          <v-col cols="12" class="pa-3">
                            <label for="image2">Small Image:</label>
                            <br />
                            <div class="input_container"> <input type="file" ref="inputSmall" id="image2"
                                @change="onFileChangeSmall()" /></div>
                          </v-col>
                          <v-col cols="12" class="pa-3">
                            <v-checkbox class="mt-0" v-model="vm.is_primary" label="Primary"
                              color="var(--admin-color)"></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" class="px-5 py-3">
                <vue-editor v-model="editForm.description" placeholder="Description*"></vue-editor>
              </v-col>

              <v-col cols="12" class="px-5">
                <v-checkbox v-model="editForm.is_published" label="Publish" color="var(--admin-color)"></v-checkbox>
              </v-col>
            </v-row>
          </v-col>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="grey" @click="edit = false"> Cancel </v-btn>
            <v-btn text color="success" @click="editEvent(events[numbers]?.id)">
              Done
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { VueEditor } from "vue2-editor";
import DateTimePicker from "vue-vanilla-datetime-picker";
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: "Dashboard",
  components: {
    VueEditor,
    DateTimePicker,
    Datetime
  },
  data() {
    return {
      search: "",
      snackbar: false,
      deleting: false,
      edit: false,
      editForm: {},
      audioValidate: false,
      headers: [
        { text: "Title", align: "start", filterable: false, value: "title" },
        { text: "Location", value: "location" },
      ],
    };
  },
  computed: {
    ...mapGetters("events", ["events"]),
    ...mapGetters("numbers", ["numbers"]),
    ...mapGetters("eventDetail", ["eventDetail"]),
    ...mapGetters("artists", ["artists"]),
    artistList() {
      let newArt = this.artists.map(({ id, name }) => ({ id, name }));
      return newArt;
    },
  },
  mounted() {
    this.getEvents();
    this.getArtists();
  },
  methods: {
    ...mapMutations("numbers", ["SET_NUMBER"]),
    ...mapActions("artists", ["getArtists"]),
    ...mapActions("eventDetail", ["getSingleEvent"]),
    ...mapActions("events", ["getEvents", "deleteEvent", "updateEvent"]),

    showDelete(id) {
      this.deleteEvent(id);
      this.deleting = !this.deleting;
      this.snackbar = !this.snackbar;
    },
    showEdit(id) {
      this.SET_NUMBER(id);
      this.getSingleEvent(this.events[id].id).then(() => {
        // here we are deep copying object so that it didn't mutate
        this.editForm = JSON.parse(JSON.stringify(this.eventDetail));
        this.editForm.artist_ids = this.eventDetail.artists[0].id;
        // const dataTransfer = new DataTransfer();
        // dataTransfer.items.add(this.editForm.images[0].image);
        // console.log(dataTransfer);

        // this.editForm.images[0].image = this.eventDetail.images[0].image;
        // this.editForm.images[0].image_small = this.eventDetail.images[0].image_small;
        // this.$refs.inputLarge.name = this.editForm.images[0].image
        // this.$refs.inputSmall[0].files[0] = this.editForm.images[0].image_small;
      });
      this.edit = !this.edit;
    },

    onFileChangeLarge() {
      this.editForm.images[0].image = this.$refs.inputLarge[0].files[0];
      this.audioValidate = true
    },

    onFileChangeSmall() {
      this.editForm.images[0].image_small = this.$refs.inputSmall[0].files[0];
      this.audioValidate = true
    },

    editEvent(id) {
      const editData = new FormData();
      editData.append("title", this.editForm.title);
      editData.append("price", this.editForm.price);
      editData.append("location", this.editForm.location);
      editData.append("description", this.editForm.description);
      editData.append("ticket_link", this.editForm.ticket_link);
      editData.append("is_published", this.editForm.is_published);
      editData.append(`artist_ids`, this.editForm.artist_ids);
      editData.append(
        `sessions[${0}]start_time`,
        this.editForm.sessions[0].start_time
      );
      editData.append(
        `sessions[${0}]finish_time`,
        this.editForm.sessions[0].finish_time
      );
      console.log(this.audioValidate);
      if (this.audioValidate) {
        editData.append(`images[${0}]image`, this.editForm.images[0].image);
        editData.append(`images[${0}]image_small`, this.editForm.images[0].image_small);
        editData.append(`images[${0}]is_primary`, this.editForm.images[0].is_primary);
      }

      this.updateEvent({ id, data: editData }).then(()=>{
        location.reload();
      });
      this.edit = !this.edit;
      this.snackbar = !this.snackbar;
    },
  },
  watch:{
    idList: {
      editEvent(){
        this.$forceUpdate();
      },
      deep: true
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

.input_container {
  border: 1px solid #e5e5e5;
}

input[type=datetime] {
  border: 1px solid grey;
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
}
</style>
