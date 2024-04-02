import type { PackageSummary } from "../../api/types/packageSummary";
import { searchPackages } from "../../api/queries/searchPackages";

// 為讀取完的資料設定一個型別
export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

// 確保讀取完的資料的型別是 Promise<SearchLoaderResult>
export async function searchLoader({ request }: { request: Request }): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  // 有可能沒有輸入搜尋的東西，回報錯誤
  if (!term) {
    throw new Error('Search term must be provided.');
  }

  const results = await searchPackages(term);

  // return 一個物件，之後可以隨時添加其他的東西
  return {
    searchResults: results
  };
}