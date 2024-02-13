import FaqCarousel from "../ui/FaqCarousel";
import Privacy from "../ui/Privacy";
import TabMenu from "../ui/TabMenu";

function PrivacyPage() {
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
      <Privacy />
    </>
  );
}

export default PrivacyPage;
