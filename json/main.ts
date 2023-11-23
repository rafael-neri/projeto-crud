import Usuario from "./usuario";

console.log(Usuario.listar());

Usuario.criar(3, "Fernanda Pereira", "fernanda@gmail.com");

Usuario.atualizar(3, 'Joana Pereira', "joana@gmail.com");

console.log(Usuario.listar());

Usuario.excluir(3);

console.log(Usuario.listar());
