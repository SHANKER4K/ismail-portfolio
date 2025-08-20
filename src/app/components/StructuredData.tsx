import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ismail Medjahdi",
    jobTitle: "Full-Stack Developer",
    description:
      "Passionate Full-Stack Developer specializing in React and Next.js",
    url: "https://ismailshk.vercel.app",
    image: "https://ismailshk.vercel.app/Logo Monochrome SHK003.png",
    sameAs: [
      "https://www.linkedin.com/in/medjahdi-ismail-826a10257/",
      "https://github.com/SHANKER4K",
      "https://x.com/ShkCode",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "DZ",
      addressLocality: "Algeria",
    },
    email: "medjahdiismail1998@gmail.com",
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Full-Stack Development",
      "Web Development",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Full-Stack Web Development With Next.js",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "NextJs",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Front End Development with React",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "HackerRank",
        },
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
