import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Container = styled.View`
  background-color: ${colors.gray[100]};
  /* overflow: hidden; */
  border: 1px solid ${colors.gray[400]};
  border-top-width: 0px;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const InfoUser = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${colors.gray[100]};
`;

export const Avatar = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 30px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: ${colors.gray[600]};
`;

export const IconArrow = styled.Image`
  width: 17px;
  height: 9px;
`;

export const InfoContainer = styled.View`
  padding: 0px 16px 20px;
  background-color: ${colors.gray[100]};
`;
