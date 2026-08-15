export interface Specialty {
  title: string;
  description: string;
  icon: string;
}

export const specialties: Specialty[] = [
  {
    title: 'Nutrologia',
    description: 'Diagnóstico metabólico completo para entender a raiz do problema antes de qualquer plano.',
    icon: 'lucide:stethoscope',
  },
  {
    title: 'Jejum Intermitente',
    description: 'Protocolo individualizado, com acompanhamento clínico — não um modismo de internet.',
    icon: 'lucide:clock-3',
  },
  {
    title: 'Balão Gástrico',
    description: 'Alternativa não cirúrgica para acelerar resultados em casos que precisam de mais suporte.',
    icon: 'lucide:balloon',
  },
  {
    title: 'Endoscopia',
    description: 'Avaliação direta do trato digestivo, feita na própria estrutura do instituto.',
    icon: 'lucide:scan',
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
];
