export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`relative flex h-auto flex-col overflow-hidden rounded-2xl border border-white/10 p-8 shadow transition duration-400 hover:shadow-xl bg-white/5 ${className}`}
    >
      {children}
    </article>
  );
}
