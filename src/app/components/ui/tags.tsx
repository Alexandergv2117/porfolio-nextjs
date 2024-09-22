export default function Tag({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full border text-slate-200/90 border-slate-100/10 cursor-default hover:bg-slate-100/10 ${className}`}
    >
      {label}
    </span>
  );
}
