import styled from 'styled-components';
import mainTheme from '@styles/mainTheme';

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 167px;
  padding: 1rem 1rem;
  margin: 1rem 1rem;
  border-style: dashed;
  border-width: 1px;
  border-color: ${mainTheme.palette.secondary};
  border-radius: ${mainTheme.borderRadius};
  &:hover {
    outline: ${mainTheme.palette.secondary} dashed 1px;
  }
`;
