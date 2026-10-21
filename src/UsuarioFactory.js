
import { Cliente } from "./Cliente.js";
import { Tecnico } from "./Tecnico.js";

export class UsuarioFactory {
  static criarUsuario(tipo, dados) {
    switch (tipo.toUpperCase()) {
      case "CLIENTE":
        console.log("[FACTORY] Criando usuário tipo CLIENTE...");

        return new Cliente(
          dados.id,
          dados.nome,
          dados.email,
          dados.telefone ?? ""
        );

      case "TECNICO":
        console.log("[FACTORY] Criando usuário tipo TECNICO...");

        return new Tecnico(
          dados.id,
          dados.nome,
          dados.email,
          dados.especialidade
        );

      default:
        throw new Error(`Tipo de usuário inválido: ${tipo}`);
    }
  }
}
