import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useBrandStore = defineStore("brand", {
  state: () => ({
    isLoading: false,
    isButtonLoading: false,
    closeModal: false,
    formErrors: {},
    allBrand: [],
    currentPage: 1,
    totalPages: 1,
  }),
  actions: {
    async fetchAllBrand(page = 1) {
      this.isLoading = true;
      try {
        const response = await axios.get(`/api/brands?page=${page}`);
        this.allBrand = response.data.data; // Assuming brand are under 'data' key
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async goToPage(page) {
      try {
        if (page > 0 && page <= this.totalPages) {
          await this.fetchAllBrand(page);
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    },
    async handleSearch(searchQuery) {
      this.isLoading = true;
      try {
        const response = await axios.get(`/api/brands?search=${searchQuery}`);
        this.allBrand = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error("Error fetching Brands:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleSearchStatus(searchQuery) {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `/api/brands?searchStatus=${searchQuery}`
        );
        this.allBrand = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async storeBrand(data) {
      this.isButtonLoading = true;
      try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('file', data.picture);

        const response = await axios.post('/api/brands', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.closeModal = true;
        toast.success(response.data.message, {
          theme: 'dark',
          position: 'bottom-right',
          duration: 3000
        });
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.formErrors = error.response.data.errors;
        }
      } finally {
        this.isButtonLoading = false;
      }
    },
    async deleteBrand(brandId) {
      this.isLoading = true;
      try {
        const response = await axios.delete(
          `/api/brands/${brandId}`
        );
        this.allBrand = this.allBrand.filter(
          (brand) => brand.id !== brandId
        );
        toast.success(response.data.message, {
          theme: "dark",
          position:'bottom-right',
          duration: 3000
        });
      } catch (error) {
        console.error("Error deleting brand:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteMultipleBrands(brandIds) {
      this.isLoading = true;
      try {
        const response = await axios.post("/api/multiple-brand-delete", {
          brand_ids: brandIds,
        });

        this.allBrand = this.allBrand.filter(
          (brand) => !brandIds.includes(brand.id)
        );
        toast.success(response.data.message, {
          theme: "dark",
          position:'bottom-right',
          duration: 3000
        });
      } catch (error) {
        console.error("Error deleting brands:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async updateBrand(data) {
      this.isButtonLoading = true;
      try {
        const response = await axios.put(`/api/brands/${data.brandID}`, {
          name: data.brandName,
        });
        toast.success(response.data.message, {
          theme: "dark",
          position:'bottom-right',
          duration: 3000
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
    async updateStatus(brandId, newStatus) {
      this.isLoading = true;
      try {
        const response = await axios.put(
          `/api/brand-status-update/${brandId}`,
          { status: newStatus }
        );
        toast.success(response.data.message, {
          theme: "dark",
          position: "bottom-right",
          duration: 3000,
        });
        const updatedBrand = this.allBrand.map((brand) => {
          if (brand.id === brandId) {
            return { ...brand, status: newStatus };
          }
          return brand;
        });
        this.allBrand = updatedBrand;
      } catch (error) {
        console.error("Error updating brand status:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
