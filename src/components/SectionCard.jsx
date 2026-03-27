export default function SectionCard({ title, desc, image }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      
      {image && (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-bold text-lg text-blue-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
      </div>
    </div>
  );
}