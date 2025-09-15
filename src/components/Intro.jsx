import SectionHeading from "./SectionHeading";

export default function Intro() {
  return (
    <main className="flex flex-col items-center justify-center py-5 border-t-4">
      <SectionHeading>HVAÐ GERUM VIÐ?</SectionHeading>

      <p className="text-2xl text-center mb-12 max-w-3xl mt-10">
        SporMedia býður upp á samþættar lausnir fyrir fyrirtæki sem vilja styrkja
        ímynd sína og ná betri árangri í stafrænum heimi.
      </p>
      <p className="text-2xl text-center mb-12 max-w-3xl">
        Við hjálpum fyrirtækjum að verða sýnilegri, traustari og aðgengilegri með
        vönduðum veflausnum, skýru vörumerki, markvissum auglýsingum og snjöllum
        gervigreindarfulltrúa.
      </p>
      <p className="text-2xl text-center mb-12 max-w-3xl">
        Markmiðið okkar er að gera góða þjónustu sýnilega - svo viðskiptavinir
        finni hana, treysti henni og velji hana aftur og aftur.
      </p>
    </main>
  );
}
