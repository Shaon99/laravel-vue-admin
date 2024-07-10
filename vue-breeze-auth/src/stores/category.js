import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    isLoading: false,
    isButtonLoading: false,
    closeModal: false,
    formErrors: {},
    allCategories: [],
    editSuccess: false,
    addSuccess:false,
  }),
  actions: {
    async fetchAllCategory() {
      this.isLoading = true;
      try {
        const response = await axios.get("/api/categories");
        this.allCategories = response.data;
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
        this.addSuccess=true;
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
    async deleteCategory(categoryId) {
      this.isLoading = true;
      try {
        await axios.delete(`/api/categories-delete/${categoryId}`);
        this.allCategories = this.allCategories.filter(category => category.id !== categoryId);
      } catch (error) {
        console.error('Error deleting category:', error);
      }finally {
        this.isLoading = false;
      }
    },
    async handleEdit(data) {
      this.isButtonLoading = true;
      try {
        const response = await axios.put(`/api/categories/${data.categoryID}`, {
          name: data.categoryName
      });     
      this.editSuccess=true;
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
  },
});
