<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center uppercase text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign up here
      </h2>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handelRegister">
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              id="name"
              name="name"
              v-model="from.name"
              type="text"
              placeholder="Enter name"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-4"
            />
            <p
              v-if="formErrors.name"
              class="text-xs text-red-500 flex items-center mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                fill="currentColor"
                class="mr-2"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z"
                  data-original="#000000"
                />
                <path
                  d="M373.451 166.965c-8.071-7.337-20.623-6.762-27.999 1.348L224.491 301.509 166.053 242.1c-7.714-7.813-20.246-7.932-28.039-.238-7.813 7.674-7.932 20.226-.238 28.039l73.151 74.361a19.804 19.804 0 0 0 14.138 5.929c.119 0 .258 0 .377.02a19.842 19.842 0 0 0 14.297-6.504l135.059-148.722c7.358-8.131 6.763-20.663-1.347-28.02z"
                  data-original="#000000"
                />
              </svg>
              <span v-for="(error, index) in formErrors.name" :key="index">{{
                error
              }}</span>
            </p>
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              v-model="from.email"
              type="email"
              autocomplete="email"
              placeholder="Enter email address"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <p
              v-if="formErrors.email"
              class="text-xs text-red-500 flex items-center mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                fill="currentColor"
                class="mr-2"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z"
                  data-original="#000000"
                />
                <path
                  d="M373.451 166.965c-8.071-7.337-20.623-6.762-27.999 1.348L224.491 301.509 166.053 242.1c-7.714-7.813-20.246-7.932-28.039-.238-7.813 7.674-7.932 20.226-.238 28.039l73.151 74.361a19.804 19.804 0 0 0 14.138 5.929c.119 0 .258 0 .377.02a19.842 19.842 0 0 0 14.297-6.504l135.059-148.722c7.358-8.131 6.763-20.663-1.347-28.02z"
                  data-original="#000000"
                />
              </svg>
              <span v-for="(error, index) in formErrors.email" :key="index">{{
                error
              }}</span>
            </p>
          </div>
        </div>

        <div>
          <label
            for="phone"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Phone</label
          >
          <div class="mt-2">
            <input
              id="phone"
              name="phone"
              v-model="from.phone"
              type="text"
              placeholder="Enter phone number"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <p
              v-if="formErrors.phone"
              class="text-xs text-red-500 flex items-center mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                fill="currentColor"
                class="mr-2"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z"
                  data-original="#000000"
                />
                <path
                  d="M373.451 166.965c-8.071-7.337-20.623-6.762-27.999 1.348L224.491 301.509 166.053 242.1c-7.714-7.813-20.246-7.932-28.039-.238-7.813 7.674-7.932 20.226-.238 28.039l73.151 74.361a19.804 19.804 0 0 0 14.138 5.929c.119 0 .258 0 .377.02a19.842 19.842 0 0 0 14.297-6.504l135.059-148.722c7.358-8.131 6.763-20.663-1.347-28.02z"
                  data-original="#000000"
                />
              </svg>
              <span v-for="(error, index) in formErrors.phone" :key="index">{{
                error
              }}</span>
            </p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="from.password"
              autocomplete="current-password"
              placeholder="Enter password"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <p
              v-if="formErrors.password"
              class="text-xs text-red-500 flex items-center mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                fill="currentColor"
                class="mr-2"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z"
                  data-original="#000000"
                />
                <path
                  d="M373.451 166.965c-8.071-7.337-20.623-6.762-27.999 1.348L224.491 301.509 166.053 242.1c-7.714-7.813-20.246-7.932-28.039-.238-7.813 7.674-7.932 20.226-.238 28.039l73.151 74.361a19.804 19.804 0 0 0 14.138 5.929c.119 0 .258 0 .377.02a19.842 19.842 0 0 0 14.297-6.504l135.059-148.722c7.358-8.131 6.763-20.663-1.347-28.02z"
                  data-original="#000000"
                />
              </svg>
              <span
                v-for="(error, index) in formErrors.password"
                :key="index"
                >{{ error }}</span
              >
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            :disabled="isLoading"
            @click="handleRegister"
          >
            <span v-if="!isLoading">Sign up</span>
            <span v-else>
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-purple-200 animate-spin dark:text-purple-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#fff"
                />
              </svg>
              Please wait...
            </span>
          </button>
        </div>
        <p class="text-sm text-gray-800 mt-8 text-center">Already have an account? <router-link :to="{name:'Login'}" class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</router-link></p>
      </form>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const from = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
});
const isLoading = ref(false);
const formErrors = ref({});

const handelRegister = async () => {
  isLoading.value = true;
  formErrors.value = {};

  try {
    const res = await axios.post("/register", {
      name: from.value.name,
      email: from.value.email,
      phone: from.value.phone,
      password: from.value.password,
    });
    router.push("/login");
  } catch (error) {
    console.error("Registration error:", error);
    // Handle specific validation errors from API response
    if (error.response && error.response.data && error.response.data.errors) {
      const apiErrors = error.response.data.errors;
      for (const key in apiErrors) {
        if (Object.hasOwnProperty.call(apiErrors, key)) {
          formErrors.value[key] = apiErrors[key];
        }
      }
    }
  } finally {
    isLoading.value = false; // Set loading to false when the request completes
  }
};
</script>
