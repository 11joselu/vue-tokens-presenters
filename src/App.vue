<template>
  <div id="app">
    <Border :token="{ declaration: 'hola', value: '1px solid red' }"></Border>
    <BorderRadius :token="{ declaration: 'hola', value: '4px' }"></BorderRadius>
    <Color :token="{ declaration: 'hola', value: 'tomato' }"></Color>
    <FontSize :token="{ declaration: 'hola', value: '25px' }"></FontSize>
    <FontWeight :token="{ declaration: 'hola', value: 'bold' }"></FontWeight>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Border from '@/presenters/Border/Border.vue';
import BorderRadius from '@/presenters/BorderRadius/BorderRadius.vue';
import Color from '@/presenters/Color/Color.vue';
import FontSize from '@/presenters/FontSize/FontSize.vue';
import FontWeight from '@/presenters/FontWeight/FontWeight.vue';

@Component({
  components: {
    Border,
    BorderRadius,
    Color,
    FontSize,
    FontWeight,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
