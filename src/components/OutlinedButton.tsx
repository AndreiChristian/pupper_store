interface OutlinedButtonProps {
  color: "bright" | "dark" | "neon";
  children: React.ReactNode;
}

function OutlinedButton({ color, children }: OutlinedButtonProps) {
  const baseClasses =
    "px-6 py-2 rounded-lg border-2 shadow-lg transition-all duration-200 ease-in-out";
  const colorClasses = {
    bright:
      "text-space-bright border-space-bright hover:bg-space-bright hover:text-white-pure hover:shadow-xl",
    dark: "text-space-dark border-space-dark hover:bg-space-medium hover:text-white-pure hover:shadow-xl",
    neon: "text-space-neon border-space-neon hover:bg-space-neon hover:text-white-pure hover:shadow-xl",
  };

  return (
    <button className={`${baseClasses} ${colorClasses[color]}`}>
      {children}
    </button>
  );
}

export default OutlinedButton
