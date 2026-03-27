import PageHeader from "../../components/PageHeader";

export default function VisionMission() {
  return (
    <div>
      <PageHeader title="Vision & Mission" />

      <div className="p-6">
        <h3 className="font-bold text-lg">Vision</h3>
        <p>To build future leaders with strong values.</p>

        <h3 className="font-bold text-lg mt-4">Mission</h3>
        <p>
          Provide quality education, encourage innovation, and develop
          responsible citizens.
        </p>
      </div>
    </div>
  );
}