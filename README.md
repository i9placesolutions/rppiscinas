# RP Piscinas - Landing Page

Site institucional da RP Piscinas, especializada em piscinas com deck de madeira em todo o Brasil.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI

## Otimizações Implementadas

- **SEO Avançado**: Metadados completos, Schema.org, Open Graph
- **Performance**: Imagens otimizadas, lazy loading, preload de recursos críticos
- **Responsividade**: Design adaptado para todos os dispositivos
- **Acessibilidade**: Estrutura semântica, texto alternativo em imagens
- **Cache**: Estratégias de cache para recursos estáticos

## Instruções para Desenvolvimento

### Instalação

```bash
# Instalação de dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Rodando o Ambiente de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o site.

### Build para Produção

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

## Deploy na Vercel

Este projeto está configurado para ser facilmente implantado na Vercel.

### Opção 1: Deploy Automático (Recomendado)

1. Faça login na sua conta [Vercel](https://vercel.com/)
2. Clique em "Add New..." > "Project"
3. Selecione o repositório GitHub "rppiscinas"
4. Mantenha as configurações padrão (o framework já está configurado como Next.js)
5. Clique em "Deploy"

A Vercel irá automaticamente detectar que é um projeto Next.js e aplicará as configurações otimizadas definidas no arquivo `vercel.json`.

### Opção 2: Deploy via CLI

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. No diretório do projeto, execute:
```bash
vercel
```

3. Siga as instruções para fazer login e configurar o projeto.

4. Para fazer deploy em produção:
```bash
vercel --prod
```

### Variáveis de Ambiente

Caso necessário, configure variáveis de ambiente no painel da Vercel em:
Project > Settings > Environment Variables

## Estrutura do Projeto

- `/app` - Páginas e rotas
- `/components` - Componentes reutilizáveis
- `/public` - Arquivos estáticos (imagens, fontes)
- `/styles` - Estilos globais e configurações CSS
- `/lib` - Utilitários e funções auxiliares

## Manutenção

Para enviar atualizações para o site, após as modificações:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

A Vercel detectará automaticamente as alterações e iniciará um novo deploy. 