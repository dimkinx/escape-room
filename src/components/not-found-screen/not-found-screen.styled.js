import styled, { keyframes } from 'styled-components';
import { Container, Link as RouterLink } from 'components/common/common';

const glitchAnimation = keyframes`
  0% { clip: rect(114px, 9999px, 155px, 0); }
  10% { clip: rect(82px, 9999px, 133px, 0); }
  20% { clip: rect(15px, 9999px, 36px, 0); }
  30% { clip: rect(29px, 9999px, 52px, 0); }
  40% { clip: rect(76px, 9999px, 17px, 0); }
  50% { clip: rect(134px, 9999px, 5px, 0); }
  60% { clip: rect(2px, 9999px, 154px, 0); }
  70% { clip: rect(133px, 9999px, 159px, 0); }
  80% { clip: rect(12px, 9999px, 29px, 0); }
  90% { clip: rect(12px, 9999px, 130px, 0); }
  100% { clip: rect(48px, 9999px, 89px, 0); }
`;

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PageTitle = styled.h1`
  position: relative;

  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.megaLarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: -3px;
    text-shadow: 3px 0 ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.nero};
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${glitchAnimation} 2s infinite linear alternate-reverse;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 3px;
    text-shadow: -3px 0 ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.nero};
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${glitchAnimation} 3s infinite linear alternate-reverse;
  }
`;

const PageSubtext = styled.p`
  margin: 0 0 9px 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.upperBase};
  line-height: 144%;

  color: ${({ theme }) => theme.color.tangerine};
`;

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export {
  Main,
  PageTitle,
  PageSubtext,
  Link
};
