# Instruções para o Codex — Luminar Smart Demo

Você é o agente responsável por implementar um protótipo comercial chamado **Luminar Smart**.

## Contexto

A Luminar Gold é uma corretora de seguros. A proposta comercial é mostrar que o site da empresa pode deixar de ser apenas institucional e se tornar uma ferramenta ativa de atendimento, qualificação e geração de oportunidades.

O público da demonstração é um decisor da empresa com interesse em inteligência artificial. Portanto, a demo precisa provocar rapidamente a sensação de:

> “Quero isso funcionando na minha corretora.”

## Sua missão

Construir uma demonstração funcional, bonita, direta e convincente de um assistente de IA aplicado ao contexto comercial da corretora.

Não transformar isso em um produto completo.

## Regras fundamentais

1. Seja minimalista.
2. Não introduza banco de dados.
3. Não introduza CMS.
4. Não implemente RAG.
5. Não adicione autenticação.
6. Não crie arquitetura corporativa desnecessária.
7. Nunca exponha chave de API no client.
8. A chamada ao LLM deve ocorrer somente no servidor.
9. Use TypeScript estrito sempre que possível.
10. Mantenha os componentes pequenos e fáceis de substituir.

## Resultado visual esperado

Uma única página premium contendo:

- marca Luminar Gold;
- headline curta;
- descrição do conceito;
- chat central como elemento principal;
- sugestões de prompts iniciais;
- visual sofisticado, escuro e dourado;
- boa experiência mobile;
- transições discretas;
- indicação visual de que se trata de um protótipo conceitual.

Evite aparência genérica de “chatbot SaaS”. Deve parecer parte da identidade de uma corretora premium.

## Interação principal

Mensagem inicial sugerida:

> Olá! Sou o Luminar Smart. Posso ajudar a entender sua necessidade e direcionar você para a solução mais adequada. Como posso ajudar?

Prompts sugeridos na interface:

- Tenho uma empresa com 80 funcionários e o plano ficou caro.
- Quero proteger meu carro novo.
- Tenho uma empresa e não sei quais seguros preciso.

## Comportamento da IA

A IA deve:

- responder em português do Brasil;
- usar linguagem profissional e simples;
- fazer uma pergunta por vez;
- evitar respostas longas;
- coletar apenas dados necessários para a demonstração;
- não inventar preços, seguradoras, coberturas ou condições;
- não garantir contratação;
- não dar aconselhamento jurídico ou financeiro;
- indicar quando uma avaliação depende de um corretor humano;
- encerrar a qualificação quando já houver contexto suficiente.

## Qualificação

Quando houver informação suficiente, a IA deve gerar uma seção claramente identificável como:

### ANÁLISE LUMINAR SMART

Com campos como:

- Perfil
- Interesse
- Quantidade de colaboradores, quando aplicável
- Situação atual
- Necessidade identificada
- Objetivo
- Urgência
- Prioridade comercial
- Resumo para o especialista

Esse resumo é o principal momento “uau” da demonstração.

## Proteção básica

Implementar:

- limite por sessão no client;
- validação básica do payload no server;
- timeout da chamada ao LLM;
- tratamento amigável de erro;
- nenhuma chave ou segredo exposto no browser.

## Entrega

Ao finalizar:

- garantir `npm install` + `npm run dev` funcionando;
- criar `.env.example`;
- documentar onde inserir a chave do provedor;
- atualizar o README se alguma decisão técnica mudar;
- não adicionar recursos fora do escopo sem justificativa explícita.
