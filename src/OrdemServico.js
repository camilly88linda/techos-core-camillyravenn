
export class OrdemServico {
  constructor(id, cliente, tecnico, descricao) {
    if (!cliente || !tecnico) {
      throw new Error("Cliente e técnico são obrigatórios.");
    }

    if (!descricao?.trim()) {
      throw new Error("A descrição é obrigatória.");
    }

    this.id = id;
    this.cliente = cliente;
    this.tecnico = tecnico;
    this.descricao = descricao.trim();
    this.status = "ABERTA";
  }

  alterarStatus(novoStatus) {
    const statusPermitidos = [
      "ABERTA",
      "EM_ANDAMENTO",
      "CONCLUIDA",
      "CANCELADA"
    ];

    if (!statusPermitidos.includes(novoStatus)) {
      throw new Error("Status inválido.");
    }

    this.status = novoStatus;
  }

  toJSON() {
    return {
      id: this.id,
      cliente: this.cliente.getNome(),
      tecnico: this.tecnico.getNome(),
      status: this.status,
      descricao: this.descricao
    };
  }
}
