import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useStorage} from '@vueuse/core'

export const UsuarioStore = defineStore('UsuarioStore', {
    state: () => ({
        usuario: null as User | null,
        
        //usuario: useStorage("usuario", null) as unknown as User,
    }),
    actions: {
       async chequearUser(nick: string, pass: string) {
            let buscado: User | null;
            buscado = null
            let result;
            const url: string = `http://localhost:8080/usuarios/login`
            try{
                const resultado = await axios.post<{token:string, direccion:string},any>(url, {nick: nick, pass: pass}) 
                console.log(resultado);
                
                
                this.usuario={nick:nick, direccion: resultado.data.direccion, token:resultado.data.token} as User

                console.log(this.usuario)
                result=false
                localStorage.setItem('usuario', JSON.stringify(this.usuario))

            }catch(e: any){
                console.log(e);
                result=true
            }
                  return result;
        },
        setUsuario(user:any){
            this.usuario = user
        }, 
        cerrarSesion(){
            this.usuario = null
            location.reload();
            localStorage.removeItem('usuario')

            
        }
    }
})

interface User {
    nick: string
    direccion: string
    token: string
}