<template>
  <div>
    <div
      :class="`overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center flex items-center ${classModal}`"
    >
      <div :class="`flex w-auto my-auto mx-auto max-w-6xl justify-center items-center`">
        <div
          :class="`flex flex-col justify-center border-0 rounded-md shadow-lg bg-white dark:bg-gray-600 dark:text-gray-100 outline-none focus:outline-none w-full p-1 ${classWidth}`"
        >
          <div
            :class="`border-b border-gray-200 dark:border-gray-500 p-1 text-sm flex justify-between border-solid rounded-t ${classHeader}`"
            v-if="this.$slots.header"
          >
            <slot name="header"></slot>

            <div>
              <div v-on:click="togleShowModal(name)" class="cursor-pointer">
                <i
                  class="ml-4 fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"
                ></i>
              </div>
            </div>
          </div>

          <div
            :class="`'relative flex-auto p-1 mt-2  ${classBody}`"
            v-if="this.$slots.body"
          >
            <slot name="body"></slot>
          </div>

          <div
            :class="`flex p-2 border-t border-solid border-gray-300 rounded-b  ${classFooter}`"
            v-if="this.$slots.footer"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    name: {
      required: true,
    },
    classWidth: {
      required: false,
    },
    classModal: {
      required: false,
    },
    classHeader: {
      required: false,
    },
    classBody: {
      required: false,
    },
    classFooter: {
      required: false,
    },
  },
  methods: {
    togleShowModal() {
      console.log(`Nome ${this.name}`);
    },
  },
};
</script>

<style></style>
