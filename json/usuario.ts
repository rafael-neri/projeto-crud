import * as fs from 'fs';

class Usuario {
    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    static listar() {
        const content = fs.readFileSync('usuarios.json', 'utf-8');
        const usuarios = JSON.parse(content);
        return usuarios;
    }

    static criar(id: number, nome: string, email: string) {
        const usuario = new Usuario(id, nome, email);

        const usuarios = Usuario.listar();
        usuarios.push(usuario);

        fs.writeFileSync('usuarios.json', JSON.stringify(usuarios));
    }

    static atualizar(id: number, nome: string, email: string) {
        const usuarios = Usuario.listar();
        const usuario = usuarios.find((usuario: Usuario) => usuario.id === id);
        if (usuario) {
            usuario.nome = nome;
            usuario.email = email;
            fs.writeFileSync('usuarios.json', JSON.stringify(usuarios));
        } else {
            console.log(`Usuário com Id ${id} não foi encontrado.`);
        }
    }

    static excluir(id: number) {
        const usuarios = Usuario.listar();
        const index = usuarios.findIndex((usuario: Usuario) => usuario.id === id);
        if (index !== -1) {
            usuarios.splice(index, 1);
            fs.writeFileSync('usuarios.json', JSON.stringify(usuarios));
        } else {
            console.log(`Usuário com Id ${id} não foi encontrado.`);
        }
    }

}

export default Usuario;
