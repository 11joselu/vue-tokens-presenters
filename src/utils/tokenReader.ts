import { scssParser } from 'design-tokens-parser';
import { Token } from '@/presenters/TokenDeclaration';

// Since require.context only works in compilation process
// we need to read everything related to the presenters folder
const scssReq = require.context(`!!raw-loader!../`, true, /tokens.scss$/);

const files = scssReq.keys();

export const readTokensFromFile = (componentName: string): Token[] => {
  return (
    files
      //  We need to filter all available files by the one that really interests us
      .filter((filename) => filename.includes(`/${componentName}/`))
      .map((filename) => scssReq(filename).default)
      .map(scssParser)
      .flat()
  );
};
