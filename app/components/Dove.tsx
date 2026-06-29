// A stylised peace dove with an olive branch, echoing the Cerulean Commons
// logo. Single colour so it works as a quiet watermark and as the favicon.
export default function Dove({
  className = "",
  title = "Cerulean Commons dove",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      fill="currentColor"
    >
      <path d="M15 65c14-6 24-6 34-3-6-10-6-20 4-26-4-3-4-9 2-11-2 4 2 6 6 6 9 0 17 6 19 15-6-2-10 0-14 4-4 11-16 21-30 21-8 0-15-1-21-6z" />
      <path
        d="M80 45c6-4 13-9 18-15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M88 34c3-1 6 0 8 2-3 1-6 1-8-2zM83 40c3-2 6-2 9-1-2 3-6 3-9 1z" />
    </svg>
  );
}
