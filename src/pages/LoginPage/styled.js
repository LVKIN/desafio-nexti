import styled from "styled-components";
import { rem } from "polished";

export const LoginPageWrapper = styled.main`
  background-color: #36444c;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
`;

export const LoginPageFormContent = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: ${rem(26)} ${rem(24)};
  background-color: #eee;
  transform: translate(-50%, -50%);
  border-radius: ${rem(12)};
  min-width: ${rem(350)};
`;

export const FormTitle = styled.h2`
  font-weight: 600;
  font-size: ${rem(22)};
  margin-bottom: ${rem(20)};
  text-align: center;
`;

export const FormLabel = styled.label`
  font-weight: 400;
  color: #1b1b1b;
  display: block;
  font-size: ${rem(16)};
  line-height: ${rem(26)};
`;

export const FormInput = styled.input`
  border: 1px solid #444;
  border-radius: ${rem(8)};
  padding: ${rem(10)} ${rem(8)};
  background-color: #eee;
  color: #111;
  font-size: ${rem(14)};
  line-height: ${rem(24)};
  width: 100%;
  margin-bottom: ${rem(16)};
`;

export const PasswordContainer = styled.div`
  display: block;
  position: relative;
`;

export const PasswordShowHide = styled.button`
  display: block;
  cursor: pointer;
  width: ${rem(30)};
  height: ${rem(30)};
  margin-top: auto;
  opacity: 0.45;
  position: absolute;
  right: ${rem(8)};
  top: ${rem(8)};

  &.is--showing {
    background-size: contain;
    background-position: center;
    background: url("/icons/showing-pass.svg") no-repeat;
  }
  
  &.is--hidden {
    background-size: contain;
    background-position: center;
    background: url("/icons/hidden-pass.svg") no-repeat;
  }
`;

export const FormButton = styled.button`
  margin-top: ${rem(10)};
  width: 100%;
  height: ${rem(80)};
  background-color: #36444f;
  color: #eee;
  font-size: ${rem(20)};
  border-radius: ${rem(8)};
  line-height: ${rem(30)};
`;
