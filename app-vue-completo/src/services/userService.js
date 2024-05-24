import axios from 'axios';

const gitHubUrl = 'https://api.github.com/users'

export default {
    obterTodos(){
        return axios.get(gitHubUrl)
    }
}