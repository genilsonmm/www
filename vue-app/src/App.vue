<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="textoDoOutroComponente"/>
  {{ msg }} | {{ count }}
  <button  @click="mudarTexto">Mudar</button>

  <input type="text" placeholder="Nome do aluno" v-model="novoAluno" />
    {{ novoAluno }}
    <button @click="adicionarAluno(novoAluno)">Adicionar</button>

  <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(aluno, index) in alunos" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ aluno }}</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      msg: 'Ola VueJs',
      count: 1,
      textoDoOutroComponente: 'Sou um texto do componente App',
      alunos: ['João', 'Maria', 'Daniel'],
      novoAluno: ''
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    this.msg = 'Mudei a msg'
    /*
    axios
      .get('https://api.github.com/users')
      .then((response) => {
        console.log(response)
    })*/
  },
  methods: {
    mudarTexto(){
      this.msg = "Mudei após o click!"
      this.count++
    },
    adicionarAluno(novoAluno){
      this.alunos.push(novoAluno)
      this.novoAluno = ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
