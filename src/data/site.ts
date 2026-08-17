export const doctor = {
  name: 'Dr. Paulo Mansur',
  crm: 'CRM/ES 6173',
  yearsOfPractice: '25+',
  patientsServed: '35 mil+',
  role: 'Fundador do Instituto Longevitare',
  cofounder: 'Lelian Lacerda',
  specialtiesLine:
    'Saúde metabólica, emagrecimento saudável, jejum intermitente, sarcopenia e longevidade.',
};

export const clinic = {
  name: 'Instituto Longevitare',
  city: 'Vitória',
  state: 'ES',
  address: 'R. Abiail do Amaral Carneiro, 85 — Sala 15/16, Enseada do Suá',
  addressFull: 'R. Abiail do Amaral Carneiro, 85 — Sala 15/16, Enseada do Suá, Vitória/ES, CEP 29050-535',
  // TODO_HOURS: horário de atendimento não consta no brief — preencher antes de publicar.
  hours: 'Seg. a Qui. 7h30–18h00 · Sex. 7h30–16h00',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.2!2d-40.2973!3d-20.3106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzM4LjIiUyA0MMKwMTcnNTAuMyJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr&q=R.+Abiail+do+Amaral+Carneiro,+85,+Enseada+do+Suá,+Vitória,+ES',
};

export const social = {
  doctorInstagram: { handle: '@drpaulomansur_', url: 'https://www.instagram.com/drpaulomansur_/' },
  instituteInstagram: { handle: '@instituto_longevitare_', url: 'https://www.instagram.com/instituto_longevitare_/' },
};

export const contact = {
  // TODO_EMAIL: e-mail institucional não consta no brief — preencher antes de publicar.
  email: 'TODO_EMAIL',
};

export const whatsapp = {
  number: '5527988782956',
  defaultMessage: 'Olá! Gostaria de agendar minha avaliação com o Dr. Paulo Mansur.',
};

export function buildWhatsAppLink(message: string = whatsapp.defaultMessage): string {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const heroBadges = [
  'Atendimento em Vitória/ES',
  '25+ anos de experiência clínica',
  'CRM/ES 6173',
];

export const seo = {
  title: 'Instituto Longevitare — Dr. Paulo Mansur | Saúde metabólica e longevidade em Vitória/ES',
  description:
    'Emagrecimento saudável, jejum intermitente, sarcopenia e longevidade com método clínico. Mais de 25 anos de medicina e 35 mil pacientes tratados.',
};
