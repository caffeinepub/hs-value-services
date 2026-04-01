import ServicePage from "../components/ServicePage";
export default function MissedCall() {
  return (
    <ServicePage
      title="Missed Call Service"
      subtitle="Missed Hello"
      description="Leverage the power of missed calls for marketing campaigns, lead verification, surveys, polling, and more. Zero-cost engagement for your customers."
      heroImage="/assets/site-images/missedcall-reply-lt1.png"
      features={[
        {
          img: "/assets/site-images/register-icon.png",
          title: "Lead Capture",
          description:
            "Capture leads instantly when customers give a missed call to your dedicated number.",
        },
        {
          img: "/assets/site-images/sms-icon-blue-300x300.png",
          title: "Auto Reply",
          description:
            "Automatically send SMS or WhatsApp reply when a missed call is received.",
        },
        {
          img: "/assets/site-images/api.png",
          title: "API Integration",
          description:
            "Push missed call data to your CRM or backend in real-time via webhooks and REST API.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Reporting",
          description:
            "Real-time dashboard and reports on missed call volume, geographic data, and conversions.",
        },
        {
          img: "/assets/site-images/chat-1.png",
          title: "Survey & Polling",
          description:
            "Conduct surveys and polls using multiple missed call numbers for different options.",
        },
        {
          img: "/assets/site-images/manage.png",
          title: "Campaign Management",
          description:
            "Create and manage multiple missed call campaigns for different products and services.",
        },
      ]}
    />
  );
}
