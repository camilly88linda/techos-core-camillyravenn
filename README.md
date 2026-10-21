
# TechOS Core

## Descrição
Sistema de gerenciamento de ordens de serviço para assistência técnica.

## Funcionalidades
- Cadastro de clientes e técnicos por meio da UsuarioFactory.
- Validação dos dados dos usuários.
- Criação e listagem de ordens de serviço.
- Controle de status das ordens.
- Gerenciamento centralizado das ordens com Singleton.

## Padrões e conceitos utilizados
- **Factory:** centraliza a criação de clientes e técnicos.
- **Singleton:** mantém uma única instância do GerenciadorOS.
- **Herança:** Cliente e Tecnico herdam de Usuario.
- **Encapsulamento:** organização dos dados e métodos das classes.

## Tecnologias
- JavaScript
- Node.js
- Módulos ES6

## Como executar
1. Instale o Node.js.
2. Abra o terminal na pasta do projeto.
3. Execute:

```bash
npm start
```

## Exemplo de uso
O sistema cria um cliente, um técnico e registra uma ordem de serviço,
exibindo a lista de ordens no terminal.

## Status
Versão inicial para fins acadêmicos.
