<template>
  <table>
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Table extends Vue {}
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0px;
  caption-side: bottom;
  margin: 1.5rem 0;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  thead > tr {
    td {
      border-bottom: 3px solid rgba(229, 229, 229, 0.7);
      font-weight: bold;
      text-transform: uppercase;
      small {
        text-transform: initial;
        color: #bebebe;
        display: inline-block;
        margin-right: 0.4rem;
      }
    }
  }

  td {
    vertical-align: middle;
    padding: 1em 0.5em;
  }

  tbody {
    td {
      padding: 0.5em;
    }
  }
}
</style>
