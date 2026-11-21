import { create } from 'zustand';

type AuthState = {
  logged: boolean;
  setLogged: (logged: boolean) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  logged: false,
  setLogged: (logged) => set({ logged }),
}));
