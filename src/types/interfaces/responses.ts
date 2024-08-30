/**
 * Status codes that api can return
 */
type HTTPSuccessStatusCode = 200 | 201;
type HTTPClientErrorStatusCode = 400 | 401 | 404 | 409 | 422;
type HTTPServerErrorStatusCode = 500;

interface BaseResponse {
  readonly message: string;
  readonly status: number;
}

export interface SuccessResponse extends BaseResponse {
  readonly status: HTTPSuccessStatusCode;
}

export interface Error {
  readonly message: string;
  readonly type: string;
}

export interface ErrorResponse extends BaseResponse {
  readonly errors: Error[];
  readonly status: HTTPClientErrorStatusCode | HTTPServerErrorStatusCode;
}

export type ApiResponse = ErrorResponse | SuccessResponse;
