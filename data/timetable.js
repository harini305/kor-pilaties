import snapshot from './timetable-snapshot.json';
import { slugForClassName } from './classes';

// Snapshot of the Rezerv timetable, 23 Oct – 5 Nov 2026 (audit 03 §8).
// Times are kept exactly as the booking system lists them (business timezone Asia/Jakarta,
// see 08 A13) — no timezone conversion is applied. Availability and booking status are
// live data, so they are deliberately not shown here.

export const SNAPSHOT_START = '2026-10-23';
export const SNAPSHOT_DAYS = 14;
export const SNAPSHOT_CAPTURED = '23 Oct 2026';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function addDays(iso, n) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function minutes(duration) {
  const [h, m] = duration.split(':').map(Number);
  return h * 60 + m;
}

export function buildDays() {
  const sessions = snapshot.sessions
    .filter((s) => !s.cancelled)
    .map((s) => ({
      date: s.start.slice(0, 10),
      time: s.start.slice(11, 16),
      name: s.class,
      slug: slugForClassName(s.class) || null,
      instructor: s.trainers.join(', '),
      duration: minutes(s.duration),
      category: /mat/i.test(s.facility) ? 'mat' : 'reformer',
    }));

  return Array.from({ length: SNAPSHOT_DAYS }, (_, i) => {
    const date = addDays(SNAPSHOT_START, i);
    const d = new Date(`${date}T00:00:00Z`);
    return {
      date,
      weekday: WEEKDAYS[d.getUTCDay()],
      label: `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`,
      sessions: sessions.filter((s) => s.date === date).sort((a, b) => a.time.localeCompare(b.time)),
    };
  });
}
