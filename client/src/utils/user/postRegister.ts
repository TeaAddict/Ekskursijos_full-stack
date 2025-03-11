import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL || "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  // withCredentials: true,
});

interface RegisterResponse {
  token: string;
  userId?: string;
}

interface ErrorResponse {
  [key: string]: string | undefined;
  timestamp?: string;
  status?: string;
  error?: string;
  message?: string;
  path?: string;
}

/**
 * Posts register credentials to the backend and returns the response data.
 * @param data - The register credentials (email, username and password)
 * @returns The register response data (e.g., token)
 * @throws Error if the request fails
 */
const postRegister = async (data: {
  email: string;
  username: string;
  password: string;
}): Promise<RegisterResponse> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await apiClient.post(
      "/api/register",
      data
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      throw axiosError.response?.data;
    }

    const otherError = error as Error;
    throw { error: otherError.message };
  }
};

export default postRegister;
