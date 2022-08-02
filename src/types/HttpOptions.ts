type HttpOptions = {
  raw: string;
  timeout: number | null;
  headers: ReadonlyArray<Record<string, string>> | null
}
export default HttpOptions;
