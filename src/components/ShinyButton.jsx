export default function ShinyButton({ children, onClick, className = "" }) {
  return (
    <button type="button" className={`shiny-cta ${className}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
