import PageHeader from "../../components/PageHeader";
import classroom from "../../assets/images/classroom.jpg";
import lab from "../../assets/images/lab.jpg";
import event from "../../assets/images/event.jpg";
import student from "../../assets/images/student.jpg";

export default function Photos() {
  return (
    <div>
      <PageHeader title="Photo Gallery" />

      <div className="p-6 grid md:grid-cols-4 gap-4">

        <img src={classroom} className="rounded shadow hover:scale-105 transition" />
        <img src={lab} className="rounded shadow hover:scale-105 transition" />
        <img src={event} className="rounded shadow hover:scale-105 transition" />
        <img src={student} className="rounded shadow hover:scale-105 transition" />

        <img src={classroom} className="rounded shadow hover:scale-105 transition" />
        <img src={lab} className="rounded shadow hover:scale-105 transition" />
        <img src={event} className="rounded shadow hover:scale-105 transition" />
        <img src={student} className="rounded shadow hover:scale-105 transition" />

      </div>
    </div>
  );
}