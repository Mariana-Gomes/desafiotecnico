import { Container, Title, Description } from "./styles";

type InfoItemProps = {
  title: string;
  description: string;
};

export function InfoItem({ title, description }: InfoItemProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
