import ServicePage from "../components/ServicePage";
export default function BulkSMS() {
  return (
    <ServicePage
      title="SMS Gateway"
      description="Send bulk SMS to millions of customers instantly. Our SMS Gateway provides reliable delivery with real-time reports, API integration, and advanced contact management."
      heroImage="/assets/site-images/sms.png"
      heroImageAlt="Bulk SMS Gateway"
      features={[
        {
          img: "/assets/site-images/Google-Voice-icon.png",
          title: "Bulk SMS",
          description:
            "Upload large data files in CSV/XLS/XLSX format and send millions of messages at once.",
        },
        {
          img: "/assets/site-images/download.png",
          title: "OTP / Alerts",
          description:
            "Send automated alerts, reminders, and OTP to customers via fastest route for instant delivery.",
        },
        {
          img: "/assets/site-images/api.png",
          title: "API Integration",
          description:
            "Seamlessly integrate with core banking systems, CRM, ERP, and custom applications via REST API.",
        },
        {
          img: "/assets/site-images/dash.png",
          title: "Analytics Dashboard",
          description:
            "Monitor campaign performance with a real-time dashboard showing delivery and click statistics.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Detailed Reporting",
          description:
            "Access comprehensive reports with delivery status, failed messages, and campaign analytics.",
        },
        {
          img: "/assets/site-images/manage.png",
          title: "Manage Contacts",
          description:
            "Organize contacts into groups, import/export lists, and manage opt-outs efficiently.",
        },
      ]}
    />
  );
}
