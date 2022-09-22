<template>
    <div class="flex items-center space-x-2">
      <input
        type="text"
        v-model="word"
        placeholder="Type Here ..."
        @keypress.enter="search"
        class="p-5 border md:w-72 w-56 border-x-0 border-t-0 border-gray-600 focus:ring-blue-500 focus:border-blue-500"
      />
  
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="cursor-pointer text-xl"
        @click="search"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "Input",
    data() {
      return {
        word: "",
      };
    },
    methods: {
      search() {
        this.$emit("search", this.word);
      },
    },
  };
  </script>
  
  <style></style>
  