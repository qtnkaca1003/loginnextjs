/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig } from "axios"
import {
  API_APP_ERROR_CODE,
  AXIOS_TIMEOUT_CODE,
  AXIOS_TIMEOUT_ERROR_MESSAGE,
} from "constants/api"
import { BaseResponse } from "interfaces/response"
import { setLoading } from "redux/appSlice"
import store from "redux/store"
import baseAxios from "services/baseAxios"
import { logDev, logError } from "utils/logs"

export const validateStatus = (status: number) => {
  return (status >= 200 && status <= 304) || status === 403
}

const errorHandle = async (
  url: string,
  error: AxiosError,
  hasLoading: boolean,
) => {
  logError(error)
  const errorRes = {
    apiPath: url,
    errorCode: error.response?.status || error.message,
  } as BaseResponse
  if (error?.response) {
    const statusCode = error.response.status
    switch (statusCode) {
      case 503:
        return errorRes
      case 400:
        return errorRes
      case 403:
        return errorRes
      case 500:
        return errorRes
      case 401:
        return errorRes
      default:
        return errorRes
    }
  } else {
    const config: AxiosRequestConfig = error?.config
    if (config) {
      switch (error.code) {
        case AXIOS_TIMEOUT_CODE:
          if (error.message === AXIOS_TIMEOUT_ERROR_MESSAGE) {
            // TODO:

            return request(url, config, hasLoading)
          }

          return errorRes
      }
    }
    if (error?.isAxiosError) {
      // Network error
      // TODO:

      return request(url, config, hasLoading)
    }
  }
  // Unexpected error
  logError("Call api unexpected error")

  return errorRes
}

let callNumber = 0
let timeoutLoading: NodeJS.Timeout

export const startLoading = (hasLoading: boolean) => {
  if (hasLoading) {
    clearTimeout(timeoutLoading)
    callNumber++
    store.dispatch(setLoading(true))
  }
}

export const endLoading = (hasLoading: boolean) => {
  if (hasLoading) {
    callNumber--
    if (callNumber > 0) {
      return
    }
    timeoutLoading = setTimeout(() => {
      store.dispatch(setLoading(false))
    }, 250)
  }
}

const request = async <T = any>(
  url: string,
  config: AxiosRequestConfig,
  hasLoading: boolean,
): Promise<T & BaseResponse> => {
  startLoading(hasLoading)
  let result = null
  try {
    logDev("\x1b[32m%s\x1b[0m", "INFO call api:", JSON.stringify(config))
    const response = await baseAxios(config)
    result = response.data
    if (typeof result === "string") {
      result = JSON.parse(result)
    }
    endLoading(hasLoading)
  } catch (error: any) {
    endLoading(hasLoading)
    // CancelToken
    if (axios.isCancel(error)) {
      logDev(
        "\x1b[32m%s\x1b[0m",
        "INFO request canceled",
        JSON.stringify(config),
        error.message,
      )
      result = {
        apiPath: url,
        errorCode: API_APP_ERROR_CODE.CANCEL,
      } as BaseResponse
    } else {
      // Handle Error
      result = await errorHandle(url, error, hasLoading)
    }
  }

  return result
}

const api = {
  get: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
    hasLoading = true,
  ) => {
    return request<T>(url, { method: "get", url, ...config }, hasLoading)
  },
  post: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    hasLoading = true,
  ) => {
    return request<T>(url, { method: "post", url, data, ...config }, hasLoading)
  },
}

export default api
