/* eslint-disable no-unused-vars */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_HOST: string;
    }
  }
}
