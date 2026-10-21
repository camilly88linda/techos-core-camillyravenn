
import { UsuarioFactory } from "./UsuarioFactory.js";

const cliente = UsuarioFactory.criarUsuario("CLIENTE", {
  id: 1,
  nome: "Ana",
  email: "ana@email.com",
  telefone: "81999999999"
});

const tecnico = UsuarioFactory.criarUsuario("TECNICO", {
  id: 2,
  nome: "Carlos",
  email: "carlos@email.com",
  especialidade: "Troca de telas"
});

console.log("\n[TESTE] Cliente criado:");
console.log(cliente);

console.log("\n[TESTE] Técnico criado:");
console.log(tecnico);

console.log("\n[TESTE] Nome do cliente:", cliente.getNome());
console.log("[TESTE] Email do técnico:", tecnico.getEmail());
