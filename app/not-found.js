import ButtonLink from '@/components/ButtonLink';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <h1>We can’t find that page</h1>
        <p className="lead">
          The link may be old or mistyped. Classes, prices and the timetable are all one click away.
        </p>
        <div className="row-actions">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ButtonLink href="/classes" variant="outline">
            Browse classes
          </ButtonLink>
          <ButtonLink href="/timetable" variant="outline">
            View the timetable
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
