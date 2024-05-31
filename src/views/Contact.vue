<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="contact__bgImage">
            <div class="banner_title">
              <p class="text-md-h3 text-h5 font-weight-regular white--text mb-1 text-center">{{$t("contact.title")}}</p>
              <p class="white--text text-body-1 text-center">{{$t("contact.text")}}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto py-10">
      <v-row class="responsive__style">
        <v-col cols="12" md="6" class="px-4">
          <div>
            <p class="text-md-h4 text-h6">{{$t("contact.message")}}:</p>
            <v-text-field :label="$t('contact.name')" solo></v-text-field>
            <v-text-field :label="$t('contact.email')" solo></v-text-field>
            <v-text-field :label="$t('contact.phone')" solo></v-text-field>
            <v-text-field :label="$t('contact.subject')" solo></v-text-field>
            <v-textarea solo name="input-7-4" :label="$t('contact.letter')"></v-textarea>
            <v-btn block color="var(--main-color)" class="white--text">{{ $t("contact.send") }} </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="px-4">
          <div class="mapouter mt-10">
            <div class="gmap_canvas"><iframe width="100%" height="450" id="gmap_canvas"
                src="https://maps.google.com/maps?q=istiqlol san'at saroyi&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                href="https://2yu.co">2yu</a><br>

            </div>
          </div>
          <div class="py-4">
            <div class="d-flex align-center my-4">
              <v-icon color="var(--main-color)">mdi-map-marker</v-icon>
              <p class="mb-0 ml-2">Uzbekistan, Tashkent, Furqat ko'chasi 3, 100003</p>
            </div>
            <div class="d-flex align-center my-4">
              <v-icon color="var(--main-color)">mdi-email</v-icon>
              <p class="mb-0 ml-2">istiqlolsanatsaroyi@gmail.com</p>            
            </div>
            <div class="d-flex align-center my-4">
              <v-icon color="var(--main-color)">mdi-phone</v-icon>
              <p class="mb-0 ml-2">+998 71 245 92 51</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
    
<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.contact__bgImage {
  width: 100%;
  height: 450px;
  background-image: linear-gradient(to bottom, #00000099, #00000099), url('../assets/image/contact2.jpg');
  background-size: cover;
  background-attachment: unset;
  background-position: center;
  padding: 20px;
  position: relative;
  animation: contact 5s forwards;

}

@keyframes contact {
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

.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 450px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 450px;
}
</style>
  