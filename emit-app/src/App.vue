<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Usando emit globalmente</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script setup>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

import useEventBus from './useEventBus'

const { emitEvent } = useEventBus()

onMounted(()=>{
  emitEvent('myEvent', {data: 'mensagem do evento'})
})

</script>