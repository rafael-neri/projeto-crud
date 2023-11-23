class Usuario {

    static usuarios = new Map<number, Usuario>();

    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    static listar() {
        return Array.from(Usuario.usuarios.values());
    }

    static criar(id: number, nome: string, email: string) {
        const usuario = new Usuario(id, nome, email);
        Usuario.usuarios.set(id, usuario);
    }

    static atualizar(id: number, nome: string, email: string) {
        const usuario = Usuario.usuarios.get(id);
        if (usuario) {
            usuario.nome = nome;
            usuario.email = email;
        } else {
            console.log(`Usuário com Id ${id} não foi encontrado.`);
        }
    }

    static excluir(id: number) {
        const result = Usuario.usuarios.delete(id);
        if (!result) {
            console.log(`Usuário com Id ${id} não foi encontrado.`);
        }
    }
}

export default Usuario;
