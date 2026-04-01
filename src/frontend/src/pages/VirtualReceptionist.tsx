import ServicePage from "../components/ServicePage";
export default function VirtualReceptionist() {
  return (
    <ServicePage
      title="Virtual Receptionist"
      subtitle="HelloConnect"
      description="Get a single professional voice number for your business with automated call forwarding, greetings, and routing. Never miss a business call again."
      heroImage="/assets/site-images/virtual-receptionist.png"
      features={[
        {
          img: "/assets/site-images/phone_speech_bubble.png",
          title: "Single Number",
          description:
            "One professional number routes to all your team members based on availability and department.",
        },
        {
          img: "/assets/site-images/Google-Voice-icon.png",
          title: "Custom Greetings",
          description:
            "Record professional greetings and hold music to create a great first impression.",
        },
        {
          img: "/assets/site-images/big-call-transfer.png",
          title: "Call Transfer",
          description:
            "Automatically transfer calls to the right department or person based on IVR selections.",
        },
        {
          img: "/assets/site-images/call_recording_at.png",
          title: "Call Recording",
          description:
            "Record all calls for quality assurance, training, and compliance purposes.",
        },
        {
          img: "/assets/site-images/crm.png",
          title: "CRM Integration",
          description:
            "Sync call data with your CRM to maintain complete customer interaction history.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Reporting",
          description:
            "Detailed call logs, duration reports, and team performance analytics.",
        },
      ]}
    />
  );
}
