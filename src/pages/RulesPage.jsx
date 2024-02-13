import FaqCarousel from "../ui/FaqCarousel";
import Rules from "../ui/Rules";
import TabMenu from "../ui/TabMenu";

function RulesPage() {
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
      <Rules />
    </>
  );
}

export default RulesPage;
