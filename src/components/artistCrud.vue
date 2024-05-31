<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="mt-5">
          <div class="text-end">
            <v-btn color="var(--admin-color)" class="white--text px-10 rounded-pill" @click="artistCreate = !artistCreate"> + Add
              artist</v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"> N_</th>
                  <th class="text-left"> Name </th>
                  <th class="text-left"> Genre </th>
                  <th class="text-left"> Bio </th>
                  <th class="text-leff"> Delete | Edit </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="element, index in artists" :key="index">
                  <td>{{ index + 1 }}.</td>
                  <td>{{ element.name }}</td>
                  <td>{{ element.genre }}</td>
                  <td v-if="element.bio.length < 30">{{ element.bio }}</td>
                  <td v-else>{{ element.bio.slice(0, 30) }}...</td>

                  <td>
                    <v-btn icon>
                      <v-icon color="red" @click="deleteArt(element.id)">mdi-trash-can-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="blue" @click="showArtEdit(index)">mdi-pencil-outline</v-icon>
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
    <!-- add -->
    <div class="text-center">
      <v-dialog v-model="artistCreate" max-width="500">
        <v-card>
          <v-card-title class="text-h6 white--text" style="background-color: var(--admin-color);"> Create Artist
            Information </v-card-title>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="artistForm.name" class="mt-0" label="Artist Name*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="artistForm.genre" class="mt-0" label="Genre*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="artistForm.bio" class="mt-0" label="Bio*"></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="grey" @click="artistCreate = false"> Cancel </v-btn>
            <v-btn text color="var(--admin-color)" @click="sendArtistForm()"> Done </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- edit -->
    <div class="text-center">
      <v-dialog v-model="artistEdit" max-width="500">
        <v-card>
          <v-card-title class="text-h6 white--text" style="background-color: var(--main-color);"> Edit Artist
            Information </v-card-title>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="editArtistForm.name" class="mt-0" label="Artist Name*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editArtistForm.genre" class="mt-0" label="Genre*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editArtistForm.bio" class="mt-0" label="Bio*"></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="grey" @click="artistEdit = false"> Cancel </v-btn>
            <v-btn text color="var(--admin-color)" @click="sendArtistEditForm(artists[numbers].id)"> Done </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

  </div>
</template>
      
<script>
import artists from '@/store/modules/artists';
import axios from 'axios';
import { baseUrl } from '@/store/BaseURL';
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ArtisCrud',
  data() {
    return {
      artistCreate: false,
      artistEdit:false,
      snackbar: false,
      editArtistForm:{},
      artistForm: {
        name: '',
        genre: '',
        bio: ''
      }
    }
  },
  computed: {
    ...mapGetters("artists", ["artists"]),
    ...mapGetters("numbers",["numbers"])
  },
  mounted() {
    this.getArtists();
  },
  methods: {
    ...mapActions("artists", ["getArtists", "addArtist", "deleteArtist", "updateArtist"]),
    ...mapMutations("numbers",["SET_NUMBER"]),
    sendArtistForm() {
      if (this.artistForm.name && this.artistForm.genre && this.artistForm.bio) {
        this.addArtist(this.artistForm).then(() => {
          this.artistForm = {
            name: '',
            genre: '',
            bio: ''
          }
          this.artistCreate = !this.artistCreate;
          this.snackbar = true;
        })
      }
      else {
        alert("fill out the form")
      }


    },
    deleteArt(id) {
      this.deleteArtist(id);
      this.snackbar = true;
    },
    showArtEdit(id){
      this.SET_NUMBER(id);
      axios.get(`${baseUrl}/events/artists/${this.artists[id].id}/`)
      .then(response => {
        this.editArtistForm = response.data;
      })
      .catch(error => {
        console.log(error)
      });
      this.artistEdit = !this.artistEdit;
    },
    sendArtistEditForm(id){
      this.updateArtist({ id: id, data: this.editArtistForm });
      this.artistEdit = !this.artistEdit;
      this.snackbar = true;

    }

  }
}
</script>
      
      
    
    