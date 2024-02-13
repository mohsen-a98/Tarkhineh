import BranchInfo from "../ui/BranchInfo";
import Carousel from "../ui/Carousel";
import Comments from "../ui/Comments";
import FoodsSuggested from "../ui/FoodsSuggested";

function Branch() {
  return (
    <>
      <Carousel />
      <FoodsSuggested />
      <BranchInfo />
      <Comments />
    </>
  );
}

export default Branch;
