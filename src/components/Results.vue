<template>
    <div class="p-4 bg-white mb-3 rounded-lg">
      <div class="text-lg flex justify-between items-center md:flex-row flex-col space-y-4 md:space-y-0">
        <div class="flex space-x-2  justify-start items-start">
          <p class="font-medium text-gray-900">Word:</p>
          <p>{{ word[0].word }}</p>
        </div>
        <div class="flex space-x-2">
          <p class="font-medium text-gray-900">Phonetics:</p>
          <p v-if="word[0].phonetic">{{ word[0].phonetic }}</p>
          <p v-else class="text-rose-500">No phonetic for this word</p>
        </div>
        <div>
          <audio controls class="w-56">
            <source :src="word[0].phonetics[0].audio" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Results",
    props: ["word"],
  };
  </script>
  
  <style></style>
  