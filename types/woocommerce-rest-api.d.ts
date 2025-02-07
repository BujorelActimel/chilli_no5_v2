// types/woocommerce-rest-api.d.ts
declare module '@woocommerce/woocommerce-rest-api' {
    export interface WooCommerceRestApiOptions {
      url: string;
      consumerKey: string;
      consumerSecret: string;
      version: string;
      queryStringAuth?: boolean;
      axiosConfig?: any;
    }
  
    export interface WooCommerceRestApiResponse<T> {
      data: T;
      status: number;
      headers: {
        [key: string]: string;
      };
    }
  
    export default class WooCommerceRestApi {
      constructor(options: WooCommerceRestApiOptions);
      
      get<T = any>(
        endpoint: string,
        params?: object
      ): Promise<WooCommerceRestApiResponse<T>>;
      
      post<T = any>(
        endpoint: string,
        data: object,
        params?: object
      ): Promise<WooCommerceRestApiResponse<T>>;
      
      put<T = any>(
        endpoint: string,
        data: object,
        params?: object
      ): Promise<WooCommerceRestApiResponse<T>>;
      
      delete<T = any>(
        endpoint: string,
        params?: object
      ): Promise<WooCommerceRestApiResponse<T>>;
      
      options<T = any>(
        endpoint: string,
        params?: object
      ): Promise<WooCommerceRestApiResponse<T>>;
    }
  }