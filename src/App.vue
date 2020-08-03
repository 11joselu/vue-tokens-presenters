<template>
  <div id="app">
    <Border :token="{ declaration: 'hola', value: '1px solid red' }"></Border>
    <BorderRadius :token="{ declaration: 'hola', value: '4px' }"></BorderRadius>
    <Color :token="{ declaration: 'hola', value: 'tomato' }"></Color>
    <FontSize :token="{ declaration: 'hola', value: '25px' }"></FontSize>
    <FontWeight :token="{ declaration: 'hola', value: 'bold' }"></FontWeight>
    <Width :token="{ declaration: 'hola', value: '30px' }"></Width>
    <Height :token="{ declaration: 'hola', value: '30px' }"></Height>
    <LineHeight :token="{ declaration: 'hola', value: '3.5' }"></LineHeight>
    <Opacity :token="{ declaration: 'hola', value: '0.5' }"></Opacity>
    <Shadow
      :token="{ declaration: 'hola', value: '15px 15px 27px #e1e1e3' }"
    ></Shadow>
    <Spacing :token="{ declaration: 'hola', value: '20px' }"></Spacing>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Border from '@/presenters/Border/Border.vue';
import BorderRadius from '@/presenters/BorderRadius/BorderRadius.vue';
import Color from '@/presenters/Color/Color.vue';
import FontSize from '@/presenters/FontSize/FontSize.vue';
import FontWeight from '@/presenters/FontWeight/FontWeight.vue';
import Height from '@/presenters/Height/Height.vue';
import Width from '@/presenters/Width/Width.vue';
import LineHeight from '@/presenters/LineHeight/LineHeight.vue';
import Opacity from '@/presenters/Opacity/Opacity.vue';
import Shadow from '@/presenters/Shadow/Shadow.vue';
import Spacing from '@/presenters/Spacing/Spacing.vue';

@Component({
  components: {
    Border,
    BorderRadius,
    Color,
    FontSize,
    FontWeight,
    Height,
    Width,
    LineHeight,
    Opacity,
    Shadow,
    Spacing,
  },
})
export default class App extends Vue {}
</script>
