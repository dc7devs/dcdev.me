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
        <Body className="bg-black/70 text-white my-auto mx-auto font-sans px-2">
          <Container className="bg-black/90 ring-1 ring-input rounded my-10 mx-auto p-5">
            <Section className="mt-8">
              <Img
                src={
                  'https://res.cloudinary.com/dyxtcsnna/image/upload/v1709661858/dcdev/Logotipo_dark_uksv3k.png'
                }
                height="60"
                alt="dcdevs"
                className="my-0 mx-auto"
              />
            </Section>

            <Section>
              <Heading className="text-white text-xl font-normal text-center p-0 my-7 mx-0">
                Mensagem enviado por: <strong>{name}</strong>
              </Heading>
              <Text className="text-white text-sm font-sans leading-normal">
                Email: <strong>{email}</strong>
              </Text>
              <Hr />
              <Text className="text-white text-base font-sans leading-normal">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
