import PageHeader from "../../components/PageHeader";

export default function Videos() {
  return (
    <div>
      <PageHeader title="Video Gallery" />

      <div className="p-6 grid md:grid-cols-2 gap-6">

        {/* Video 1 */}
        <div className="rounded shadow overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="School Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="rounded shadow overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="School Event"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}