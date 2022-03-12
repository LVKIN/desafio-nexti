import styled from "styled-components";
import { rem } from "polished"

export const HeaderWrapper = styled.header`
  width: 100vw;
  display: flex;
  background-color: #36444c;
  padding: ${rem(24)} ${rem(20)};
  justify-content: space-between;
`;

export const HeaderMenuIcon = styled.img`
  display: block;
  width: ${rem(24)};
  height: ${rem(24)};
  cursor: pointer;
`;

export const HeaderLinks = styled.div`
  display: flex;
  column-gap: ${rem(20)};
  position: relative;
  cursor: pointer;
`;

export const HeaderLink = styled.span`
  display: block;
  color: #ffffff;
  font-size: ${rem(18)};
  line-height: ${rem(24)};
`;

export const LogoutLink = styled.div`
  position: absolute;
  right: 0;
  top: ${rem(32)};
  width: ${rem(135)};
  padding: ${rem(12)};
  border: 1px solid #333;
  background-color: #fff;

  &:hover {
    background-color: #ddd;
  }
`;

// export const Container = styled.div``;
