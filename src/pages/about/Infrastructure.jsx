import PageHeader from "../../components/PageHeader";
import classroom from "../../assets/images/classroom.jpg";
import lab from "../../assets/images/lab.jpg";

export default function Infrastructure() {
  return (
    <div>
      <PageHeader title="Infrastructure" />

      <div className="p-6 grid md:grid-cols-2 gap-6">
        <img src={classroom} className="rounded" />
        <img src={lab} className="rounded" />
      </div>
    </div>
  );
}