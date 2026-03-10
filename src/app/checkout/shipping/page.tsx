import PageTitel from "../components/PageTitel";
import ProgressBar from "./components/ProgressBar";
import Info from "./components/Info";
import SpecialNotes from "./components/SpecialNotes";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <PageTitel
        track="Home/ Fresh Products/ Cart/"
        current_page="Checkout (shipping)"
      />
      <ProgressBar />
      <Info />
      <SpecialNotes />
      <Cta text="Continue Checkout" link="/payment" />
    </>
  );
}
