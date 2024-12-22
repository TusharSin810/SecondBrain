declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_CONNECTION: string;
    JWT_SECRET: string;
  }
}
