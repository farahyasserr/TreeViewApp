export interface Item {
  id: number;
  title: string;
  elements?: Item[];
}

export interface ProductData {
  categories: Item[];
}
