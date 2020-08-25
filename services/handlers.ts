import { AxiosResponse } from 'axios';

type SuccessReturnType = AxiosResponse<any> | Promise<AxiosResponse<any>>;

export const handleSuccess = (response: AxiosResponse): SuccessReturnType => response;

export const handleError = (error: any) => {
  let errorMessage = 'Unknown error';

  if (error.response) {
    errorMessage = error.response.statusText;
  }

  const handledError = new Error(errorMessage);
  return Promise.reject(handledError);
};
