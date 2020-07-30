<template>
  <div class="card" data-testid="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<style scoped lang="scss">
.card {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  > *:first-child {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600) {
    flex-direction: column;
    > *:first-child {
      margin-bottom: 0;
    }
  }
}
</style>
