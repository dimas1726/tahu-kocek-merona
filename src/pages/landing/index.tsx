import Navbar from "@/components/common/navbar";
import Header from "./partials/Header";
import Menus from "./partials/Menus";

const LandingPage = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Header />
      </section>
      <section className="px-4 md:px-40 py-40">
        <Menus />
      </section>
    </>
  );
};

export default LandingPage;
