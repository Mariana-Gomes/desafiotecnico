import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Container = styled.SafeAreaView`
  justify-content: space-between;
  flex-direction: row;
  margin: 11px 20px;
  width: 334px;
  height: 45px;
  align-items: center;
`;

export const User = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: ${colors.gray[300]};
  border-radius: 23px;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.Text`
  font-size: 24px;
  color: ${colors.gray[600]};
`;

export const NotificationContainer = styled.TouchableOpacity`
  position: relative;
  width: 32px;
  height: 32px;
`;

export const IconBell = styled.Image`
  width: 32px;
  height: 32px;
`;

export const BadgeNotification = styled.View`
  position: absolute;
  right: -5px;
  top: -5px;
  background-color: ${colors.blue[100]};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const BadgeText = styled.Text`
  color: ${colors.gray[100]};
  font-size: 10px;
  font-weight: bold;
`;
