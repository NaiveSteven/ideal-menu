/*
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:13:37
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-31 20:48:54
 */
import Vue from "vue"
import App from "./App.vue"
import { Icon } from "view-design"
import VueRouter from "vue-router"
import { Menu, MenuItem, SubMenu } from "./components/index"
import routes from "./router/index"
import "view-design/dist/styles/iview.css"

Vue.use(Icon)
Vue.use(VueRouter)
Vue.use(Menu)
  .use(MenuItem)
  .use(SubMenu)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router: new VueRouter({
    mode: "hash",
    routes,
  }),
}).$mount("#app")
