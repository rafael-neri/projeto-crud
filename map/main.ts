import Usuario from "./usuario";

console.log(Usuario.listar());

Usuario.criar(1, "Fernando", "fernando@gmail.com");
Usuario.criar(2, "Maria", "maria@gmail.com");
Usuario.criar(3, "Karla", "karla@gmail.com");

console.log(Usuario.listar());

Usuario.atualizar(3, "Renata", "renata@gmail.com");

console.log(Usuario.listar());

Usuario.excluir(3);

console.log(Usuario.listar());
