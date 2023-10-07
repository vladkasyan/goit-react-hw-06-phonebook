import styled from 'styled-components';

export const Input = styled.input`
  /* margin: 0 auto; */
  border-radius: 4px;
  border: 2px solid #000000;
  padding: 7px 10px;
  width: 600px;
  background-color: #201c1c;
  color: white;
`;

export const Label = styled.label`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  gap: 5px;

  margin-bottom: 10px;
  color: white;
`;

export const Box = styled.div`
  margin-top: 10px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: white;
`;
