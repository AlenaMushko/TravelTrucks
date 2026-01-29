import { useNavigate } from "react-router-dom";
import Hero from "@/components/Hero";
import { ROUTES } from "@/constants";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Hero
      images={{
        mobile: "/images/Hero_1x.png",
        tablet: "/images/Hero_2x.png",
        desktop: "/images/Hero_3x.png",
      }}
      title="Campers of your dreams"
      subtitle="You can find everything you want in our catalog"
      buttonText="View Now"
      onButtonClick={() => navigate(ROUTES.CATALOG)}
    />
  );
}

export default HomePage;
