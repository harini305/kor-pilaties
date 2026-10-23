import { formatRp } from '@/data/packages';

// Compact package comparison. On narrow screens each row collapses to
// "name / price" with a single line of details beneath (see .price-table in globals.css).
export default function PriceTable({ caption, packages }) {
  return (
    <table className="price-table">
      <caption className="visually-hidden">{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Package</th>
          <th scope="col" className="num desktop-cell">
            Classes
          </th>
          <th scope="col" className="num desktop-cell">
            Per class
          </th>
          <th scope="col" className="desktop-cell">
            Valid for
          </th>
          <th scope="col" className="num">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {packages.map((p) => (
          <tr key={p.id}>
            <th scope="row">
              {p.name}
              {p.firstTimers && <span className="tag">Best for first timers</span>}
            </th>
            <td className="num desktop-cell">{p.classes ?? '—'}</td>
            <td className="num desktop-cell">{p.perClass ? formatRp(p.perClass) : '—'}</td>
            <td className="desktop-cell">{p.validity}</td>
            <td className="num cell-price">
              <span className="price-figure">{formatRp(p.price)}</span>
            </td>
            <td className="mobile-cell cell-meta-group">
              {p.perClass && <span>{formatRp(p.perClass)} per class</span>}
              <span>Valid {p.validity}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
