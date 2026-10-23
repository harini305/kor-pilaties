// Inner-page opening: H1 with an optional lead and actions underneath or alongside.
export default function PageIntro({ title, lead, children, split = false, breadcrumb }) {
  return (
    <header className="page-intro container">
      {breadcrumb}
      <div className={split ? 'page-intro-grid' : undefined}>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {children}
    </header>
  );
}
