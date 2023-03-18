<script setup>
import { ref } from 'vue'
var isOpen=ref(false)
const toggleMenu=()=>{
    isOpen.value=!isOpen.value
  }
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 z-40 w-screen h-screen bg-black/90 flex flex-row items-center" :class="isOpen?'':'hidden'">
          <button @click="toggleMenu"> 
            <img class="h-5 absolute top-6 right-6 text-white font-bold text-lg" src="./assets/cross.svg">
          </button>
          <div class="flex w-full items-center justify-between justify-center flex-col">
            <ul class="flex flex-col justify-items-center items-center"> 
              <li  @click="toggleMenu">
                <router-link to="/" class="text-sm w-[200px] flex flex-col items-center py-2 rounded-full border-2 border-white bg-white mb-3 font-semibold">Home</router-link>
              </li>
              <li @click="toggleMenu">
                <router-link to="/predict" class="text-sm w-[200px] flex flex-col items-center py-2 rounded-full border-2 border-white bg-white mb-3 font-semibold">Predict</router-link>
              </li>
              <li @click="toggleMenu">
                <router-link to="/performance" class="text-sm w-[200px] flex flex-col items-center py-2 rounded-full border-2 border-white bg-white mb-3 font-semibold">Performance</router-link>
              </li>
              <li @click="toggleMenu">
                <router-link to="/about" class="text-sm w-[200px] flex flex-col items-center py-2 rounded-full border-2 border-white bg-white mb-3 font-semibold">About</router-link>
              </li>
            </ul>
          </div>
    </div>
    <div>
      <nav class="px-2 sm:px-4 py-3 w-screen z-10 bg-black flex flex-row items-center">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" class="flex items-center">
              <span class="self-center md:text-xl font-semibold whitespace-nowrap text-white text-lg">Heart Disease prediction</span>
          </a>
        </div>
        <div class="md:flex hidden">
          <router-link to="/" class="text-gray-300 px-1 text-xs hover:text-gray-500">Home</router-link>
          <router-link to="/predict" class="text-gray-300 px-1 text-xs hover:text-gray-500">Predict</router-link>
          <router-link to="/performance" class="text-gray-300 px-1 text-xs hover:text-gray-500">Performance</router-link>
          <router-link to="/about" class="text-gray-300 px-1 text-xs hover:text-gray-500">About</router-link>
        </div>
        <div class="md:hidden flex">
          <button @click="toggleMenu"> 
            <img class="h-7" src="./assets/menu.svg" alt="">
          </button>
        </div>
      </nav>
      <router-view>
      </router-view>
      <footer class="bg-black py-7 p-3">
        <h5 class="font-bold text-white pb-3">Heart Disease Prediction</h5>
        <div class="flex flex-row justify-between items-center">
          <p class="text-sm font-bold text-gray-500 ">Based of Random Forest Algorithm</p>
          <p class="text-xs text-gray-500">&copy 2023</p>
        </div>
      </footer>
    </div>
  </div>
</template>