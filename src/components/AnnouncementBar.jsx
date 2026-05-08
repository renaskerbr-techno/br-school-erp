import { Link } from "react-router-dom";

export default function AnnouncementBar() {
  const announcements = [
    { text: "📢 Admissions Open for 2026", link: "/admissions/apply" },
    { text: "📝 Exams start soon", link: "/academics/calendar" },
    { text: "🎉 Annual Day", link: "/events" },
    { text: "📚 New courses available", link: "/academics/curriculum" },
  ];

  return (
    <div className="fixed top-0 w-full bg-yellow-500 text-black h-10 flex items-center overflow-hidden z-50">
      
      <div className="flex items-center space-x-3 pl-4 pr-2">
        {/* "WHAT'S NEW" button-style */}
        <span className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
          WHAT'S NEW
        </span>
        
        {/* Scrolling Announcement */}
        <div className="flex-1 overflow-hidden">
          <div className="ticker-track animate-scroll text-sm font-semibold">
            {announcements.map((item, index) => (
              <Link key={index} to={item.link} className="mx-6 hover:underline">
                {item.text}
              </Link>
            ))}

            {announcements.map((item, index) => (
              <Link key={"dup-" + index} to={item.link} className="mx-6 hover:underline">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}