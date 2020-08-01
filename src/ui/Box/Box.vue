<template>
  <div class="box" data-testid="box" :style="styles"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Box extends Vue {
  @Prop({ default: '1px solid #91556c' }) private readonly border!: string;
  @Prop({ default: '0' }) private readonly borderRadius!: string;
  @Prop({ default: '5rem' }) private readonly width!: string;
  @Prop({ default: '5rem' }) private readonly height!: string;
  @Prop({ default: '0' }) private readonly padding!: string;
  @Prop({ default: '#ea4c89' }) private readonly backgroundColor!: string;
  @Prop({ default: '1' }) private readonly opacity!: string;
  @Prop({ default: 'none' }) private readonly boxShadow!: string;

  get styles() {
    return {
      border: this.border,
      'border-radius': this.borderRadius,
      width: this.width,
      height: this.height,
      padding: this.padding,
      'background-color': this.backgroundColor,
      opacity: this.opacity,
      'box-shadow': this.boxShadow,
      'box-sizing': 'border-box',
    };
  }
}
</script>
