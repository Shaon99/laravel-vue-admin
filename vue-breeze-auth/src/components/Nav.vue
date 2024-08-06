<template lang="">
  <header class="antialiased">
    <nav
      class="fixed top-0 z-50 w-full bg-gradient-to-r from-purple-500 to-blue-700"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="https://flowbite.com" class="flex ms-2 md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span
                class="self-center uppercase text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                >Vue-Breeze</span
              >
            </a>
          </div>
          <div class="flex items-center relative">
            <div class="relative">
              <button
                @click="toggleDropdown"
                class="relative focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405C18.405 15.405 18 14.659 18 14V11a6 6 0 10-12 0v3c0 .659-.405 1.405-.595 1.595L4 17h5m6 0a3 3 0 01-6 0"
                  />
                </svg>
                <span
                  v-if="unreadCount"
                  class="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full"
                >
                  {{ unreadCount }}
                </span>
              </button>
              <div
                v-if="isOpen"
                class="absolute right-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg z-10"
              >
                <div class="p-2 text-center font-bold border-b">
                  Notifications
                </div>
                <ul>
                  <li
                    v-for="(notification, index) in notifications"
                    :key="index"
                    class="p-2 border-b hover:bg-gray-100"
                  >
                    {{ notification.message }}
                    <small class="block text-gray-500">
                      {{ notification.timestamp.toLocaleTimeString() }}
                    </small>
                  </li>
                </ul>
                <button
                  @click="markAllAsRead"
                  class="w-full p-2 text-center text-blue-500 hover:bg-gray-100"
                >
                  Mark all as read
                </button>
              </div>
            </div>
            <div class="flex items-center ms-10">
              <div>
                <button
                  @mouseenter="openDropdown"
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                v-if="isDropdownVisible"
                class="absolute margin-top z-50 my-4 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                @mouseenter="openDropdown"
                @mouseleave="closeDropdown"
              >
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    {{ authStore.user.name }}
                  </p>
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {{ authStore.user.email }}
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      >Profile</a
                    >
                  </li>
                  <li>
                    <a
                      @click="authStore.handleLogout"
                      v-if="!authStore.isButtonLoading"
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      >Sign out</a
                    >
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
                      Logout...
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const isDropdownVisible = ref(false);

const openDropdown = () => {
  isDropdownVisible.value = true;
};

const closeDropdown = () => {
  isDropdownVisible.value = false;
};

import { useAuthStore } from "../stores/auth.js";
const authStore = useAuthStore();

// Notifications state
const notifications = ref([]);
const isOpen = ref(false);

// Count of unread notifications
const unreadCount = computed(() => notifications.value.length);

// Toggle dropdown visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Add notification
const addNotification = (notification) => {
  notifications.value.unshift(notification);
};

// Mark all notifications as read
const markAllAsRead = () => {
  notifications.value = [];
};

// Real-time event listening from multiple channels
onMounted(() => {
  const channels = [
    { channel: "brand-notifications", event: ".BrandEmailSent", message },
  ];

  channels.forEach(({ channel, event }) => {
    window.Echo.channel(channel).listen(event, (data) => {
      addNotification({
        message: `New notification from ${channel}: ${data.message}`,
        timestamp: new Date(),
      });
    });
  });
});
</script>
