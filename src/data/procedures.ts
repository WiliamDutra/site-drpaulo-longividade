export interface Procedure {
  title: string;
  description: string;
}

export const procedures: Procedure[] = [
  {
    title: 'Avaliação Metabólica Completa',
    description: 'Exames laboratoriais e composição corporal para diagnóstico preciso do quadro metabólico.',
  },
  {
    title: 'Balão Gástrico Endoscópico',
    description: 'Inserção não cirúrgica para acelerar resultados em casos que precisam de mais suporte.',
  },
  {
    title: 'Protocolo de Jejum Intermitente Supervisionado',
    description: 'Planejamento individualizado, com acompanhamento médico contínuo — não um modismo de internet.',
  },
  {
    title: 'Endoscopia Digestiva',
    description: 'Avaliação direta do trato digestivo, realizada na própria estrutura do instituto.',
  },
  {
    title: 'Acompanhamento Nutrológico Contínuo',
    description: 'Ajustes de plano conforme a resposta metabólica do paciente ao longo do tratamento.',
  },
];
