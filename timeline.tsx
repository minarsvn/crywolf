import Link from 'next/link';

import Container from 'components/Container';
import Timeline from 'components/Timeline';

export default function Timeline() {
  return (
    <Container title="Timeline">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-vio dark:text-vio">
        Timeline
        </h1>
      <Timeline />
      </div>
    </Container>
  );
}
