import type { PropsWithChildren } from 'react';
import { Container } from '~/components/ui/container';

export default function HomePageLayout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
