export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Furqan Raza",
    url: "https://furqan.dev",
    image: "https://furqan.dev/images/furqanpic.jpg",
    jobTitle: "AI/LLM Engineer",
    description:
      "AI Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation.",
    sameAs: [
      "https://linkedin.com/in/furqanraza-879504351",
      "https://github.com/FurqanRaza4343",
      "https://www.instagram.com/furqanraza4343/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "NeuralHub",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Furqan.dev",
    url: "https://furqan.dev",
    description:
      "AI Engineer & GenAI Developer portfolio. Specializing in Generative AI, Conversational AI, AI Agents, RAG, and Intelligent Automation.",
    author: {
      "@type": "Person",
      name: "Furqan Raza",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
