<template>
  <div class="font-[sans-serif] bg-white">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 items-center">
      <form
        class="lg:col-span-3 md:col-span-2 max-w-lg w-full p-6 mx-auto"
        @submit.prevent="authStore.handleLogin(form)"
      >
        <div class="mb-12">
          <h3 class="text-gray-800 text-4xl font-extrabold">Sign In</h3>
          <p class="text-gray-800 text-sm mt-6 leading-relaxed">
            Welcome back! Please log in to access your account and explore a
            world of possibilities. Your journey begins here.
          </p>
        </div>

        <div class="relative flex items-center">
          <label
            class="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold"
            >Email</label
          >
          <input
            type="email"
            placeholder="Enter email"
            v-model="form.email"
            class="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded-md outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            class="w-[18px] h-[18px] absolute right-4"
            viewBox="0 0 682.667 682.667"
          >
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
              </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path
                fill="none"
                stroke-miterlimit="10"
                stroke-width="40"
                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                data-original="#000000"
              ></path>
              <path
                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </div>
        <p
          v-if="authStore.formErrors.email"
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
          <span>{{ authStore.formErrors.email[0] }}</span>
        </p>

        <div class="relative flex items-center mt-8">
          <label
            class="text-gray-800 text-[13px] bg-white absolute px-2 top-[-9px] left-[18px] font-semibold"
            >Password</label
          >
          <input
            type="Password"
            placeholder="Enter password"
            v-model="form.password"
            class="px-4 py-3.5 bg-white w-full text-sm border-2 border-gray-200 focus:border-blue-600 rounded-md outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
        <p
          v-if="authStore.formErrors.password"
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
          <span>{{ authStore.formErrors.password[0] }}</span>
        </p>

        <div class="flex flex-wrap items-center justify-between gap-4 mt-4">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
            />
            <label for="remember-me" class="ml-3 block text-sm text-gray-800">
              Remember me
            </label>
          </div>
          <div>
            <a
              href="jajvascript:void(0);"
              class="text-blue-600 font-semibold text-sm hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <div class="mt-12">
          <button
            type="submit"
            class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            :disabled="authStore.isButtonLoading"
          >
            <span v-if="!authStore.isButtonLoading">Sign in</span>
            <span v-else>
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-light-200 animate-spin dark:text-light-500"
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
                  fill="#1C64F2"
                />
              </svg>
              Please wait...
            </span>
          </button>
        </div>

        <!-- <p class="text-sm text-gray-800 mt-8 text-center">
          Don't have an account
          <router-link
            :to="{ name: 'Register' }"
            class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
            >Register here</router-link
          >
        </p> -->
      </form>

      <div
        class="flex flex-col justify-center space-y-16 md:h-screen max-md:mt-16 min-h-full bg-gradient-to-r from-blue-500 to-blue-700 lg:px-8 px-4 py-4"
      >
        <div>
          <h4 class="text-white text-lg font-semibold">
            Secure Authentication
          </h4>
          <p class="text-[13px] text-white mt-2">
            Log in with your registered email and password securely.
          </p>
        </div>
        <div>
          <h4 class="text-white text-lg font-semibold">Remember Me</h4>
          <p class="text-[13px] text-white mt-2">
            Enable the "Remember Me" option for a seamless login experience in
            future sessions.
          </p>
        </div>
        <div>
          <h4 class="text-white text-lg font-semibold">Forgot Password?</h4>
          <p class="text-[13px] text-white mt-2">
            Easily recover your account by clicking on the "Forgot Password?"
            link.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.js";

const authStore = useAuthStore();

const form = ref({
  email: "",
  password: "",
});
</script>
