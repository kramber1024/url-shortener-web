interface Message {
  message: string;
}

interface Error extends Message {
  type: string;
}

export interface SuccessResponse extends Message {
  status: number;
}

export interface ErrorResponse extends SuccessResponse {
  errors: Error[];
}
