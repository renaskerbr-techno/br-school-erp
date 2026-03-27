import PageHeader from "../../components/PageHeader";
import school from "../../assets/images/school.jpg";

export default function Overview() {
  return (
    <div>
      <PageHeader title="Overview" />

      <div className="p-6">
        <img src={school} className="rounded mb-4" />
        <p>
          BR School provides high-quality education with modern teaching
          methods and excellent infrastructure.
        </p>
      </div>
    </div>
  );
}