<script>
const MIN_CHARS = 4;
const DELAY = 800;

export default {
  data: ()=> ({
    searchText: '',
  }),
  created() {
    this.timeout = null;
  },
  methods: {
    handleInput() {
      clearTimeout(this.timeout);
      if (this.searchText.length >= MIN_CHARS) {
        this.timeout = setTimeout(()=> {
          this.$emit('search', this.searchText);
        }, DELAY);
      }
    },
  },
};
</script>


<template>
  <input
    v-model="searchText"
    class="corporates-csv-download-input cl-input-text"
    type="text"
    autocorrect="off"
    placeholder="A placeholder"
    @input="handleInput"
  >
</template>