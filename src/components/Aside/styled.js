import styled from "styled-components";
import { rem } from "polished";

export const AsideWrapper = styled.aside`
  display: block;
  height: 100vh;
  border-right: 1px solid #b0b0b0;
  padding: ${rem(30)} ${rem(24)};
`;

export const AsideHeader = styled.header`
  width: ${rem(240)};
  display: flex;
  justify-content: space-between;
`;

export const UserInitials = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: purple;
  text-transform: uppercase;
  width: ${rem(44)};
  height: ${rem(44)};
  color: #fff;
  justify-content: center;
  font-weight: 500;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: ${rem(14)};
    height: ${rem(14)};
    left: ${rem(30)};
    top: ${rem(30)};
    border-radius: 50%;
    border: 1px solid #f6f6f6;
    background-color: #3e8624;
  }
`;


export const OrderSelect = styled.span`
  display: flex;
  color: #fc2d2d;
  text-transform: uppercase;
  font-size: ${rem(14)};
  align-items: center;

  &::after {
    content: '';
    display: block;
    margin-left: ${rem(10)};
    border-left: ${rem(8)} solid transparent;
    border-right: ${rem(8)} solid transparent;
    border-top: ${rem(8)} solid #fc2d2d;
  }
`;

// export const Container = styled.div``;
