<template>
    <div
      v-for="mean in word[0].meanings"
      :key="mean.id"
      class="p-4 bg-white mb-3 space-y-3 rounded-lg"
    >
      <Accordion :title="mean.partOfSpeech">
        <div
          v-for="define in mean.definitions"
          :key="define.id"
          class="overflow-x-hidden relative space-y-3 p-3"
        >
          <div class="bg-white border-b hover:bg-gray-200 flex md:flex-row flex-col">
            <div class="md:py-4 py-0 px-6 font-medium text-gray-900">Definition:</div>
            <div>
              <p class="py-4 px-6">
                {{ define.definition }}
              </p>
            </div>
          </div>
          <div class="bg-gray-50 border-b hover:bg-gray-200 flex md:flex-row flex-col">
            <div class="md:py-4 py-0 px-6 font-medium text-gray-900">Example:</div>
            <div class="py-4 md:px-8 px-6">
              <p v-if="define.example">{{ define.example }}</p>
              <p v-else class="text-rose-500">
                There is no example for this definition
              </p>
            </div>
          </div>
  
          <Divider />
        </div>
      </Accordion>
    </div>
  </template>
  
  <script>
  import Divider from "./Divider.vue";
  import Accordion from "./Accordion.vue";
  export default {
    name: "PartOfSpeech",
    props: ["word"],
    components: { Divider, Accordion },
  };
  </script>
  
  <style></style>
  