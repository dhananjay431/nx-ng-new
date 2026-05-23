export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  roles: string[];
  permissions: string[];
  avatar?: string;
}

export interface Role {
  name: string;
  permissions: string[];
}

export interface Permission {
  key: string;
  label: string;
}

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  moduleKey: string;
  children?: MenuItem[];
}

export interface ModuleConfig {
  modules: string[];
}

export interface CustomerModules {
  [customerId: string]: ModuleConfig;
}

export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: number;
}

export interface Pagination {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: Pagination;
}

export interface ThemeType {
  theme: 'light' | 'dark';
}

export interface SidebarState {
  isOpen: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
  expiresAt: number;
}

export interface AppConfig {
  customerId: string;
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
}
