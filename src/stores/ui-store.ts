import { create } from 'zustand';

// =============================================================
// Toast Types
// =============================================================

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

// =============================================================
// UI Store
// =============================================================

interface UIState {
  // Sidebar
  sidebarCollapsed: boolean;
  sidebarMobileOpen: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;

  // Theme
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;

  // Toasts
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;

  // Command Palette / Search
  searchOpen: boolean;
  toggleSearch: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Sidebar
  sidebarCollapsed: false,
  sidebarMobileOpen: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed) =>
    set({ sidebarCollapsed: collapsed }),
  toggleMobileSidebar: () =>
    set((state) => ({ sidebarMobileOpen: !state.sidebarMobileOpen })),
  closeMobileSidebar: () =>
    set({ sidebarMobileOpen: false }),

  // Theme
  theme: 'dark',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('vaultiq-theme', newTheme);
      }
      return { theme: newTheme };
    }),
  setTheme: (theme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('vaultiq-theme', theme);
    }
    set({ theme });
  },

  // Toasts
  toasts: [],
  addToast: (toast) =>
    set((state) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const newToast: Toast = { ...toast, id };

      // Auto-remove after duration (default 5s)
      const duration = toast.duration ?? 5000;
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          set((s) => ({
            toasts: s.toasts.filter((t) => t.id !== id),
          }));
        }, duration);
      }

      return { toasts: [...state.toasts, newToast] };
    }),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),

  // Search
  searchOpen: false,
  toggleSearch: () =>
    set((state) => ({ searchOpen: !state.searchOpen })),
}));
