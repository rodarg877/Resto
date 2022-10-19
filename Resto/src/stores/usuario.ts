import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const UsuarioStore = defineStore('UsuarioStore', {
    state: () => ({
        usuario: null as String | null,
    }),
    actions: {
       async chequearUser(usua: User) {
            let buscado: User | null;
            buscado = null
            let result;
            const url: string = `http://localhost:8080/usuarios/${usua.nick}`
            await axios.get<User,any>(url)
                .then(response => {
                    console.log(response.status);
                    buscado = response.data;
                    this.usuario = usua.nick;
                    result=false
                }).catch((e: Error) => {
                    console.log("entro");
                    result=true
                    
                  });
                  return result;
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