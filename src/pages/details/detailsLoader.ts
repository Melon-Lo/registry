// react-router-dom 為 params 提供的預設型別，直接拿來用就好
import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import type { PackageDetails } from "../../api/types/packageDetails";

// 為了避免混亂與冗長，還是會把型別額外寫出來
interface LoaderArgs {
  params: Params;
}

// 為讀取完的資料設定一個型別
export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResult> {
  const { name } = params;

  if (!name) {
    throw new Error('Name must be provided.');
  }

  const details = await getPackage(name);

  // return 一個物件，因為如果要 return 其他東西時，直接加在物件裡就好，會方便很多
  return {
    details,
  };
}