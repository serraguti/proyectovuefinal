import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';
import VueRouter from 'vue-router';
import Deportes from './components/Deportes.vue';
import NumerosPadre from './components/NumerosPadre.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/numerospadre", component: NumerosPadre},
  {path: "/deportes", component: Deportes},
  {path: "/tablamultiplicar", component: TablaMultiplicar}
]

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
