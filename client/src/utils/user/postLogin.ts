import axios, { AxiosError, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL || "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  // withCredentials: true,
});

interface LoginResponse {
  token: string;
  userId?: string;
}

interface ErrorResponse {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
}

/**
 * Posts login credentials to the backend and returns the response data.
 * @param data - The login credentials (email and password)
 * @returns The login response data (e.g., token)
 * @throws Error if the request fails
 */
const postLogin = async (data: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await apiClient.post(
      "/api/login",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const message =
        axiosError.response?.data?.message ||
        `Login failed: ${axiosError.response?.data.error || "Unknown error"}`;
      throw new Error(message);
    }
    throw new Error(
      `Unexpected error during login: ${(error as Error).message}`
    );
  }
};

export default postLogin;
