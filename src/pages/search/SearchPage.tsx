import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom"; // 讀取資料用的
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  // 取得 loader fetch 到的 data
  // 確保格式是 SearchLoaderResult
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem pack={result} key={result.name} />
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">
        {/* renderedResults 有可能是空陣列 */}
        {renderedResults.length > 0 ? renderedResults : 'No results.'}
      </div>
    </div>
  );
}