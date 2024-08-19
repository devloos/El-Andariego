export interface SmartResponse<T> {
  message: string;
  success: boolean;
  data: T;
}
