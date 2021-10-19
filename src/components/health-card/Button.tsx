import styled from 'styled-components';
import mainTheme from '@styles/mainTheme';

export const Button = styled.button`
  background-color: ${mainTheme.palette.primary};
  color: ${mainTheme.palette.button};
  border-radius: ${mainTheme.borderRadius};
  padding: ${mainTheme.paddingTB};
  margin: ${mainTheme.margin};
  border-style: none;
  font-weight: bold;
  flex: 1 100%;
  &:hover {
    background-color: ${mainTheme.secondaryPalette.primary};
    cursor: pointer;
  }
`;
