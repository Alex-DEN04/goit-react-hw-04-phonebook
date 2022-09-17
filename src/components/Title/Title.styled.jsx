import styled from '@emotion/styled';

export const TitleStyled = styled.h2`
  display: inline-block;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lm};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[0]}px;
`;
