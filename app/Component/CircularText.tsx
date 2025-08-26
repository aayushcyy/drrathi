interface CircularTextProps {
  text?: string;
  radius?: number;
  speed?: number;
  className?: string;
}

function CircularText({
  text = "",
  radius = 80,
  speed = 8,
  className = "",
}: CircularTextProps) {
  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="relative animate-spin"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDuration: `${speed}s`,
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            className="absolute text-xs -tracking-widest font-bold text-black uppercase"
            style={{
              left: "50%",
              top: "50%",
              transform: `
                  translateX(-50%) 
                  translateY(-${radius}px) 
                  rotate(${i * angleStep}deg)
                `,
              transformOrigin: `center ${radius}px`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CircularText;
