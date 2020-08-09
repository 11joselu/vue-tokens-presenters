import { Token } from '../presenters/TokenDeclaration';

type TokensGroup = Record<string, Token[]>;

export function groupByTokenName(tokens: Token[]): TokensGroup {
  const group: TokensGroup = {};

  return tokens.reduce((grouped, tokenItem) => {
    if (!tokenItem.token) {
      return grouped;
    }

    const currentGroupedTokens = grouped[tokenItem.token] || [];
    grouped[tokenItem.token] = [...currentGroupedTokens, tokenItem];

    return grouped;
  }, group);
}
