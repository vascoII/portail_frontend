import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { ApiResponse } from "./client";

/**
 * Simple util pour normaliser les URLs vers les fichiers JSON
 * Exemple:
 *   /logements/immeuble/123   -> /data/api/logements/immeuble/123.json
 *   /logements/search         -> /data/api/logements/search.json
 */
function buildJsonPath(url: string): string {
  // On s'assure que l'URL commence par un /
  const normalized = url.startsWith("/") ? url : `/${url}`;
  return `/data/api${normalized}.json`;
}

/**
 * Construit une "fake" AxiosResponse<ApiResponse<T>>
 */
function buildAxiosResponse<T>(
  data: ApiResponse<T>,
  config?: AxiosRequestConfig
): AxiosResponse<ApiResponse<T>> {
  return {
    data,
    status: data.status,
    statusText: String(data.status),
    headers: {},
    config: config || {},
    request: undefined,
  };
}

async function mockRequest<T = any>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  _data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<ApiResponse<T>>> {
  const jsonPath = buildJsonPath(url);

  try {
    const res = await fetch(jsonPath, {
      method: "GET",
    });

    if (!res.ok) {
      const errorBody = {
        success: false,
        status: res.status,
        message: `Mock file not found for ${method} ${url} (${jsonPath})`,
      } as ApiResponse<T>;

      return buildAxiosResponse(errorBody, config);
    }

    const payload = (await res.json()) as T;

    const responseBody: ApiResponse<T> = {
      success: true,
      status: 200,
      data: payload,
    };

    return buildAxiosResponse(responseBody, config);
  } catch (e: any) {
    const errorBody: ApiResponse<T> = {
      success: false,
      status: 0,
      message: e?.message || "Unexpected mock error",
    };

    return buildAxiosResponse(errorBody, config);
  }
}

export const mockApi = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) =>
    mockRequest<T>("GET", url, undefined, config),

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    mockRequest<T>("POST", url, data, config),

  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    mockRequest<T>("PUT", url, data, config),

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    mockRequest<T>("PATCH", url, data, config),

  delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
    mockRequest<T>("DELETE", url, undefined, config),
};

export type MockApi = typeof mockApi;


