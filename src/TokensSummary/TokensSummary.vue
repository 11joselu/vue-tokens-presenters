<template>
  <EmptyTokens v-if="!tokens.length">No tokens found</EmptyTokens>
  <div v-else>
    <div v-for="([tokenName, tokenList], index) in groupedTokens" :key="index">
      <Table data-testid="tableTokens">
        <thead>
          <tr>
            <td>
              Tokens <small>for {{ tokenName }}</small>
            </td>
            <td><small>Aa</small> Platform var.</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tokenItem, index) in tokenList" :key="index">
            <td v-if="existComponentType(tokenItem)">
              <component :is="tokenItem.token" :token="tokenItem" />
            </td>
            <td data-testid="declaration">{{ tokenItem.declaration }}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Token } from '@/presenters/TokenDeclaration';
import { groupByTokenName } from './groupByTokenName';
import EmptyTokens from './EmptyTokens.vue';
import Table from '@/ui/Table/Table.vue';
import * as presenters from '@/presenters/';

@Component({
  components: {
    EmptyTokens,
    Table,
    ...presenters,
  },
})
export default class TokensSummary extends Vue {
  @Prop({ required: true }) private readonly tokens!: Token[];

  mounted(): undefined | never {
    if (!Array.isArray(this.tokens)) {
      throw new Error(`Tokens should be array, received ${typeof this.tokens}`);
    }
  }

  get groupedTokens(): Record<string, Token[]> {
    const group = groupByTokenName(this.tokens);

    return Object.entries(group);
  }

  existComponentType({ token = 'unknown' }: Token): boolean | never {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Component = presenters[token];

    if (!Component) {
      throw new Error(`Presenter '${token}' does not exist`);
    }

    return true;
  }
}
</script>
