import styled from 'styled-components';

export const Body = styled.div`
  background: linear-gradient(
    90deg,
    rgba(23, 18, 110, 1) 0%,
    rgba(128, 128, 198, 1) 36%,
    rgba(128, 174, 184, 1) 92%
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
  padding-top: 20px;
  padding-bottom: 220px;
`;

export const Placeholder = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
  margin-top: 150px;
`;
