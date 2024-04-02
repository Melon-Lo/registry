import type { PackageDetails } from "../types/packageDetails";

export async function getPackage(name: string): Promise<PackageDetails> {
  const res = await fetch(`https://registry.npmjs.org/${name}`);
  const data = await res.json();

  // 確保返回正確的數據結構
  return data as PackageDetails;
}