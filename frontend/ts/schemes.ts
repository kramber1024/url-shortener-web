export interface Error {
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

export interface User {
    id: string;
    first_name: string;
    last_name: string | null;
    email: string;
}

export interface Tag {
    name: string;
}

export interface Url {
    id: string;
    address: string;
    location: string;
    total_clicks: number;
    tags: Tag[];
}
