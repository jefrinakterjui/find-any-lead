import { Metadata } from "next";
import ServiceDetails from "../../../../components/modules/Home/ServiceDetails";

const servicesData = {
  "email-deliverability": {
    title: "Email Deliverability Consulting + Management",
    subtitle: "Stop landing in spam. Start reaching the inbox.",
    description: "In the world of cold email, deliverability is everything. If your emails aren't landing in the primary inbox, your copy doesn't matter. Our Deliverability Consulting & Management service is designed to diagnose the root cause of your spam issues and implement a robust fix. We don't just patch the problem; we re-engineer your sender reputation to ensure long-term inbox placement.",
    features: [
      "Comprehensive DNS Audit (SPF, DKIM, DMARC)",
      "Blacklist Monitoring & Delisting",
      "Domain Reputation Repair",
      "Warm-up Infrastructure Management",
      "Inbox Placement Testing",
      "Spam Trap Detection & Removal"
    ],
    benefits: [
      "Recover lost revenue from missed emails",
      "Protect your main domain reputation",
      "Consistently reach the Primary Tab",
      "Scale volume without spam fears"
    ]
  },
  "email-infrastructure": {
    title: "Email Infrastructure Setup + Management",
    subtitle: "A turnkey revenue engine, built for scale.",
    description: "Building a cold email system that can send thousands of emails daily without breaking requires sophisticated engineering. We handle the A-Z of your email infrastructure setup. From procuring seasoned domains to configuring multi-inbox rotation systems, we build a machine that runs on autopilot. You focus on closing deals; we handle the technical heavy lifting.",
    features: [
      "Dedicated IP & Domain Procurement",
      "Multi-Inbox Rotation Setup",
      "Master Inbox Configuration",
      "Automated Script Testing",
      "Appointment Setting Workflow",
      "CRM Integration & Sync"
    ],
    benefits: [
      "Zero technical debt for your team",
      "Infinite scalability on demand",
      "Automated lead-to-meeting flow",
      "Complete system ownership"
    ]
  },
  "lead-list-generation": {
    title: "Lead List Generation Systems Setup",
    subtitle: "High-intent data, sourced in-house.",
    description: "Buying generic lists is a race to the bottom. To win, you need unique, high-intent data. We set up internal systems and processes that allow your team to generate hyper-targeted lead lists in-house. By combining waterfall enrichment, intent signal scraping, and verification pipelines, we ensure you only reach out to prospects who are ready to buy.",
    features: [
      "Waterfall Enrichment Setup",
      "Intent Signal Scraping",
      "Automated Email Verification",
      "ICP Modeling & Segmentation",
      "Decision Maker Identification",
      "Data Cleaning Pipelines"
    ],
    benefits: [
      "Lower cost per lead significantly",
      "Higher relevance = Higher reply rates",
      "Own your data assets completely",
      "Stop relying on outdated databases"
    ]
  }
};

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const service = servicesData[params.slug as keyof typeof servicesData];
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Find Any Lead`,
    description: service.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-slate-500">The service you are looking for does not exist.</p>
      </div>
    );
  }

  return <ServiceDetails service={service} />;
}