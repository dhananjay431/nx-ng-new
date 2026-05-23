export class StorageHelper {
  static get<T = string>(key: string): T | null {
    const value = localStorage.getItem(key);
    if (value === null) return null;
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  }

  static set(key: string, value: unknown): void {
    const serialized =
      typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, serialized);
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
