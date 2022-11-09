import { defineStore } from 'pinia'
import axios from 'axios'

export const UsuarioStore = defineStore('UsuarioStore', {
    state: () => ({
        usuario: null as User | null,
    }),
    actions: {
        async chequearUser(nick: string, pass: string) { 
            let buscado: User | null;
            buscado = null
            let result;
            const url: string = `http://localhost:8080/usuarios/login`
            try {
                const resultado = await axios.post<{ token: string, direccion: string }, any>(url, { nick: nick, pass: pass })
                if (resultado.data.token != null) {
                    this.usuario = { nick: nick, direccion: resultado.data.direccion, token: resultado.data.token } as User
                    result = false
                    localStorage.setItem('usuario', JSON.stringify(this.usuario))
                } else {
                    result = true
                }

            } catch (e: any) {
                console.log(e);
            }
            return result;
        },
        async chequearUsuario(nick:String){
        const url: string = `http://localhost:8080/usuarios/${nick}`;
            try {
                const usuarioBuscado = await axios.get(url);
                return usuarioBuscado.data;
            }catch(e){
                console.log("Error con la conexion con el back");
            }
        },
        setUsuario(user: any) {
            this.usuario = JSON.parse(user)
        },
        cerrarSesion() {
            this.usuario = null
            location.reload();
            localStorage.removeItem('usuario')


        },
        async registrarUsuario(nick: string, email: string, pass: string, direccion: string) {
            console.log("counter: " + nick, email, pass, direccion);

            const nuevoUsuario = { nick: nick, email: email, pass: pass, direccion: direccion };
            const urlRegistrar: string = `http://localhost:8080/usuarios/`
            try {
                await axios.post(urlRegistrar, nuevoUsuario);
                return true;
            } catch (e) {
                return false;
            }

        },
        async chequearEmail(email: string) {
            const url: string = `http://localhost:8080/usuarios/${email}`
            console.log(url);

            try {
                let result = await axios.get(url);
                console.log(result);
                return result.data;
            } catch (e) {
                return false;
            }
        },
        async  isAdmin() {
            const url: string = `http://localhost:8080/usuarios/validador/${this.usuario?.token}`
            
                const result=await axios.get(url)  
                if(await result.data==true){
                    return true
                }else{
                    return false
                }
            
        },
        async modificarUsuario(usuario:any) {
            const url: string = `http://localhost:8080/usuarios/modificarUsuario`
            const res=await axios.put(url,usuario)
            if(usuario.direccion){
            this.usuario = {nick:usuario.nick,direccion: usuario.direccion, token:this.usuario?.token}as User
        }
                    localStorage.setItem('usuario', JSON.stringify(this.usuario))
            return res ;
        },
        async modificarPass(usuario:any) {
            const url: string = `http://localhost:8080/usuarios/${this.usuario?.token}`
            const res=await axios.put(url,usuario)
            if(usuario.direccion){
            this.usuario = {nick:usuario.nick,direccion: usuario.direccion, token:this.usuario?.token}as User
        }
                    localStorage.setItem('usuario', JSON.stringify(this.usuario))
            return res ;
        }
    }
})

interface User {
    nick: string
    direccion: string
    token: string
}