export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="font-bold text-lg mb-2">BR School</h2>
          <p className="text-sm">
            Providing quality education with modern infrastructure.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Admissions</li>
            <li>Academics</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Contact</h2>
          <p className="text-sm">Email: brschool@email.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="text-center py-3 bg-blue-800 text-sm">
        © 2026 BR School. All rights reserved.
      </div>
    </footer>
  );
}