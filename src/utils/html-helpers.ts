export const BLOCK_SIZE_CSS_VAR = 'block-size';

export const numberToCssBlock = (blocks: number): string => `calc(var(--${BLOCK_SIZE_CSS_VAR}) * ${blocks})`;
