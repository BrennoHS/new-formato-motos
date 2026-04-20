# Projeto: motochefe-clone

Guia rapido para instalar e rodar o projeto localmente.

## Pre-requisitos

- Node.js LTS (recomendado: 20+)
- npm (vem junto com o Node.js)

Para verificar se esta tudo instalado:

```bash
node -v
npm -v
```

## Como rodar localmente

1. Entre na pasta do projeto:

```bash
cd new-formato-motos-main
```

2. Instale as dependencias:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador o endereco exibido no terminal (normalmente):

```text
http://localhost:5173
```

## Live reload (atualizacao em tempo real)

O projeto usa Vite com HMR, entao mudancas em componentes, paginas e estilos aparecem automaticamente no navegador durante o desenvolvimento.

Se alterar arquivos de configuracao (por exemplo, `vite.config.js` ou variaveis de ambiente), pode ser necessario reiniciar o `npm run dev`.

## Comandos disponiveis

```bash
# desenvolvimento
npm run dev

# gerar build de producao
npm run build

# pre-visualizar build localmente
npm run preview

# checar lint
npm run lint
```

## Manutencao de motos (simples e pratica)

Os dados dos modelos ficam centralizados em `src/data/models.js`.

- Para adicionar uma moto: inclua um novo objeto no array `models` com `id`, `name`, `image`, `description`, `specs`, `features` e `highlight`.
- Para substituir uma moto: edite o objeto existente mantendo o mesmo formato.
- Para remover uma moto: apague o objeto do array `models`.
- Para controlar os cards da Home: ajuste os ids em `homeModelIds`.

Com isso, as telas que consomem modelos atualizam automaticamente:

- lista de modelos (`/modelos`)
- detalhes por id (`/modelos/:id`)
- vitrine da Home (cards de destaque)

## Solucao rapida de problemas

- Erro de `npm` ou `node` nao reconhecido:
	Instale/reinstale o Node.js LTS e abra um novo terminal.

- Porta 5173 em uso:
	O Vite pode sugerir outra porta automaticamente. Use a URL mostrada no terminal.
