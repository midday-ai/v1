import {
  Body,
  Button,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";
import { Logo } from "components/logo";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3001";

export default function WelcomeEmail() {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body className="my-auto mx-auto font-sans">
          <Container className="border-transparent my-[40px] mx-auto max-w-[600px]">
            <Logo baseUrl={baseUrl} />
            <Heading className="font-normal text-center p-0 my-[30px] mx-0">
              Welcome to v1
            </Heading>
            <Section className="mb-4">
              Hi, I'm Pontus, one of the founders.
            </Section>
            <Section className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
              vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
              consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
              nunc euismod nunc. Sed euismod, nisi vel consectetur interdum,
              nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
            </Section>
            <Section className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Section>
            <Section className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Section>
            <Section className="mb-6">
              <Link href={baseUrl}>
                <Button className="bg-black text-white p-4 text-center">
                  Get started
                </Button>
              </Link>
            </Section>
            <Hr />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
