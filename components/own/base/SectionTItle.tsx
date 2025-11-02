function SectionTItle({
  primaryTitle,
  secondaryTitle,
  description,
  isNewLine = true,
}: {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
  isNewLine?: boolean;
}) {
  return (
    <div className="text-center mb-12 md:mb-16 z-2">
      <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-4">
        {primaryTitle} {isNewLine && <br />}
        <span className="text-[#666666]"> {secondaryTitle}</span>
      </h2>
      <p className="text-sm md:text-base text-[#B3B3B3] mt-4 mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionTItle;
