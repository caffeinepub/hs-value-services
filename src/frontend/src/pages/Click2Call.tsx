import ServicePage from "../components/ServicePage";
export default function Click2Call() {
  return (
    <ServicePage
      title="Click-2-Call"
      description="Enable website visitors to instantly connect with your team with a single click. Increase conversions and improve customer satisfaction with seamless call connectivity."
      heroImage="/assets/site-images/Click2call-Logo.png"
      features={[
        {
          img: "/assets/site-images/icon2-1.png",
          title: "Widget Integration",
          description:
            "Embed a click-to-call widget on your website with just a few lines of JavaScript code.",
        },
        {
          img: "/assets/site-images/api.png",
          title: "REST API",
          description:
            "Trigger calls programmatically from any application using our simple REST API.",
        },
        {
          img: "/assets/site-images/call_recording_at.png",
          title: "Call Recording",
          description:
            "Automatically record all click-to-call conversations for quality and compliance.",
        },
        {
          img: "/assets/site-images/crm.png",
          title: "CRM Integration",
          description:
            "Sync click-to-call data with Salesforce, Zoho, HubSpot, and other popular CRMs.",
        },
        {
          img: "/assets/site-images/dash.png",
          title: "Real-Time Dashboard",
          description:
            "Monitor all click-to-call activities with live dashboards and instant notifications.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Analytics",
          description:
            "Track conversion rates, call durations, and ROI with detailed analytical reports.",
        },
      ]}
    />
  );
}
