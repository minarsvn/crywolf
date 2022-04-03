import Link from 'next/link';

import Timelines from '../components/Timeline';
import Container from 'components/Container';

export default function Timeline() {
  return (
    <Container title="Timeline">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <Timelines />
      </div>
    </Container>
  );
}
