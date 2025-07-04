import { GiftCardRedeemer } from "~/components/GiftCardRedeemer";
import { Navbar } from "~/components/Navbar";
import { WelcomeSection } from "~/components/WelcomeSection";

export function meta() {
  return [
    { title: "EML Balance Checker" },
    { name: "description", content: "Check balance on gift cards with EML Balance Checker." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0B0E18] text-gray-900">
      <Navbar />
      <WelcomeSection />
      <main className="relative">
        <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f65a3a5b56c61e6d8dc216/63f65a3a5b56c6f5898dc26f_noise.png')] opacity-5"></div>
        <GiftCardRedeemer />
      </main>
    </div>
  );
}
