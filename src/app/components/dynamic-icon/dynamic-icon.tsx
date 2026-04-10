import { COMPONENTS_ICONS, IconKeys } from "./icons";

export default function DynamicIcon({
  label,
  className = "",
  decorative = false,
}: {
  label: string;
  className?: string;
  /** Set true when a parent element already provides the accessible label */
  decorative?: boolean;
}) {
  const Icon = COMPONENTS_ICONS[label as IconKeys];

  if (!Icon) {
    return <></>;
  }

  return (
    <div
      className="flex flex-col group gap-2 relative justify-center items-center"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
    >
      <Icon
        aria-hidden="true"
        className={`flex justify-center items-center transition-transform duration-300 group-hover:scale-125 ${className}`}
      />
      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50 hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 w-auto whitespace-nowrap max-w-none text-center">
        {label}
      </span>
    </div>
  );
}
