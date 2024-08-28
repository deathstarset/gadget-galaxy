import apiClient from ".";

export async function addCategory(createCategoryInfo: CreateCategory) {
  return apiClient.post("/api/categories", createCategoryInfo);
}
