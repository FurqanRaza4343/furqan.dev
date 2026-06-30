import type { Metadata } from "next";
import CertificatesSection from "@/components/sections/CertificatesSection";

export const metadata: Metadata = {
  title: "Certificates",
  description: "View professional certifications and achievements of Furqan Raza in AI, Generative AI, and software engineering.",
  openGraph: {
    title: "Certificates | Furqan.dev",
    description: "View professional certifications and achievements of Furqan Raza in AI, Generative AI, and software engineering.",
    url: "https://furqan.dev/certificates",
  },
};

export default function CertificatesPage() {
  return (
    <div className="pt-8">
      <CertificatesSection />
    </div>
  );
}
