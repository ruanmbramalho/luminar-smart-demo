# Luminar Smart Demo

Protótipo comercial enxuto do **Luminar Smart**, um assistente inteligente para a Luminar Gold Corretora de Seguros.

O objetivo deste repositório **não é construir o novo site completo da Luminar**, nem um produto de produção. O objetivo é criar uma demonstração funcional, visualmente convincente e simples o bastante para apresentar ao sócio-administrador da empresa e validar interesse comercial antes de investir em uma arquitetura maior.

## Objetivo da demo

A demo deve permitir que uma pessoa converse com um assistente de IA da Luminar e perceba, em poucos minutos, como a solução pode:

- entender a necessidade do potencial cliente;
- fazer perguntas curtas e relevantes;
- diferenciar contexto B2C e B2B;
- identificar intenção comercial;
- qualificar um lead;
- gerar um resumo estruturado para o corretor;
- transmitir a sensação de que o site da corretora pode trabalhar comercialmente 24 horas por dia.

## Escopo obrigatório

A implementação inicial deve conter apenas:

- uma landing page simples;
- identidade visual inspirada em uma corretora premium, usando tons escuros, dourado e alto contraste;
- componente de chat;
- integração server-side com um LLM;
- prompt de sistema especializado no contexto da Luminar;
- estado da conversa em memória da sessão/navegador;
- limite simples de mensagens por sessão;
- resposta final em formato de qualificação comercial;
- disclaimer deixando claro que a análise final depende de um corretor humano.

## Fora de escopo nesta fase

Não implementar agora:

- CMS;
- Sanity;
- RAG;
- banco de dados;
- autenticação;
- dashboard;
- CRM;
- envio real de leads por e-mail;
- WhatsApp API;
- analytics avançado;
- múltiplas páginas institucionais;
- blog;
- SEO completo;
- infraestrutura definitiva de produção.

Esses pontos fazem parte de uma futura versão comercial, caso a proposta seja aprovada.

## Cenário principal da demonstração

A experiência deve funcionar especialmente bem para entradas como:

> Tenho uma empresa com 80 funcionários e o plano de saúde ficou muito caro.

O assistente deve fazer poucas perguntas, entender o contexto e produzir algo como:

- Perfil: Empresa
- Colaboradores: 80
- Interesse: Saúde empresarial
- Situação atual: Já possui plano
- Problema: Reajuste elevado
- Objetivo: Redução de custos
- Urgência: Curto prazo
- Prioridade comercial: Alta

## Stack sugerida

- Astro
- TypeScript
- Tailwind CSS
- API route server-side
- SDK oficial do provedor de LLM escolhido

O protótipo deve priorizar simplicidade e baixo acoplamento.

## Filosofia do projeto

Este repositório é uma **prova de conceito comercial**.

Antes de adicionar qualquer recurso, pergunte:

> Isso ajuda a demonstrar o valor da IA para a Luminar durante uma reunião comercial?

Se a resposta for não, não implemente nesta fase.

## Execução esperada pelo Codex

Leia primeiro:

1. `CODEX.md`
2. `docs/product-context.md`
3. `docs/ux-flow.md`
4. `docs/ai-behavior.md`
5. `docs/technical-guidelines.md`

Implemente o protótipo respeitando rigorosamente o escopo.

## Executar localmente

Requer Node.js 20 ou superior.

1. Copie `.env.example` para `.env`.
2. Preencha `LLM_API_KEY` com uma chave da OpenAI e `LLM_MODEL` com um modelo disponível na conta.
3. Instale e execute:

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`. A chave é lida somente pela rota server-side `POST /api/chat` e nunca é enviada ao navegador.

Para validar e executar o build de produção:

```bash
npm run build
npm run preview
```
