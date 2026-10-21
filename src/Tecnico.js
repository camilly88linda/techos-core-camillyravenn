
import { Usuario } from "./Usuario.js";

export class Tecnico extends Usuario {
  constructor(id, nome, email, especialidade) {
    super(id, nome, email);

    if (!especialidade?.trim()) {
      throw new Error("A especialidade é obrigatória.");
    }

    this.especialidade = especialidade.trim();
  }
}
