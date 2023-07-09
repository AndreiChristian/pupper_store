interface ButtonProps {
  color: "bright" | "dark" | "neon";
  children: React.ReactNode;
}

function FilledButton({ color, children }: ButtonProps) {
  const baseClasses =
    "px-6 py-2 rounded-lg shadow-lg transition-all duration-200 ease-in-out text-white-pure";
  const colorClasses = {
    bright: "bg-space-bright hover:bg-space-neon hover:shadow-xl",
    dark: "bg-space-dark hover:bg-space-medium hover:shadow-xl",
    neon: "bg-space-neon hover:bg-space-bright hover:shadow-xl",
  };

  return (
    <button className={`${baseClasses} ${colorClasses[color]}`}>
      {children}
    </button>
  );
}

export default FilledButton