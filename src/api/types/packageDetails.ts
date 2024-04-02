export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  author: {
    email: string;
    name: string;
  };
  // 可能有很多個，所以是物件陣列
  maintainers: {
    email: string;
    name: string;
  }[];
  license: string;
}