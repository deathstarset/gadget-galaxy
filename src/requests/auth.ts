import apiClient from ".";

export async function register(createUserInfo: CreateUser) {
  return apiClient.post("/api/auth/register", createUserInfo);
}
