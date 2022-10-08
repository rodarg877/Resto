import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const UsuarioStore = defineStore('UsuarioStore', {
    state: () => ({
        usuario: null as User | null,
    }),
    actions: {
        async chequearUser(usua: User) {
            const url: string = `http://localhost:8080/user/${usua.nick}`
            let buscado: User = await axios.get(url)
            buscado=buscado.data

            if (!!buscado && usua.pass == buscado.pass) {
                this.usuario = buscado;
                console.log(this.usuario);
                return false
            } else {
                return true
            }
        }
    }
})

interface User {
    nick: string
    pass: string
    mail: string
}