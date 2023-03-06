<script>
const MIN_CHARS = 4;
const DELAY = 800;

export default {
  data: ()=> ({
    searchText: 123,
  }),
  created() {
    this.timeout = null;
  },
  methods: {
    handleInput() {
      //clearTimeout(this.timeout);
      //if (this.searchText.length >= MIN_CHARS) {
        //this.timeout = setTimeout(()=> {
        setTimeout(()=> {
          this.$emit('fooo', this.searchText);
        }, DELAY);
      //}
    },
  },
};
</script>


<template>
  <button
    @click="handleInput"
  />
</template>