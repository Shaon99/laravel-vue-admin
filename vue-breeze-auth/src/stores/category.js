import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    isLoading: false,
    isButtonLoading: false,
    closeModal: false,
    formErrors: {},
    allCategories: [],
    currentPage: 1,
    totalPages: 1,
  }),
  actions: {
    async fetchAllCategory(page = 1) {
      this.isLoading = true;
      try {
        const response = await axios.get(`/api/categories?page=${page}`);
        this.allCategories = response.data.data; // Assuming categories are under 'data' key
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async goToPage(page) {
      try {
        if (page > 0 && page <= this.totalPages) {
          await this.fetchAllCategory(page);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async handleSearch(searchQuery) {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `/api/categories?search=${searchQuery}`
        );
        this.allCategories = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleSearchStatus(searchQuery) {
      console.log(searchQuery);
      this.isLoading = true;
      try {
        const response = await axios.get(
          `/api/categories?searchStatus=${searchQuery}`
        );
        this.allCategories = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleCategory(data) {
      this.isButtonLoading = true;
      try {
        const response = await axios.post("/api/categories-store", {
          name: data.name,
        });
        this.closeModal = true;
        toast.success(response.data.message, {
          theme: "dark",
          position:'bottom-right',
          duration: 3000
        });
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          this.formErrors = error.response.data.errors;
        }
      } finally {
        this.isButtonLoading = false;
      }
    },
    async deleteCategory(categoryId) {
      this.isLoading = true;
      try {
        const response = await axios.delete(
          `/api/categories-delete/${categoryId}`
        );
        this.allCategories = this.allCategories.filter(
          (category) => category.id !== categoryId
        );
        toast.success(response.data.message, {
          theme: "dark",
          position:'bottom-right',
          duration: 3000
        });
      } catch (error) {
        console.error("Error deleting category:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteMultipleCategory(categoryIds) {
      this.isLoading = true;
      try {
        const response = await axios.post("/api/multiple-category-delete", {
          category_ids: categoryIds,
        });

        this.allCategories = this.allCategories.filter(
          (category) => !categoryIds.includes(category.id)
        );
        toast.success(response.data.message, {
          theme: "dark",
        });
      } catch (error) {
        console.error("Error deleting categories:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleEdit(data) {
      this.isButtonLoading = true;
      try {
        const response = await axios.put(`/api/categories/${data.categoryID}`, {
          name: data.categoryName,
        });
        toast.success(response.data.message, {
          theme: "dark",
        });
        this.closeModal = true;
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          this.formErrors = error.response.data.errors;
        }
      } finally {
        this.isButtonLoading = false;
      }
    },
    async updateStatus(categoryId, newStatus) {
      this.isLoading = true;
      try {
        const response = await axios.put(
          `/api/categories-status-update/${categoryId}`,
          { status: newStatus }
        );
        toast.success(response.data.message, { theme: "dark",
          position:'bottom-right',
          duration: 3000 });
        const updatedCategories = this.allCategories.map((category) => {
          if (category.id === categoryId) {
            return { ...category, status: newStatus };
          }
          return category;
        });
        this.allCategories = updatedCategories;
      } catch (error) {
        console.error("Error updating category status:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
