import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Register",
    description: "Create your account in a few simple steps.",
  },
  {
    title: "Manage",
    description: "Effortlessly handle HR tasks and data.",
  },
  {
    title: "Monitor",
    description: "Track progress and performance effectively.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-16 bg-white">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-18 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How It Works</h2>
          <p className="text-gray-600">Describe how website work</p>
        </div>
        <div className="w-50 h-50 bg-gray-200 rounded-sm mx-auto md:ml-auto md:mr-0" />
      </div>

      {/* Cards */}
      {/* 2 Cards in row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6 items-center">
        {steps.slice(0, 2).map((step, idx) => (
          <Card key={idx} className="p-4 rounded-sm">
            <div className="flex gap-4">
              {/* Placeholder for icon */}
              <div className="w-20 h-20 bg-gray-200 rounded-sm" />
              <div className="flex flex-col">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Full width card */}
      <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto mb-12 items-center">
        <Card className="p-4 rounded-sm">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-sm" />
            <div className="flex flex-col">
              <h3 className="font-semibold">{steps[2].title}</h3>
              <p className="text-sm text-muted-foreground">
                {steps[2].description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
