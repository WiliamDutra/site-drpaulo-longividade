// Reviews ilustrativos (dados de exemplo, não depoimentos reais de pacientes).
// Sem alegação de resultado clínico específico, coerente com o MedicalDisclaimer do footer.
// Substituir por avaliações reais quando disponíveis.
export interface Review {
  name: string;
  initial: string;
  date: string;
  rating: number;
  quote: string;
  color: string;
}

const palette = ['#1b6099', '#4b5763', '#2f8fc7', '#0d2b47'];

export const reviews: Review[] = [
  {
    name: 'Renata Almeida',
    initial: 'R',
    date: 'há 2 semanas',
    rating: 5,
    quote:
      'Depois de anos tentando sozinha, finalmente entendi por que meu corpo não respondia. O acompanhamento foi diferente de tudo que já fiz.',
    color: palette[0],
  },
  {
    name: 'Marcelo Tavares',
    initial: 'M',
    date: 'há 1 mês',
    rating: 5,
    quote: 'Consulta detalhada, exames explicados com calma. Pela primeira vez senti que o tratamento fazia sentido pro meu caso.',
    color: palette[1],
  },
  {
    name: 'Juliana Castro',
    initial: 'J',
    date: 'há 1 mês',
    rating: 5,
    quote: 'Equipe atenciosa, estrutura excelente. Recomendo para quem já tentou de tudo e não teve acompanhamento de verdade.',
    color: palette[2],
  },
  {
    name: 'Eduardo Ferraz',
    initial: 'E',
    date: 'há 2 meses',
    rating: 5,
    quote: 'Método sério, sem promessa milagrosa. Isso me deu confiança para seguir o plano até o fim.',
    color: palette[3],
  },
  {
    name: 'Patrícia Nogueira',
    initial: 'P',
    date: 'há 3 meses',
    rating: 4,
    quote: 'Ótimo atendimento, explicações claras em cada etapa. Só senti falta de mais horários disponíveis na agenda.',
    color: palette[0],
  },
  {
    name: 'Bruno Siqueira',
    initial: 'B',
    date: 'há 3 meses',
    rating: 5,
    quote: 'Indicação de um amigo. Fui com pé atrás e saí impressionado com o nível técnico da consulta.',
    color: palette[1],
  },
  {
    name: 'Camila Duarte',
    initial: 'C',
    date: 'há 3 meses',
    rating: 5,
    quote: 'Profissionais super atenciosos. Um dos melhores acompanhamentos que já tive na área de saúde.',
    color: palette[2],
  },
  {
    name: 'Felipe Andrade',
    initial: 'F',
    date: 'há 4 meses',
    rating: 5,
    quote: 'Clínica estruturada, atendimento sério. Indico para quem já tentou de tudo e não teve resultado.',
    color: palette[3],
  },
];
