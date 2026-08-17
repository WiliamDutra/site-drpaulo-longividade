export interface Specialty {
  title: string;
  description: string;
  icon: string;
}

export const specialties: Specialty[] = [
  {
    title: 'Avaliação Metabólica',
    description: 'Diagnóstico metabólico completo para entender a raiz do problema antes de qualquer plano.',
    icon: 'lucide:stethoscope',
  },
  {
    title: 'Emagrecimento Saudável',
    description: 'Perda de peso sustentável, sem dietas restritivas ou promessas milagrosas.',
    icon: 'lucide:scale',
  },
  {
    title: 'Jejum Intermitente',
    description: 'Protocolo individualizado, com acompanhamento clínico — não um modismo de internet.',
    icon: 'lucide:clock-3',
  },
  {
    title: 'Sarcopenia',
    description: 'Preservação de massa muscular — o fator mais negligenciado no emagrecimento após os 40.',
    icon: 'lucide:dumbbell',
  },
  {
    title: 'Longevidade',
    description: 'Plano de saúde de longo prazo, não apenas um número na balança.',
    icon: 'lucide:infinity',
  },
  {
    title: 'Composição Corporal',
    description: 'Avaliação de gordura, massa magra e água corporal para acompanhar a evolução real do tratamento.',
    icon: 'lucide:percent',
  },
];
