export const painSection = {
  titleMain: 'Emagrecer parece um ciclo sem fim...',
  titleAccent: 'mas não deveria.',
  calloutQuote: 'O excesso de peso rouba pequenos momentos e grandes planos.',
  calloutAccent: 'Existe um caminho de volta.',
};

export interface PainBullet {
  prefix: string;
  bold: string;
  suffix: string;
}

export const painBullets: PainBullet[] = [
  {
    prefix: 'Já tentou dieta restritiva, ',
    bold: 'perdeu peso rápido e recuperou tudo',
    suffix: ' (e mais um pouco) em poucos meses.',
  },
  {
    prefix: 'Sente que, depois dos 40, ',
    bold: 'o corpo não responde mais como antes',
    suffix: ' — e ninguém explica por quê.',
  },
  {
    prefix: 'Já ouviu conselhos contraditórios sobre jejum e carboidrato e ',
    bold: 'não sabe mais em quem confiar',
    suffix: '.',
  },
  {
    prefix: 'Fez exames de rotina, o resultado veio "normal", mas ',
    bold: 'o cansaço e o inchaço continuam',
    suffix: '.',
  },
  {
    prefix: 'Procurou solução rápida — chá, aplicativo, fórmula manipulada — e ',
    bold: 'nunca teve acompanhamento médico de perto',
    suffix: '.',
  },
];
