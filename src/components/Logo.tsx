interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const houseColor = variant === "white" ? "#ffffff" : "#2BB8D3";
  const textColor = variant === "white" ? "#ffffff" : "#3D3D3D";
  const subtextColor = variant === "white" ? "#e2e8f0" : "#3D3D3D";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 80"
      className={className}
      aria-label="Milestone Moves Realty Group"
      role="img"
    >
      {/* Houses group */}
      <g>
        {/* Left house */}
        <polygon points="28,32 10,48 46,48" fill={houseColor} />
        <rect x="16" y="48" width="24" height="17" fill={houseColor} rx="1" />
        <rect x="26" y="55" width="8" height="10" fill={variant === "white" ? "#1C2B5E" : "white"} />

        {/* Middle house (taller) */}
        <polygon points="68,18 46,40 90,40" fill={houseColor} />
        <rect x="52" y="40" width="32" height="22" fill={houseColor} rx="1" />
        <rect x="63" y="50" width="10" height="12" fill={variant === "white" ? "#1C2B5E" : "white"} />

        {/* Right house */}
        <polygon points="108,32 90,48 126,48" fill={houseColor} />
        <rect x="96" y="48" width="24" height="17" fill={houseColor} rx="1" />
        <rect x="106" y="55" width="8" height="10" fill={variant === "white" ? "#1C2B5E" : "white"} />

        {/* Ground arc */}
        <path
          d="M 5,66 Q 68,75 131,66"
          stroke={houseColor}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Text */}
      <text
        x="145"
        y="40"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
        fontWeight="700"
        fill={textColor}
      >
        Milestone Moves
      </text>
      <text
        x="145"
        y="60"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11"
        letterSpacing="3"
        fill={subtextColor}
      >
        REALTY GROUP
      </text>
    </svg>
  );
}
