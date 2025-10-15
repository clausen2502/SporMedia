import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import VerkefniIntro from "../components/verkefni/intro.jsx";
import BreidablikSection from "../components/verkefni/BreidablikSection.jsx";
import SnerpaSection from "../components/verkefni/SnerpaSection.jsx";
import SidebarProjects from "../components/verkefni/SideBarProjects.jsx";

export default function Verkefni() {
  const NAV_H = 96;

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <Navbar neverHide blurTriggerId="verkefni-intro" blurTriggerOffset={NAV_H} />
      </div>

      <div className="fixed z-40 right-4 top-[96px] w-56 sm:w-64 md:w-72">
        <SidebarProjects
          items={[
            { id: "breidablik", label: "Breiðablik" },
            { id: "snerpa", label: "Snerpa Coaching" },
          ]}
          offset={NAV_H}
        />
      </div>

      <main className="min-h-screen bg-[#101820] text-white pt-[96px]">
        <div
          className="
            mx-auto max-w-[1280px]
            px-4 lg:px-8
            pr-[15rem] sm:pr-[17rem] md:pr-[19rem]
          "
        >
          <section id="verkefni-intro">
            <VerkefniIntro />
          </section>

          <section id="breidablik" className="py-8">
            <BreidablikSection />
          </section>

          <section id="snerpa" className="py-8">
            <SnerpaSection />
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
