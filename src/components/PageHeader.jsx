export default function PageHeader({ title }) {
  return (
    <div className="bg-blue-100 py-10 text-center mb-6">
      <h1 className="text-3xl font-bold text-blue-900">{title}</h1>
    </div>
  );
}