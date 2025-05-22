"use client";

export function Footer() {
  return (
    <footer className="py-10 bg-white border-t text-center text-sm text-gray-600">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
}
