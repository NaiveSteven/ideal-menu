/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-31 17:50:18
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-01 16:52:14
 */
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
    children: [
      {
        name: "menu-default-active",
        path: "menu-default-active",
        component: () => import("../pages/MenuDefaultActivePage.vue"),
      },
      {
        name: "menu-template",
        path: "menu-template",
        component: () => import("../pages/MenuTemplatePage.vue"),
      },
    ],
  },
]

export default routes
