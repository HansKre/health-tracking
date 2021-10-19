import styled from 'styled-components';
import mainTheme from '@styles/mainTheme';

export const Input = styled.input`
  flex: 1;
  border-radius: ${mainTheme.borderRadius};
  padding: ${mainTheme.paddingTBLR};
  margin: ${mainTheme.margin};
  border-color: ${mainTheme.secondaryPalette.secondary};
  border-width: 1px;
  border-style: solid;
  &:focus,
  &:active,
  &:hover {
    border-color: ${mainTheme.secondaryPalette.primary};
  }
  &:focus-visible {
    outline: ${mainTheme.secondaryPalette.primary} auto 1px;
  }
`;
