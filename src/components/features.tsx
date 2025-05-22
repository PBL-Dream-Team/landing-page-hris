"use client";

export function Features() {
  const features = [
    {
      title: "Employee Management",
      description: "Easily manage employee data",
    },
    {
      title: "Attendance Tracking",
      description: "Automated check-in & check-out",
    },
    {
      title: "Payroll System",
      description: "Salary calculations & payslips",
    },
  ];

  const additionalFeatures = [
    {
      title: "Document Management",
      description: "Handle contracts & legal letters",
    },
    {
      title: "Subscription & Payment",
      description: "Flexible plans with secure payment",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-2">
        Key Features Overview
      </h2>
      <p className="text-gray-600 mb-6">
        Explore our powerful HR management tools.
      </p>

      {/* Fitur Utama (3 kolom) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Fitur Tambahan (2 kolom) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {additionalFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded shadow-sm bg-gray-50 overflow-hidden flex flex-col">
      <div className="h-80 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
        {title}
      </div>
      <div className="px-4 py-2 text-left flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
