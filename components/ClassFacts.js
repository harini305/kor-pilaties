import { categories } from '@/data/classes';
import { studios } from '@/data/studios';

export default function ClassFacts({ item }) {
  const studio = studios[categories[item.category].studio];
  return (
    <dl className="facts">
      <div>
        <dt>Duration</dt>
        <dd>{item.duration} min</dd>
      </div>
      {item.level && (
        <div>
          <dt>Level</dt>
          <dd>{item.level}</dd>
        </div>
      )}
      <div>
        <dt>Studio</dt>
        <dd>{studio.name}</dd>
      </div>
    </dl>
  );
}
