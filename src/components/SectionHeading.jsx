import branch from "../assets/branch.svg";

export default function SectionHeading({ children }) {
  return (
    <div className="relative w-full flex items-center justify-center gap-6">
      <img src={branch} alt="Left Branch" className="absolute left-0" />
      <h2 className="dark_brown text-6xl font-bold text-center flex-grow">{children}</h2>
      <img src={branch} alt="Right Branch" className="absolute right-0 scale-x-[-1]" />
    </div>
  );
}
