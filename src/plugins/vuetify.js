import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            acer:colors.black,
            primary: colors.grey.darken4,
            secondary: colors.grey.darken1,
            accent: colors.pink.darken1,
            error: colors.red.accent3,
            background: colors.white,
            secondary_bg:colors.grey.lighten3,
            info: colors.teal.darken1,
          },
          dark: {
            acer:colors.white,
            primary: colors.grey.lighten5,
            background: colors.black,
            secondary_bg:colors.black,
            info: colors.teal.lighten1,
          },
        },
      },
});
