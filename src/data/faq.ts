export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é uma avaliação metabólica completa: histórico de saúde, exames e objetivos, para montar um plano de tratamento individual — não um protocolo genérico.',
  },
  {
    question: 'O Instituto Longevitare atende convênio?',
    answer:
      'O atendimento é particular. Isso permite tempo de consulta adequado e acompanhamento próximo, sem as limitações impostas pelos convênios.',
  },
  {
    question: 'Onde fica a clínica?',
    answer: 'O Instituto Longevitare fica em Vitória/ES, em estrutura física própria — não é atendimento apenas online.',
  },
  {
    question: 'Quais exames são feitos na própria clínica?',
    answer:
      'A estrutura do instituto permite realizar avaliações como endoscopia no mesmo local, sem depender de encaminhamentos externos para etapas essenciais do diagnóstico.',
  },
  {
    question: 'Quanto tempo leva para ver resultado?',
    answer:
      'Varia por caso — o método prioriza resultado que se sustenta, não velocidade. Na consulta inicial o Dr. Paulo define uma expectativa realista para o seu quadro.',
  },
  {
    question: 'O balão gástrico é indicado para o meu caso?',
    answer:
      'Só é possível responder isso após avaliação clínica. É uma das ferramentas do tratamento, indicada em casos específicos — não uma solução padrão para todos os pacientes.',
  },
];
