<template>
  <div class="container">
    <h1>HelloWorld</h1>
    {{ count }} <br>
    <button class="btn btn-primary" @click="change">Change</button> <br>
    {{ msg }} <br>

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

    <h1 v-if="verdadeiro">
      Sou verdadeiro
    </h1>
    <h2 v-else>
      Sou falso
    </h2>

    <h1 v-show="verdadeiro">
      Verdadeiro v-show
    </h1>

    <hr>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, onMounted } from 'vue'
import axios from 'axios'

defineProps(['msg']);
let verdadeiro = ref(false);

let count = ref(1);
let alunos = reactive(['João', 'Maria', 'Daniel'])
let novoAluno = ref('')

function change() {
  count.value++
}

function adicionarAluno(novoAluno){
  alunos.push(novoAluno)
  //novoAluno.value = '';
}

onMounted(() => {
  axios
    .get('https://api.github.com/users')
    .then((response) => {

      const users = response.data

      console.log(users[0].login)

      for(let i=0; i < users.length; i++){
        console.log(users[i].login)
        alunos.push(users[i].login)
      }
    })
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border: 1px solid #312f2f;
  border-radius: 30px;
}
</style>
