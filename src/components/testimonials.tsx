"use client";

export function Testimonials() {
  const testimonials = [
    {
      name: "Company ABC",
      message: "The HRIS system transformed our HR processes completely.",
    },
    {
      name: "HR Manager X",
      message: "I can't imagine managing HR tasks without this system now.",
    },
    {
      name: "Happy Customer Y",
      message:
        "Efficient, user-friendly, and a game-changer for HR operations.",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Testimonials & Success Stories
      </h2>
      <p className="text-gray-600 mb-6">What our users say about us</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg text-left shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
              <span className="text-yellow-500 text-sm">★★★★★</span>
            </div>
            <p className="text-sm text-gray-700">{item.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
