# Diretrizes Técnicas

## Stack

Preferência:

- Astro
- TypeScript
- Tailwind CSS
- API route server-side

## Estrutura esperada

```text
src/
  components/
    LuminarSmart.astro
    ChatMessage.astro
    QualificationCard.astro
  pages/
    index.astro
    api/
      chat.ts
  styles/
    global.css
```

A estrutura pode variar se houver justificativa simples.

## Variáveis de ambiente

Criar `.env.example` com algo como:

```env
LLM_API_KEY=
LLM_MODEL=
```

Nunca versionar segredos.

## API

`POST /api/chat`

Payload sugerido:

```json
{
  "messages": [{ "role": "user", "content": "..." }]
}
```

Validar:

- array presente;
- quantidade máxima de mensagens;
- tamanho máximo de cada conteúdo;
- apenas roles permitidas.

## Limites da demo

Sugestão:

- até 30 mensagens por sessão no client;
- até 20 mensagens enviadas ao servidor por chamada;
- limite de caracteres por mensagem;
- timeout razoável;
- mensagens de erro humanizadas.

## Segurança

- API key somente no servidor;
- não renderizar HTML vindo do modelo sem sanitização;
- escapar saída do usuário e do modelo;
- não armazenar PII;
- não registrar conteúdo sensível desnecessariamente.

## Design

- mobile-first;
- dark premium;
- dourado como destaque;
- sem excesso de efeitos;
- foco total no chat;
- contraste e acessibilidade adequados.

## PWA e experiência móvel

- Manifesto instalável com ícones de 192 px e 512 px.
- Service worker limitado ao shell e aos assets estáticos; nunca armazenar respostas de `/api/` em cache.
- A interface offline pode restaurar a memória local, mas deve bloquear novos envios até a conexão retornar.
- Respeitar safe areas, teclado virtual, alvos de toque de pelo menos 44 px e modo `standalone`.
- Manter instalação como aprimoramento progressivo: a experiência web continua funcional quando o navegador não oferece o prompt.
