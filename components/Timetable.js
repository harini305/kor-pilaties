'use client';

import Link from '@/components/Link';
import { useMemo, useState } from 'react';
import ButtonLink from './ButtonLink';
import { booking } from '@/config/booking';

const FILTERS = [
  { id: 'all', label: 'All classes' },
  { id: 'reformer', label: 'Reformer' },
  { id: 'mat', label: 'Mat' },
];

function SessionName({ s }) {
  return s.slug ? (
    <Link href={`/classes/${s.slug}`} className="tt-name">
      {s.name}
    </Link>
  ) : (
    <span className="tt-name">{s.name}</span>
  );
}

function BookLink({ s, day }) {
  return (
    <a className="tt-book" href={booking.timetable} target="_blank" rel="noopener noreferrer">
      Book
      <span className="visually-hidden">
        {' '}
        {s.name} at {s.time}, {day.weekday} {day.label} (opens the KOR booking site in a new tab)
      </span>
    </a>
  );
}

// Two-week schedule snapshot: week grid on wide screens, day selector + list below 1100px.
export default function Timetable({ days, period }) {
  const weeks = useMemo(() => [days.slice(0, 7), days.slice(7, 14)], [days]);
  const [week, setWeek] = useState(0);
  const [filter, setFilter] = useState('all');
  const [dayIndex, setDayIndex] = useState(() => {
    const first = days.slice(0, 7).findIndex((d) => d.sessions.length);
    return first === -1 ? 0 : first;
  });

  const visible = (d) => d.sessions.filter((s) => filter === 'all' || s.category === filter);
  const current = weeks[week];
  const filterHasSessions = days.some((d) => visible(d).length);
  const selected = current[dayIndex];

  const changeWeek = (i) => {
    setWeek(i);
    const first = weeks[i].findIndex((d) => visible(d).length);
    setDayIndex(first === -1 ? 0 : first);
  };

  const weekLabel = (w) => `${w[0].label} – ${w[w.length - 1].label}`;

  return (
    <div>
      <div className="tt-controls">
        <div className="tt-group" role="group" aria-label="Week">
          {weeks.map((w, i) => (
            <button key={i} type="button" className="chip" aria-pressed={week === i} onClick={() => changeWeek(i)}>
              {weekLabel(w)}
            </button>
          ))}
        </div>
        <div className="tt-group" role="group" aria-label="Class type">
          {FILTERS.map((f) => (
            <button key={f.id} type="button" className="chip" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {FILTERS.find((f) => f.id === filter).label.toLowerCase()} for {weekLabel(current)}.
      </p>

      {!filterHasSessions ? (
        <div className="tt-empty-panel">
          <h3>No Mat sessions in this snapshot</h3>
          <p>
            No Mat classes were listed on the schedule for {period}. Mat classes are held at KOR Pererenan, on the
            second floor of CRATE Café. Check the live timetable for the current Mat schedule, or message us.
          </p>
          <div className="row-actions">
            <ButtonLink href={booking.timetable} size="sm">
              Check the live timetable
            </ButtonLink>
            <ButtonLink href="/pricing#mat" variant="outline" size="sm">
              Mat prices
            </ButtonLink>
          </div>
        </div>
      ) : (
        <>
          <div className="tt-week">
            <div className="tt-week-grid">
              {current.map((d) => {
                const list = visible(d);
                return (
                  <section key={d.date} className="tt-col" aria-label={`${d.weekday} ${d.label}`}>
                    <div className="tt-col-head">
                      <strong>{d.weekday}</strong>
                      <span>{d.label}</span>
                    </div>
                    <div className="tt-col-body">
                      {list.length ? (
                        list.map((s) => (
                          <div className="tt-session" key={s.date + s.time + s.name}>
                            <span className="tt-time">{s.time}</span>
                            <SessionName s={s} />
                            <span className="tt-who">{s.instructor}</span>
                            <BookLink s={s} day={d} />
                          </div>
                        ))
                      ) : (
                        <p className="tt-empty">No sessions listed</p>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          <div className="tt-mobile">
            <div className="tt-days" role="tablist" aria-label="Day">
              {current.map((d, i) => (
                <button
                  key={d.date}
                  type="button"
                  role="tab"
                  className="tt-day"
                  aria-selected={dayIndex === i}
                  aria-controls="tt-day-panel"
                  data-empty={!visible(d).length}
                  onClick={() => setDayIndex(i)}
                >
                  <span>{d.weekday}</span>
                  <span>{d.label.split(' ')[0]}</span>
                  <span aria-hidden="true" />
                  <span className="visually-hidden">
                    {d.label}, {visible(d).length} sessions
                  </span>
                </button>
              ))}
            </div>
            <div id="tt-day-panel" role="tabpanel" aria-label={`${selected.weekday} ${selected.label}`}>
              <p className="tt-list-head">
                {selected.weekday} {selected.label}
              </p>
              <ul className="tt-list">
                {visible(selected).length ? (
                  visible(selected).map((s) => (
                    <li key={s.time + s.name}>
                      <span className="tt-time">{s.time}</span>
                      <SessionName s={s} />
                      <span className="tt-who">
                        {s.instructor}, {s.duration} min
                      </span>
                      <BookLink s={s} day={selected} />
                    </li>
                  ))
                ) : (
                  <li>
                    <span />
                    <span className="tt-who" style={{ gridColumn: '1 / -1' }}>
                      No sessions listed for this day.
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
