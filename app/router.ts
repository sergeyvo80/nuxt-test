// app/router.ts

import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/api/hello') {
console.log('====');
    // Ваша логика здесь
    return false; // Прерывает выполнение маршрута
  }
});