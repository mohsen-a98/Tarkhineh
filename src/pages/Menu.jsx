import MenuFood from "../features/menu/MenuFoods";
import Carousel from "../ui/Carousel";
import TabMenu from "../ui/TabMenu";

function Menu() {
  return (
    <>
      <Carousel includeButton="false" />
      <TabMenu
        items={[
          { title: "غذای اصلی" },
          { title: "پیش غذا" },
          { title: "دسر" },
          { title: "نوشیدنی" },
        ]}
        defaultActiveIndex={0}
      />
      <MenuFood />
    </>
  );
}

export default Menu;
