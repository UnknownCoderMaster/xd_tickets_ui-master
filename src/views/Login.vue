<template>
  <div class="bgImage">
    <v-container>
      <v-row>
        <v-col cols="12" sm="7" md="5" lg="4" class="mx-auto px-5">
          <v-card color="basil" class="pa-md-8 pa-5">
            <v-tabs v-model="tab" background-color="transparent" color="var(--main-color)" grow>
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-form @submit.prevent="enter()">
                  <v-container>
                    <v-row>
                      <v-col cols="12" class="mt-3">
                        <v-text-field hide-details v-model="form.username" type="text" label="Username*"
                          color="var(--main-color)" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field hide-details v-model="form.password" type="password" label="Password*"
                          color="var(--main-color)" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>

                  <div class="d-flex justify-space-between align-center py-4 px-1">
                    <div class="d-flex align-center">
                      <input type="checkbox" class="mr-2" id="vehicle1" name="vehicle1" value="Bike" color />
                      <label for="vehicle1" class="pb-0"><small>Remember</small></label>
                    </div>
                    <router-link to="#" class="black--text text-caption">Password recovery</router-link>
                  </div>
                  <div class="text-left pb-4 mt-2">
                    <v-btn depressed block color="var(--main-color)" class="rounded py-2 px-6 white--text" type="submit">
                      Enter
                    </v-btn>
                    <v-snackbar v-model="snackbarForm" color="error" min-width="250" right top>
                      <span>Complete form</span>
                      <template v-slot:action="{ attrs }">
                        <v-btn color="gray" text v-bind="attrs" @click="snackbarError = false">
                          x
                        </v-btn>
                      </template>
                    </v-snackbar>
                    <v-snackbar v-model="snackbarError" color="error" min-width="250" right top>
                      <span>Email or password is wrong.</span>
                      <template v-slot:action="{ attrs }">
                        <v-btn color="gray" text v-bind="attrs" @click="snackbarError = false">
                          x
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </div>
                </v-form>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
      
<script>
import login from '@/store/modules/login';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "Login",
  data() {
    return {
      snackbarError: false,
      snackbarForm: false,
      tab: null,
      items: ["Login"],
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed:{
    ...mapGetters("login", ["login"])
  },
  
  methods: {
    ...mapActions("login", ["postLogin"]),
    enter() {
      this.postLogin(this.form);
    },
  },
};
</script>
      
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.bgImage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-image: url("../assets/image/footer-bg.jpg");
  position: relative;
}

::v-deep .v-text-field__details {
  display: none;
}

.basil {
  background-color: white;
}

.basil--text {
  color: #3db166 !important;
}

.tabs-shadow {
  box-shadow: 0 0 7px 0 rgba(10, 10, 10, 0.56);
}
</style>