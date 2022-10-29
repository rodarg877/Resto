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
               // console.log(resultado);
                
               if(resultado.data.token != null){
              //  console.log("Funciona, tiene token.");
                this.usuario={nick:nick, direccion: resultado.data.direccion, token:resultado.data.token} as User
                //console.log(this.usuario)
                result=false
                localStorage.setItem('usuario', JSON.stringify(this.usuario))
               }else {
                //console.log("No tiene token");
                result=true
               }
               
                //console.log("retorno del chequear" + result);
                
               

            }catch(e: any){
                console.log(e);
                
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

            
        },
        async registrarUsuario(nick:string,email:string,pass:string,direccion:string){
            console.log("counter: " + nick,email,pass,direccion);
            
            const nuevoUsuario = {nick:nick,email:email,pass:pass,direccion:direccion};
            const urlRegistrar: string = `http://localhost:8080/usuarios/`
            try {
                await axios.post(urlRegistrar,nuevoUsuario); 
                return true;   
            }catch(e){
                return false;
            }

        },
        async chequearUsuario(nick:string){
            const url: string = `http://localhost:8080/usuarios/${nick}`
            console.log(url);
            try {
                let result=await axios.get(url); 
                console.log(result); 
                return result.data;   
            }catch(e){
                return false;
            }
        },
        async chequearEmail(email:string){
            const url: string = `http://localhost:8080/usuarios/${email}`
            console.log(url);
            
            try {
                 let result=await axios.get(url); 
                 console.log(result);
                return result.data;   
            }catch(e){
                return false;
            }
        }
    }
})

interface User {
    nick: string
    direccion: string
    token: string
}