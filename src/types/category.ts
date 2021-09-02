export type CategoryBase = {
  categoryId: string;
  description: string;
  name: string;
};

export type Category = CategoryBase & {
  id: number;
};
