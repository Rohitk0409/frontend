function Contacts() {
  return (

    <div
      id="contact"
      className="min-h-screen bg-indigo-50 py-16 px-6 md:px-16 flex flex-col items-center"
    >
      
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-12 text-center">
        Contact Me
      </h2>

      <form className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            required
            rows={5}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contacts;
