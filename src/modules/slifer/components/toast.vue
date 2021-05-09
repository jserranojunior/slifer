<template>
  <div>
    <div class="fixed top-0 right-0 mr-4 mt-4">
      <div
        v-for="(notification, key) in notifications"
        :key="key"
        :class="`
          border-${notification.color}-600  border-l-4 shadow-lg  bg-white dark:bg-gray-600 dark:text-gray-100 mx-auto rounded-lg mb-1  mr-2 notification-box`"
      >
        <div class="flex flex-wrap justify-between">
          <div class="text-sm p-3 cursor-pointer">
            <span class="text-left font-bold">{{ notification.title }}</span>
            <div class="toast-body-tail">
              <div class="text-gray-600 dark:text-gray-100 tracking-tight">
                {{ notification.body }}
              </div>
            </div>
          </div>
          <div
            class="flex border-l px-1 cursor-pointer btn-pwa-close"
            @click="removeNotification(key)"
          >
            <div class="text-center my-auto">
              <svg
                class="fill-current hover:text-red-600 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path
                  class="heroicon-ui"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",

  props: {
    notifications: {
      required: false,
    },
  },
  methods: {
    removeNotification() {
      console.log("implementar");
    },
  },
};
</script>
