import apiClient from ".";

export async function addProduct(createProductInfo: FormData) {
  return apiClient.post("/api/products", createProductInfo);
}
