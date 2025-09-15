export default function FeatureCard({ branch, icon, title, children }) {
  return (
    <div className="relative flex flex-col items-center text-center
                    border-2 border-[var(--color--brown)]
                    rounded-2xl px-12 pt-16 pb-6 h-full bg-white w-85">
      <img
        src={branch}
        alt=""
        className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-20"
      />

      <div className="grid place-items-center h-12 w-12 text-[var(--color--brown)]">
        {icon}
      </div>

      <h3 className="text-lg font-semibold dark_brown mb-2">{title}</h3>
      <p className="text-sm dark_brown/90 leading-relaxed mb-5 flex-grow">
        {children}
      </p>

      <div className="mt-auto">
        <button className="brown-btn !px-5 !py-2 text-sm">Skoða meira</button>
      </div>
    </div>
  );
}
