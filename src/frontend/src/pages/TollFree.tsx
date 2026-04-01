import ServicePage from "../components/ServicePage";
export default function TollFree() {
  return (
    <ServicePage
      title="Toll Free - 1800"
      description="Get a professional 1800 toll-free number for your business. Make it easy for customers to reach you free of charge, with automated IVR and intelligent call forwarding."
      heroImage="/assets/site-images/banner-mac.png"
      features={[
        {
          img: "/assets/site-images/Google-Voice-icon.png",
          title: "Toll Free 1800",
          description:
            "Get a dedicated 1800 toll-free number that customers can call at no cost from anywhere in India.",
        },
        {
          img: "/assets/site-images/ivr.png",
          title: "Automated IVR",
          description:
            "Greet callers with a professional IVR menu and route them to the right department automatically.",
        },
        {
          img: "/assets/site-images/big-call-transfer.png",
          title: "Call Forwarding",
          description:
            "Forward incoming calls to mobile numbers, landlines, or SIP phones based on business hours.",
        },
        {
          img: "/assets/site-images/call_recording_at.png",
          title: "Call Recording",
          description:
            "Record all incoming toll-free calls for quality assurance and compliance purposes.",
        },
        {
          img: "/assets/site-images/crm.png",
          title: "CRM Integration",
          description:
            "Sync all toll-free call data with your CRM for complete customer interaction tracking.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Reporting",
          description:
            "Monitor call volumes, peak hours, geographic distribution, and team performance.",
        },
      ]}
    />
  );
}
