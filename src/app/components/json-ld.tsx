const BASE_URL = "https://alexandergv2117.dev";

interface JsonLdProps {
  title: string;
  description: string;
  locale: string;
}

export default function JsonLd({ title, description, locale }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Alexander Garcia",
        jobTitle: locale === "en" ? "Software Engineer" : "Ingeniero de Software",
        description,
        url: BASE_URL,
        email: "alexandergv2117@gmail.com",
        image: {
          "@type": "ImageObject",
          url: `${BASE_URL}/profile-github.jpg`,
        },
        sameAs: [
          "https://github.com/Alexandergv2117",
          "https://www.linkedin.com/in/alexander-garcia-vizcarra-329765257/",
        ],
        knowsAbout: [
          "Node.js",
          "NestJS",
          "TypeScript",
          "Docker",
          "Docker Swarm",
          "AWS",
          "Terraform",
          "Ansible",
          "GitHub Actions",
          "Next.js",
          "React",
          "PostgreSQL",
          "MongoDB",
          "Microservices",
          "CI/CD",
          "Caddy Server",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: title,
        description,
        inLanguage: locale === "en" ? "en-US" : "es-MX",
        author: { "@id": `${BASE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
