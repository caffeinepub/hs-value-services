import ServicePage from "../components/ServicePage";
export default function LMS() {
  return (
    <ServicePage
      title="Lead Management System"
      description="Capture, manage, distribute, and track leads efficiently with our powerful LMS platform. Automate your lead funnel and maximize conversion rates for your sales team."
      heroImage="/assets/site-images/lms.png"
      features={[
        {
          img: "/assets/site-images/register-icon.png",
          title: "Lead Capture",
          description:
            "Automatically capture leads from web forms, missed calls, SMS, and API integrations.",
        },
        {
          img: "/assets/site-images/manage.png",
          title: "Campaign Management",
          description:
            "Create and manage multiple marketing campaigns with different lead sources and tracking.",
        },
        {
          img: "/assets/site-images/big-call-transfer.png",
          title: "Lead Distribution",
          description:
            "Automatically distribute leads to sales executives based on geography, product, or round-robin.",
        },
        {
          img: "/assets/site-images/dash.png",
          title: "Analytics",
          description:
            "Real-time analytics on lead sources, conversion rates, and sales team performance.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Reporting",
          description:
            "Detailed reports on lead funnel, conversion metrics, and ROI by campaign and channel.",
        },
        {
          img: "/assets/site-images/crm.png",
          title: "CRM Integration",
          description:
            "Sync leads with Salesforce, Zoho, or any CRM via API for a unified sales pipeline.",
        },
      ]}
    />
  );
}
