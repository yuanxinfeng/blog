/*
 * @Description:
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2019-05-14 17:02:33
 * @LastEditors  : Jasper
 * @LastEditTime : 2020-01-13 15:58:19
 */
import Vue from "vue";
import store from "../store";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout/Layout";

export const constantRouterMap = [
    {
        path: "/",
        component: Layout,
        redirect: "home",
        hidden: true,
        children: [
            {
                path: "home",
                component: () => import("@/views/home/index"),
                name: "首页",
                meta: { title: "首页", icon: "index" },
            },
        ],
    },
    {
        path: "/article",
        component: Layout,
        hidden: true,
        children: [
            {
                path: "",
                component: () => import("@/views/article/index"),
                name: "文章",
                meta: { title: "文章", icon: "index" },
            },
        ],
    },
    {
        path: "/tools",
        component: Layout,
        hidden: true,
        children: [
            {
                path: "",
                component: () => import("@/views/tools/index"),
                name: "工具",
                meta: { title: "工具", icon: "index" },
            },
        ],
    },
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
const router = new Router({
    mode: "history",
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
            };
        }
    },
});

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({
    showSpinner: false,
}); // NProgress Configuration
router.beforeEach((to, from, next) => {
    NProgress.start();
    // 跳转路由 把移动端的导航初始化
    store.dispatch("getMobileOpenNav", false);
    if (_hmt) {
        if (to.path) {
            _hmt.push(["_trackPageview", "/#" + to.fullPath]);
        }
    }
    next();
});

router.afterEach(() => {
    NProgress.done(); // finish progress bar
});
export default router;
