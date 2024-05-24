<template>
  <div v-if="isOpen" style="background-color: black;">
    <span class="loader"></span>
  </div>

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/minha-pagina">Minha página</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import {ref, onMounted} from  'vue'
import { RouterLink, RouterView } from 'vue-router'
import EventBus from '@/conf/EventBus';

const isOpen = ref(false)

onMounted(()=>{
  EventBus.$on('loadingEvent', (isOpen)=>{
    console.log('recebeu', isOpen)
    isOpen.value = isOpen
  })
})

</script>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
