import type { PackageSummary } from "../types/packageSummary";

// 翻官方文件，知道整包資料長怎樣，提取出自己要的部分，並給予型別
// 定義我們要的資料結構長相
interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    }
  }[]
}

// 確保型別是我們想要的
export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );
  // data 會是我們要的結構
  const data: SearchResponse = await res.json();

  // mapping the response，讓資料更好取用
  // 解構 package，因為只有 package 裡面的東西是我們需要的
  return data.objects.map(({ package: { name, description, version, keywords} }) => {
    return {
      name,
      description,
      version,
      keywords
    };
  });
}