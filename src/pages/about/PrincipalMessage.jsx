import PageHeader from "../../components/PageHeader";
import student from "../../assets/images/student.jpg";

export default function PrincipalMessage() {
  return (
    <div>
      <PageHeader title="Principal Message" />

      <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
        <img src={student} className="rounded" />

        <p>
          Welcome to BR School. We focus on holistic development of students
          and preparing them for the future.
        </p>
      </div>
    </div>
  );
}