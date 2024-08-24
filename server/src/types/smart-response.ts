export interface SmartResponse<T> {
  message: string;
  success: boolean;
  statusCode: number;
  data: T;
}
