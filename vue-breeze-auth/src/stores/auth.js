import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem("authUser")) || null,
    isLoading: false,
    isButtonLoading: false,
    formErrors: {},
  }),
  getters: {
    user: (state) => state.authUser,
    isAuthenticated: (state) => !!state.authUser,
  },
  actions: {
    async getToken() {
      try {
        await axios.get("/sanctum/csrf-cookie");
      } catch (error) {
        console.error("Error getting CSRF token:", error);
      }
    },

    async getUser() {
      if (this.authUser) return;
      this.isLoading = true;
      try {
        await this.getToken();
        const response = await axios.get("/api/user");
        this.authUser = response.data;
        localStorage.setItem("authUser", JSON.stringify(this.authUser));
      } catch (error) {
        console.error("Error fetching user data:", error);
        this.authUser = null;
        localStorage.removeItem("authUser");
      } finally {
        this.isLoading = false;
      }
    },

    async handleLogin(data) {
      this.isButtonLoading = true;
      try {
        await this.getToken();
        const response = await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
        await this.getUser();
        this.router.push("/dashboard");
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.formErrors = error.response.data.errors;
        }
      } finally {
        this.isButtonLoading = false;
      }
    },

    async handleLogout() {
      this.isButtonLoading = true;
      try {
        await axios.post("/logout");
        this.authUser = null;
        localStorage.removeItem("authUser");
        this.router.push("/");
      } catch (error) {
        console.error("Error during logout:", error);
      } finally {
        this.isButtonLoading = false;
      }
    },
  },
});
