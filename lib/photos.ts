const U = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  cohort: {
    src: U('photo-1517048676732-d65bc937f952', 1600),
    alt: 'Three people collaborating over a laptop in a bright studio',
  },
} as const;
