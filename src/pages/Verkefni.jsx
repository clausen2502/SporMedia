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
        <Navbar
          neverHide
          blurTriggerId="verkefni-intro"
          blurTriggerOffset={NAV_H}
        />
      </div>

      {/* Offset the page for the fixed navbar */}
      <main className="min-h-screen bg-[#101820] text-white" style={{ paddingTop: NAV_H }}>
        {/* Right-align the container on md+ so the sidebar can be flush right */}
        <div className="max-w-7xl px-6 md:ml-auto md:mr-0 md:pr-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left/content column */}
            <div className="md:col-span-9">
              <section id="verkefni-intro">
                <VerkefniIntro />
              </section>

              <section id="breidablik">
                <BreidablikSection />
              </section>

              <section id="snerpa">
                <SnerpaSection />
              </section>
            </div>

            {/* Right/sticky sidebar; flush because container has pr-0 on md+ */}
            <aside className="md:col-span-3 md:sticky self-start" style={{ top: NAV_H }}>
              <SidebarProjects
                items={[
                  { id: "breidablik", label: "Breiðablik" },
                  { id: "snerpa", label: "Snerpa Coaching" },
                ]}
                offset={NAV_H}
              />
            </aside>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
