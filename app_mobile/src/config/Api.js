import axios from 'axios';
import Util from './Util';

const Api = axios.create({
    baseURL: 'http://localhost:8000/'
})

async function getToken() {
    const token = await Util.getToken();
    Api.defaults.headers.token = token;
}

getToken();

// Api.get('usuarios');
// Api.post('usuarios', { nome: 'Max' });
// Api.put('usuarios/1', { nome: 'Max' });
// Api.delete('usuarios/1');

// axios.get("http://localhost:8000/usuarios");
// axios.post("http://localhost:8000/usuarios", { nome: "Max" });
// axios.put("http://localhost:8000/usuarios/1", { nome: "Max" });
// axios.delete("http://localhost:8000/usuarios/1");


export default Api;