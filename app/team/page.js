import PageIntro from '@/components/PageIntro';
import TeamGrid from '@/components/TeamGrid';
import CtaBand from '@/components/CtaBand';
import { team } from '@/data/team';

export const metadata = {
  title: 'Team',
  description:
    'Meet the KOR Pilates Bali instructors: June Louie, Charlotte Oktaviana Chandra, Xavier Fabrega, Christophe Blanc, Fiona Palumbo, Audrey Hamel and Maria Chaikovskaia.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <>
      <PageIntro
        title="Team"
        split
        lead="The instructors behind KOR’s group and private classes. Choose a time with your favourite instructor on the live timetable."
      />
      <section className="section" style={{ paddingTop: 0 }} aria-label="Instructors">
        <div className="container">
          <TeamGrid members={team} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
