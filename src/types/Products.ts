export interface NestedItem {
  id: number;
  title: string;
  elements?: NestedItem[];
}

export interface ProductData {
  categories: NestedItem[];
}
