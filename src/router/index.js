import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout/Layout";

export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    hidden: true,
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "首页",
        meta: { title: "首页", icon: "index" }
      }
    ]
  }
  // {
  //   path: "/404",
  //   component: () => import("@/views/errorPage/404"),
  //   hidden: true
  // },
  // {
  //   path: "/401",
  //   component: () => import("@/views/errorPage/401"),
  //   hidden: true
  // }
];
export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
