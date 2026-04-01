import ServicePage from "../components/ServicePage";
export default function VoiceSMS() {
  return (
    <ServicePage
      title="Voice SMS"
      description="Reach your customers with pre-recorded voice messages delivered directly to their phones. Ideal for announcements, reminders, promotions, and political campaigns."
      heroImage="/assets/site-images/promotional-sms.png"
      features={[
        {
          img: "/assets/site-images/Google-Voice-icon.png",
          title: "Real-Time Dialing",
          description:
            "Instantly dial thousands of numbers simultaneously with our powerful dialing engine.",
        },
        {
          img: "/assets/site-images/dash.png",
          title: "High Scalability",
          description:
            "Scale from hundreds to millions of voice calls per day with no infrastructure changes.",
        },
        {
          img: "/assets/site-images/api.png",
          title: "Dashboard",
          description:
            "Track campaign progress in real-time with our intuitive voice campaign dashboard.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Detailed Reporting",
          description:
            "Get comprehensive analytics on call delivery, listen time, and campaign effectiveness.",
        },
        {
          img: "/assets/site-images/manage.png",
          title: "Custom Audio",
          description:
            "Upload your own audio files (MP3/WAV) or use our text-to-speech engine for messages.",
        },
        {
          img: "/assets/site-images/crm.png",
          title: "CRM Integration",
          description:
            "Integrate with your CRM to personalize voice messages with customer data automatically.",
        },
      ]}
    />
  );
}
