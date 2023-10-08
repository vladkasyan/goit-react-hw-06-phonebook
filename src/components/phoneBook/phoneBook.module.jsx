// import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 14px;
  max-width: 600px;

  margin-left: auto;
  margin-right: auto;
  border: 2px solid #000000;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgba(17, 14, 83, 1) 0%,
    rgba(97, 97, 150, 1) 36%,
    rgba(98, 134, 142, 1) 92%
  );
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  border: transparent;
`;

export const Button = styled.button`
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  margin-top: 15px;

  border: 3px solid transperent;
  background-color: #201c1c;
  color: white;
  opacity: 1;
  transition: border 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:active {
    background-color: #4c237a;
    border: 3px solid #ffffff;
  }

  &:hover {
    background-color: #3d327a;
  }
`;

export const Title = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: white;
`;

export const Label = styled.label`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 5px;

  margin-bottom: 10px;
  color: white;
`;

export const Input = styled.input`
  padding: 10px 12px;
  max-width: 300px;
  background-color: #201c1c;
  color: white;
`;
