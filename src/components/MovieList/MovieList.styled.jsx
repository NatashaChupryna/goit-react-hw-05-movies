import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0;
  padding-left: 25px;
  margin: 0;
`;
export const ListItem = styled.li`
  flex-basis: calc((100% - 100px) / 4);
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  transform: scale(1);
  transition: all 200ms;
  &:hover {
    transform: scale(1.05);
  }
`;
