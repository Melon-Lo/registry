import type { PackageDetails } from "../types/packageDetails";

// 固定的內容，總是顯示這四個內容
const FEATURED_PACKAGES = [
  'react',
  'typescript',
  'esbuild',
  'vite'
];

export async function getFeaturedPackages() {
  // 用 map 打出四次 api
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  });
  /* Promise.all 是 JavaScript 中的一個方法，
  用於將多個 Promise 對象組合成一個單一的 Promise 對象。
  這個方法接受一個 Promise 對象的數組作為參數，然後返回一個新的 Promise 對象。 */
  const data = await Promise.all(promises);

  // 回傳的是物件陣列（會有四個物件）
  return data as PackageDetails[];
}