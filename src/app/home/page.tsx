import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { PricingPlans } from "@/components/pricing-plans";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <div className="border-t my-8 w-full" />
      <Features />
      <div className="border-t my-8 w-full" />
      <HowItWorks />
      <div className="border-t my-8 w-full" />
      <PricingPlans />
      <div className="border-t my-8 w-full" />
      <Testimonials />
      <Footer />
    </>
  );
}
