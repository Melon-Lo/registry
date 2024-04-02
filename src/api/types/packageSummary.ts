// 我們只需要這些資料，所以確保從一整包資料裡提取出這些
export interface PackageSummary {
  name: string;
  version: string;
  description: string;
  // 不一定會有 keywords
  keywords?: string[]
}