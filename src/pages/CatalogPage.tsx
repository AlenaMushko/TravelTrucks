import TruckList from "@/components/TruckList";
import TruckFilters from "@/components/TruckFilters";
import { Section } from "@/components";

const CatalogPage = () => {
  return (
    <Section>
      <h1 className="visually-hidden">Travel Trucks</h1>
      <TruckFilters />
      <TruckList />
    </Section>
  );
};

export default CatalogPage;
