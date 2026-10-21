
import { UsuarioFactory } from "./src/UsuarioFactory.js";
import { GerenciadorOS } from "./src/GerenciadorOS.js";

const cliente = UsuarioFactory.criarUsuario("CLIENTE", {
  id: 101,
  nome: "Ana",
  email: "ana@email.com",
  telefone: "81999999999"
});

const tecnico = UsuarioFactory.criarUsuario("TECNICO", {
  id: 202,
  nome: "Carlos",
  email: "carlos@email.com",
  especialidade: "Hardware"
});

const gerenciador = new GerenciadorOS();
const gerenciador2 = new GerenciadorOS();

console.log(
  "[TESTE] Instâncias iguais:",
  gerenciador === gerenciador2
);

gerenciador.criarOrdem(
  cliente,
  tecnico,
  "Troca de Tela"
);

console.log("[SISTEMA] Lista de OS ativas:");
console.log(
  JSON.stringify(gerenciador.listarOrdens(), null, 2)
);
