import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",

  id,
}) => {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default SectionWrapper;

const HeaderWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  id,
}) => {
  return (
  <section
      id={id}
      className={`w-full py-4 md:py-6 ${className} fixed top-0 left-0 z-100 backdrop-blur-md border-b-2`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

const FooterWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  id,
}) => {
  return (
    <section id={id} className={`w-full pt-16 md:pt-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export { HeaderWrapper, FooterWrapper };
