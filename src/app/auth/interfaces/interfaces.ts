export interface AuthResponse {
    token:   string;
    expiration: string;
}

export interface LoginUsuario {
    usuario:    string;
    password: string;
}