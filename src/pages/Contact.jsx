import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div>
      <PageHeader title="Contact Us" />

      <div className="p-6 grid md:grid-cols-2 gap-6">

        {/* Contact Info */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-2">
            📍 Address: BR School, Hyderabad, India
          </p>
          <p className="text-gray-600 mb-2">
            📞 Phone: +91 9876543210
          </p>
          <p className="text-gray-600 mb-4">
            📧 Email: brschool@email.com
          </p>

          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded"
              src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Send Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded"
            />

            <button className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 transition">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}