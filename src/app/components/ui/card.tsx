export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`relative flex h-auto flex-col overflow-hidden rounded-2xl p-4 shadow-xl transition duration-400 hover:shadow-2xl hover:bg-[#1c1c1c] border border-slate-100/10 ${className}`}
    >
      {children}
    </article>
  );
}
