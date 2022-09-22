<template>
  <Header />
  <ScrollToTop />
  <div class="flex justify-center my-12">
    <Input @search="searchWord" />
  </div>
  <div v-if="error">
    <ErrorMessage :error="error" />
  </div>
  <div
    v-else-if="word.length"
    class="bg-slate-100 rounded-lg shadow-xl md:mx-20 lg:mx-40 xl:mx-60   p-5"
  >
    <Results :word="word" />
    <PartOfSpeech :word="word" />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import Results from "./components/Results.vue";
import Api from "./service/Api";
import PartOfSpeech from "./components/PartOfSpeech.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
export default {
  components: {
    Header,
    Input,
    Results,
    PartOfSpeech,
    ScrollToTop,
    ErrorMessage,
  },
  data() {
    return {
      word: [],
      error: null,
    };
  },
  methods: {
    async searchWord(wordFromInput) {
      try {
        const res = await Api().get(wordFromInput);
        this.word = res.data;
        this.error = null;
      } catch (err) {
        this.error = "The word can not be found in dictionary";
      }
    },
  },
};
</script>

<style></style>
