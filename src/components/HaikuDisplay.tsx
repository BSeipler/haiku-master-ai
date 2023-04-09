interface HaikuDisplayProps {
  haiku: string;
}

const HaikuDisplay = ({ haiku }: HaikuDisplayProps) => {
  const lines = haiku.split('\n');

  return (
    <div className="text-center mt-8">
      {haiku ? (
        lines.map((line) => (
          <p key={line} className="text-xl">
            {line}
          </p>
        ))
      ) : (
        <p className="text-xl">Your Haiku will appear here...</p>
      )}
    </div>
  );
};

export default HaikuDisplay;
