import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "917309663015";

  // Default message
  const message = encodeURIComponent(
    "Hi Rohit, I want to connect with you regarding your work.",
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
        {/* Chat Box */}
        <div
          className={`transition-all duration-500 transform ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95 pointer-events-none"
          }`}
        >
          <div className="w-72 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
            <p className="text-sm text-gray-700 font-medium">
              👋 Hi there! <br />
              Have a question? Chat with me on WhatsApp.
            </p>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300"
            >
              Start Chat
            </a>
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp Chat"
          className="relative w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>

          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </>
  );
};

export default WhatsAppFloat;
