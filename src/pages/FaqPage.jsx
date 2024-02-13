import Faq from "../ui/Faq";
import FaqCarousel from "../ui/FaqCarousel";
import TabMenu from "../ui/TabMenu";

function FaqPage() {
  return (
    <>
      <FaqCarousel />
      <TabMenu
        items={[
          { title: "سوالات متداول", path: "/faq" },
          { title: "قوانین ترخینه", path: "/rules" },
          { title: "حریم خصوصی", path: "/privacy" },
        ]}
      />
      <Faq />
    </>
  );
}

export default FaqPage;
