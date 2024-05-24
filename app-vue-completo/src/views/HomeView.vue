<template>
    <button class="btn btn-primary"  @click="obterUsuarios">Obter</button>

  <h1>Home</h1>

  <table class="table table-striped">
    <thead>
      <th>Id</th>
      <th>Nome</th>
    </thead>
    <tbody>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td>{{ usuario.id }}</td>
        <td>{{ usuario.login }}</td>
      </tr>
    </tbody>
  </table>

  <hr>

</template>

<script setup>

import axios from 'axios';
import {ref, onMounted} from 'vue'

import userService from '@/services/userService'
import EventBus from '@/conf/EventBus';

const gitHubUrl = 'https://api.github.com/users'
const usuarios = ref()

onMounted(()=>{
  axios
    .get(gitHubUrl)
    .then((response)=> {
        //console.log(response.data)
        usuarios.value = response.data
    })
})

function obterUsuarios(){
  EventBus.$emit('loadingEvent', true)

  userService.obterTodos().then((response)=> {
    console.log(response.data)
    EventBus.$emit('loadingEvent', false)
  })

}

</script>