import Picture from './Picture';

// Class photo, or a typographic panel for classes without a real photo (audit 08 B3).
export default function ClassMedia({ item, sizes, priority, className = 'media--4x3' }) {
  if (item.image) {
    return (
      <div className={`media ${className}`}>
        <Picture name={item.image.name} alt={item.image.alt} sizes={sizes} priority={priority} />
      </div>
    );
  }
  return (
    <div className={`media type-panel ${className}`} aria-hidden="true">
      <span>{item.name}</span>
    </div>
  );
}
