import styled from 'styled-components';

export const Listbutton = styled.button`
  padding: 2px 8px;
  cursor: pointer;
  width: 100px;
  height: 27px;

  border-radius: 10%;
  border: none;
  background-color: #201c1c;
  color: white;
  transition: border 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #3d327a;
  }

  &:active {
    background-color: #4c237a;
    border: 3px solid #ffffff;
  }
`;

export const Listitem = styled.li`
  width: calc((100% - 40px) / 5);
  height: 70px;
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;

  border: 3px solid #000000;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const List = styled.ul`
  display: flex;
  min-width: 400px;
  padding: 12px 14px;
  flex-wrap: wrap;
  gap: 47px;

  border-radius: 4px;
  border: transparent;
  list-style: none;
`;
