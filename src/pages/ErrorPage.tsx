import { useNavigate } from "react-router-dom";
import { Hero } from "@/components";
import { ROUTES } from "@/constants";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Hero
      images={{
        mobile: "/images/404_1x.jpg",
        tablet: "/images/404_2x.jpg",
        desktop: "/images/404_3x.jpg",
      }}
      title="Oops! You're Lost"
      buttonText="Run Back Home"
      onButtonClick={() => navigate(ROUTES.HOME)}
      textAlign="center"
    />
  );
}

export default ErrorPage;
