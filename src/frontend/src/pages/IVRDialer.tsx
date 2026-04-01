import ServicePage from "../components/ServicePage";
export default function IVRDialer() {
  return (
    <ServicePage
      title="IVR / Dialer"
      description="Hosted cloud telephony with customizable IVR menus for incoming and outgoing calls. Build sophisticated call flows without expensive hardware or technical expertise."
      heroImage="/assets/site-images/ivr.png"
      features={[
        {
          img: "/assets/site-images/img_281322.png",
          title: "Customized Flow",
          description:
            "Design complex IVR call flows with multi-level menus using our visual drag-and-drop builder.",
        },
        {
          img: "/assets/site-images/call_recording_at.png",
          title: "Call Recording",
          description:
            "Record all inbound and outbound calls with automatic cloud storage and retrieval.",
        },
        {
          img: "/assets/site-images/crm.png",
          title: "CRM Integration",
          description:
            "Integrate with your CRM to display caller information and log all call activities automatically.",
        },
        {
          img: "/assets/site-images/api.png",
          title: "API Integration",
          description:
            "Connect your IVR system to backend databases for dynamic, data-driven call flows.",
        },
        {
          img: "/assets/site-images/sms-icon-blue-300x300.png",
          title: "SMS Alerts",
          description:
            "Automatically send SMS confirmations and alerts based on IVR interactions and outcomes.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Reporting",
          description:
            "Complete analytics on call volumes, IVR navigation paths, and agent performance metrics.",
        },
      ]}
    />
  );
}
