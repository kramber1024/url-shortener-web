interface Error {
  message: string;
  type: string;
}

export interface SuccessResponse {
  message: string;
  status: number;
}

export interface ErrorResponse extends SuccessResponse {
  errors: Error[];
}
