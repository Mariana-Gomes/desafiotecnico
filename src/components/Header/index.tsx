import {
  Container,
  UserName,
  User,
  IconBell,
  NotificationContainer,
  BadgeNotification,
  BadgeText,
} from "./styles";
import Bell from "@/assets/icons/bell-notification.png";

export function Header() {
  return (
    <Container>
      <User>
        <UserName>CG</UserName>
      </User>
      <NotificationContainer>
        <IconBell source={Bell} />
        <BadgeNotification>
          <BadgeText>02</BadgeText>
        </BadgeNotification>
      </NotificationContainer>
    </Container>
  );
}
