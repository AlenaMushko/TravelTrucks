import { useParams } from "react-router-dom";

function TruckDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>TruckDetailPage</h1>
      <p>Truck ID: {id}</p>
    </div>
  );
}

export default TruckDetailPage;
