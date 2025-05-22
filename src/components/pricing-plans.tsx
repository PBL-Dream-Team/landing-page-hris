"use client";

export function PricingPlans() {
  const plans = [
    {
      title: "Trial",
      description: "1 Month Free Trial",
    },
    {
      title: "Basic",
      description: "Essential HR Tools",
    },
    {
      title: "Premium",
      description: "Advanced Features & Support",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image Placeholder */}
        <div className="w-full h-[500px] bg-gray-200 rounded-md" />

        {/* Right: Plans */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Pricing Plans
            </h2>
            <p className="text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          {/* Plan Items */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
            {plans.slice(0, 2).map((plan) => (
              <div
                key={plan.title}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-2" />
                <h3 className="font-semibold">{plan.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Center Plan */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-2" />
              <h3 className="font-semibold">{plans[2].title}</h3>
              <p className="text-sm text-muted-foreground">
                {plans[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
