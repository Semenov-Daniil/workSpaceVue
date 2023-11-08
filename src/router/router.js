import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    component: Main,
    name: "Главная",
    meta: {
      title: "Главная"
    }
  },
  {
    path: '/test',
    component: Test,
    name: "Тестовая страница",
    meta: {
      title: "Тестовая страница"
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router
