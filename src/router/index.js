import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "Home",
    component: () => {
      return import("@/layouts/AuthLayout");
    },
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        name: "Home",
        component: () => {
          return import("../views/HomeView");
        },
      },
      {
        path: "/calendar",
        name: "Calendar",
        component: () => {
          return import("../components/eventCalendar");
        },
      },
      {
        path: "/search",
        name: "Search",
        component: () => {
          return import("../components/searchResult");
        },
      },
      {
        path: "contact",
        name: "Contact",
        component: () => {
          return import("../views/Contact");
        },
      },
      {
        path: "news",
        name: "News",
        component: () => {
          return import("../views/News");
        },
      },
      {
        path: "event",
        name: "Event",
        component: () => {
          return import("../views/Event");
        },
      },
      {
        path: "event/:event",
        name: "Detail",
        component: () => {
          return import("../views/Detail");
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => {
      return import("@/layouts/DefaultLayout");
    },
    children: [
      {
        path: "",
        name: "Login",
        component: () => {
          return import("../views/Login");
        },
      },
    ],
  },
  {
    path: "/admin",
    name: "AdminLayout",
    component: () => {
      return import("@/layouts/AdminLayout");
    },
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => {
          return import("../views/Dashboard");
        },
        meta: { requiresAuth: true },
      },
      {
        path: "/create",
        name: "create",
        component: () => {
          return import("../components/createForm");
        },
        meta: { requiresAuth: true },
      },
      {
        path: "/artist",
        name: "artist",
        component: () => {
          return import("../components/artistCrud");
        },
        meta: { requiresAuth: true },
      },
      {
        path: "/report",
        name: "report",
        component: () => {
          return import("../components/report");
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      next();
      return;
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
