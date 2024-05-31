<template>
  <v-app>
    <AdminNavbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
    
<script>
import AdminNavbar from '@/components/adminNavbar.vue';

export default {
  name: "AdminLayout",
  components: { AdminNavbar },
  data: () => ({
  }),
};
</script>