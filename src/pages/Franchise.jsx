import Counseling from "../ui/Counseling";
import FranchiseBenefits from "../ui/FranchiseBenefits";
import FranchiseCarousel from "../ui/FranchiseCarousel";
import FranchiseFeatures from "../ui/FranchiseFeatures";
import FranchiseForm from "../ui/FranchiseForm";

function Franchise() {
  return (
    <>
      <FranchiseCarousel />
      <FranchiseFeatures />
      <FranchiseBenefits />
      <Counseling />
      <FranchiseForm />
    </>
  );
}

export default Franchise;
