
import { OrdemServico } from "./OrdemServico.js";

export class GerenciadorOS {
  static instancia = null;

  constructor() {
    if (GerenciadorOS.instancia) {
      return GerenciadorOS.instancia;
    }

    this.ordens = [];
    this.proximoId = 1;

    GerenciadorOS.instancia = this;

    console.log(
      "[SINGLETON] Instância única do GerenciadorOS inicializada."
    );
  }

  criarOrdem(cliente, tecnico, descricao) {
    if (!cliente?.getId || !tecnico?.getId) {
      throw new Error("Cliente ou técnico inválido.");
    }

    const ordem = new OrdemServico(
      this.proximoId++,
      cliente,
      tecnico,
      descricao
    );

    this.ordens.push(ordem);

    console.log(
      `[SISTEMA] Ordem de Serviço #${ordem.id} registrada com sucesso!`
    );

    return ordem;
  }

  listarOrdens() {
    return this.ordens.map((ordem) => ordem.toJSON());
  }
}
