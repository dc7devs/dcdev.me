import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContacFOrmEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmailTemplate({
  name,
  email,
  message
}: ContacFOrmEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem de contato do seu portifólio</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-black/70 px-2 font-sans text-white">
          <Container className="mx-auto my-10 rounded bg-black/90 p-5 ring-1 ring-input">
            <Section className="mt-8">
              <Img
                src={
                  'https://res.cloudinary.com/dyxtcsnna/image/upload/v1709661858/dcdev/Logotipo_dark_uksv3k.png'
                }
                height="60"
                alt="dcdevs"
                className="mx-auto my-0"
              />
            </Section>

            <Section>
              <Heading className="mx-0 my-7 p-0 text-center text-xl font-normal text-white">
                Mensagem enviado por: <strong>{name}</strong>
              </Heading>
              <Text className="font-sans text-sm leading-normal text-white">
                Email: <strong>{email}</strong>
              </Text>
              <Hr />
              <Text className="font-sans text-base leading-normal text-white">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
