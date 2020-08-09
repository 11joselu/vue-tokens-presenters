import TokensSummary from './TokensSummary.vue';
import { readTokensFromFile } from '../utils/tokenReader';

export default {
  title: 'TokensSummary',
  component: TokensSummary,
};

export const Default = (args: any, { argTypes }: any) => ({
  components: { TokensSummary },
  template: '<TokensSummary :tokens="tokens"></TokensSummary>',
  props: Object.keys(argTypes),
});

Default.args = {
  tokens: readTokensFromFile('TokensSummary'),
};
