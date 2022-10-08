import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const UsuarioStore = defineStore('UsuarioStore', {
    state: () => ({
        usuario: null as User | null,
    }),
    actions: {
       async chequearUser(usua: User) {
            let buscado: User | null;
            buscado = null
            const url: string = `http://localhost:8080/user/${usua.nick}`
            await axios.get<User>(url)
                .then(response => {
                    buscado = response.data;
                });

        
            if (!!buscado && usua.pass == buscado.pass) {
                this.usuario = buscado;
                console.log(this.usuario);
                return false
            } else {
                return true
            }
        }, 
        cerrarSesion(){
            this.usuario=null
        }
    }
})

interface User {
    nick: string
    pass: string
    mail: string
}