// src/data/notes.js
// Dados mock para as notas (blog posts)
// Este arquivo contém exemplos de posts para demonstração

export const notes = [
  {
    id: 1,
    title: '10 Livros Que Todo Desenvolvedor Deveria Ler',
    slug: '10-livros-desenvolvedor',
    date: '2025-10-10',
    category: 'literature',
    excerpt: 'Uma seleção de obras clássicas e modernas que moldaram minha visão sobre programação, filosofia e vida.',
    content: `
# 10 Livros Que Todo Desenvolvedor Deveria Ler

Como desenvolvedor e amante da literatura clássica, acredito que a leitura vai muito além do código. Aqui está minha lista de 10 livros que moldaram minha forma de pensar e trabalhar:

## 1. **"O Programador Pragmático" - Andrew Hunt e David Thomas**

Um clássico atemporal que ensina princípios fundamentais de desenvolvimento de software. Essencial para qualquer desenvolvedor que queira evoluir na carreira.

## 2. **"Clean Code" - Robert C. Martin**

Uncle Bob nos ensina a escrever código limpo, legível e manutenível. Um must-read para quem se preocupa com a qualidade do código.

## 3. **"Don Quixote" - Miguel de Cervantes**

O romance de cavalaria definitivo. A história de um cavaleiro que luta contra moinhos de vento me inspira a enfrentar desafios impossíveis com coragem e imaginação.

## 4. **"A Divina Comédia" - Dante Alighieri**

Uma jornada épica pelo Inferno, Purgatório e Paraíso. A obra-prima de Dante é uma reflexão profunda sobre a natureza humana e a busca pela redenção.

## 5. **"Estruturas de Dados e Algoritmos em JavaScript" - Loiane Groner**

Um guia prático e didático para entender estruturas de dados e algoritmos, fundamentais para qualquer desenvolvedor.

## 6. **"O Senhor dos Anéis" - J.R.R. Tolkien**

A trilogia que definiu o gênero de fantasia medieval. A jornada de Frodo me ensinou sobre amizade, coragem e perseverança.

## 7. **"Refatoração" - Martin Fowler**

Um guia essencial para melhorar o design de código existente sem alterar seu comportamento. Fundamental para manter projetos saudáveis.

## 8. **"Os Lusíadas" - Luís de Camões**

A epopeia portuguesa que narra as aventuras de Vasco da Gama. Uma obra-prima da literatura clássica que celebra a coragem e a exploração.

## 9. **"Design Patterns" - Gang of Four**

O livro que introduziu os padrões de design ao mundo da programação. Essencial para entender arquitetura de software.

## 10. **"A Odisseia" - Homero**

A jornada épica de Ulisses de volta para casa. Uma história atemporal sobre perseverança, astúcia e a busca pelo lar.

---

Esses livros combinam minha paixão por tecnologia e literatura clássica. Cada um deles me ensinou algo valioso sobre programação, vida e a busca pelo conhecimento.

**E você, quais livros moldaram sua jornada como desenvolvedor?**
    `,
  },
  {
    id: 2,
    title: 'Programador Pragmático: O Valor de Aprender e Ter um Projeto de Vida',
    slug: 'programador-pragmatico',
    date: '2025-10-20',
    category: 'desenvolvimento',
    excerpt: 'Reflexões sobre aprendizado contínuo, propósito e a importância de ter um projeto que te estimule a evoluir como desenvolvedor e como pessoa.',
    content: `
  # Programador Pragmático: O Valor de Aprender e Ter um Projeto de Vida

  Antes de falar sobre programação, quero destacar algo essencial: **ter um projeto para a sua vida**. Algo que te estimule, que desperte curiosidade e te mantenha em movimento. Um propósito claro transforma o aprendizado em algo muito mais significativo. Quando você tem um projeto — pessoal ou profissional — a motivação surge naturalmente, e o estudo deixa de ser uma obrigação para se tornar parte da jornada.

  ## Aprendizado Contínuo

  Gostaria de compartilhar um pouco sobre a minha trajetória na programação e as formas que encontrei para aprender de maneira constante. Se você é iniciante ou um programador experiente, certamente já precisou revisitar conceitos básicos — seja por uma mudança na stack com que trabalha atualmente, ou simplesmente para reforçar os fundamentos.

  Minha jornada começou com o **Tibia**, onde vi o meu primeiro script e tive o meu primeiro contato com programação. Por afinidade, segui naturalmente para a área de **TI**. 

  Mas o propósito deste texto não é contar minha história, e sim compartilhar algumas formas de aprendizado que utilizo no meu dia a dia.

  ## Métodos de Aprendizado

  Atualmente, uso **flashcards** para estudar — com exercícios que vão do mais básico ao mais avançado, passando por variáveis, estruturas de dados, funções, classes e estruturas de repetição. É claro que, no cotidiano, nem sempre usamos todas essas “mágicas”, mas é importante tê-las no nosso arsenal. 

  Dominar a técnica é essencial. E mesmo com a ascensão da **IA**, compreender o contexto é o que faz a diferença. A IA pode escrever código, mas ela não conhece o cenário em que você está inserido — não entende as demandas do Jira, as necessidades do cliente ou a visão do seu líder de projeto. Por isso, **entender o porquê e o contexto por trás de cada linha de código** é o que separa um bom programador de um executor de prompts.

  ## Um Projeto Pessoal

  No final deste artigo, deixei o link para um pequeno repositório no meu GitHub, com um projeto de **flashcards para prática de programação**. Você pode usá-lo para aplicar os conceitos que aprender nos livros e cursos, e acompanhar sua própria evolução.

  Ter um projeto pessoal como esse é fundamental — ele te desafia, te mantém motivado e faz com que o aprendizado tenha propósito.

  🔗 **[Acesse o projeto de flashcards no GitHub](https://github.com/MatSuzart/front-end-note)**

  ## Livros Recomendados

  Esses são alguns livros que considero essenciais para quem deseja fortalecer suas bases e evoluir como programador:

  - **Clean Code** — boas práticas, estrutura de projetos e nomenclatura. Essencial para qualquer desenvolvedor.
  - **The Big Book of Small Python Projects** — repleto de projetos práticos, simples e desafiadores. Excelente para ampliar o repertório de resolução de problemas.
  - **JavaScript Eloquente** — combina teoria e prática com uma didática leve e repleta de exemplos reais.
  - **Python Crash Course** — ideal para quem está começando ou quer reforçar os fundamentos de Python.
  - **Automate the Boring Stuff with Python** — um clássico. Ensina a automatizar tarefas reais do dia a dia com código simples e poderoso.

  Você pode usar os exercícios desses livros dentro do projeto de flashcards — e assim criar um **arsenal teórico e prático brutal**.

  ---

  **Tenha sempre um projeto, um propósito e a curiosidade viva.  
  O código é apenas a ferramenta — o verdadeiro aprendizado está na jornada.**

  \`\`\`python
  print("bye")
  exit()
  \`\`\`
    `,
  },

  {
    id: 3,
    title: 'Bach, Beethoven e Código: A Sinergia da Música Clássica',
    slug: 'musica-classica-codigo',
    date: '2025-09-28',
    category: 'music',
    excerpt: 'Como a música clássica influencia minha produtividade e criatividade ao programar.',
    content: `
# Bach, Beethoven e Código: A Sinergia da Música Clássica

Música clássica é minha trilha sonora para programar. Descubra como Bach e Beethoven me ajudam a escrever código melhor.

## Por Que Música Clássica?

A música clássica tem uma estrutura matemática e harmônica que se alinha perfeitamente com a lógica da programação. Ela me ajuda a:

- Manter o foco e a concentração
- Estimular a criatividade
- Reduzir o estresse e a ansiedade
- Criar um ambiente propício para o deep work

## Minhas Composições Favoritas para Programar

1. **"Tocata e Fuga em Ré Menor" - Bach**: Perfeita para resolver bugs complexos
2. **"Sinfonia nº 9" - Beethoven**: Ideal para escrever código novo e criativo
3. **"As Quatro Estações" - Vivaldi**: Excelente para refatoração e limpeza de código

---

**Experimente programar ouvindo música clássica. Você pode se surpreender com os resultados!**
    `,
  },
  {
    id: 4,
    title: '5 Dicas para Manutenção Preventiva de Computadores',
    slug: 'manutencao-preventiva',
    date: '2025-09-15',
    category: 'tips',
    excerpt: 'Mantenha seu computador funcionando perfeitamente com essas dicas simples e eficazes.',
    content: `
# 5 Dicas para Manutenção Preventiva de Computadores

Como profissional de TI, vejo muitos problemas que poderiam ser evitados com manutenção preventiva. Aqui estão minhas 5 dicas essenciais.

## 1. Limpeza Física Regular

Poeira é inimiga dos computadores. Limpe ventoinhas, dissipadores e filtros a cada 3 meses.

## 2. Atualizações de Software

Mantenha o sistema operacional e os programas sempre atualizados para garantir segurança e desempenho.

## 3. Backup Regular

Faça backup dos seus dados importantes semanalmente. Use a regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 off-site.

## 4. Monitoramento de Temperatura

Use ferramentas para monitorar a temperatura do processador e GPU. Temperaturas elevadas podem causar danos permanentes.

## 5. Desfragmentação e Limpeza de Disco

Para HDDs, desfragmente regularmente. Para SSDs, use a ferramenta de otimização do sistema operacional.

---

**Manutenção preventiva economiza tempo e dinheiro a longo prazo!**
    `,
  },
];

