
export class Usuario {
  constructor(id, nome, email) {
    if (new.target === Usuario) {
      throw new Error("Usuario é uma classe abstrata.");
    }

    if (!id || !nome?.trim() || !email?.trim()) {
      throw new Error("ID, nome e email são obrigatórios.");
    }

    this.id = id;
    this.nome = nome.trim();
    this.email = email.trim();
  }

  getId() {
    return this.id;
  }

  getNome() {
    return this.nome;
  }

  getEmail() {
    return this.email;
  }
}
