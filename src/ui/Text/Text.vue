<template>
  <p :style="styles">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Text extends Vue {
  @Prop({ default: false }) private readonly isAlternative!: boolean;
  @Prop({ default: 'inherit' }) private readonly fontSize!: string;
  @Prop({ default: 'inherit' }) private readonly fontWeight!: string;
  @Prop({ default: 'inherit' }) private readonly lineHeight!: string;

  get styles() {
    return {
      color: this.isAlternative ? '#9d9e9e' : '#2b2b2b',
      'font-size': this.fontSize || 'inherit',
      'font-weight': this.fontWeight || 'inherit',
      'line-height': this.lineHeight || 'inherit',
    };
  }
}
</script>

<style scoped lang="scss">
p {
  margin: 0.5rem 0 0 0;
}
</style>
