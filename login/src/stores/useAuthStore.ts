import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      login: (username) => set({ username }),
      logout: () => {
        set({ username: null });
        localStorage.removeItem("user");
      },
    }),
    {
      name: "user",
      partialize: (state) => ({ username: state.username }),
    }
  )
);
