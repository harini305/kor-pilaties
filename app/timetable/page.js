import PageIntro from '@/components/PageIntro';
import Timetable from '@/components/Timetable';
import ButtonLink from '@/components/ButtonLink';
import CtaBand from '@/components/CtaBand';
import { buildDays, SNAPSHOT_CAPTURED } from '@/data/timetable';
import { booking } from '@/config/booking';

export const metadata = {
  title: 'Timetable',
  description:
    'The KOR Pilates Bali class schedule: Reformer Flow, Reformer Strength and Reformer Abs n’ Ass at KOR Berawa. Book a spot on the live timetable.',
  alternates: { canonical: '/timetable' },
};

export default function TimetablePage() {
  const days = buildDays();
  const period = `${days[0].label} – ${days[days.length - 1].label} 2026`;

  return (
    <>
      <PageIntro
        title="Timetable"
        split
        lead={`The class schedule for ${period}. Choose a class, then book your spot. Booking opens the KOR booking site in a new tab.`}
      >
        <div className="row-actions">
          <ButtonLink href={booking.timetable}>Book on the KOR booking site</ButtonLink>
        </div>
      </PageIntro>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Schedule">
        <div className="container">
          <Timetable days={days} period={period} />
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="notes-title">
        <div className="container">
          <h2 id="notes-title" className="visually-hidden">
            About this schedule
          </h2>
          <div className="notes">
            <div>
              <h3>Booking opens 7 days ahead</h3>
              <p>Spots open 7 days before class start. Spots are limited, so booking in advance is recommended.</p>
            </div>
            <div>
              <h3>Arrive 10 minutes early</h3>
              <p>
                We recommend arriving at least 10 minutes early. Late arrivals of more than 5 minutes will not be
                permitted to join the class.
              </p>
            </div>
            <div>
              <h3>About these times</h3>
              <p>
                Snapshot captured {SNAPSHOT_CAPTURED}. Times are shown exactly as listed in the booking system, which is
                set to Indonesia time (GMT+7). Classes can change, so the live timetable is the reference for current
                times and spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Found your class?"
        text="Book your spot on the KOR booking site. It opens in a new tab, so this schedule stays open."
        bookHref={booking.timetable}
        bookLabel="Book on the KOR booking site"
      />
    </>
  );
}
