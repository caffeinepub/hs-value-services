import ServicePage from "../components/ServicePage";
export default function OtpSmsAlert() {
  return (
    <ServicePage
      title="OTP / SMS Alert"
      description="Deliver real-time SMS alerts and OTPs to your customers via the fastest route with near-perfect delivery rates. Perfect for banking, e-commerce, and fintech applications."
      heroImage="/assets/site-images/bulk-sms-udaipur.png"
      features={[
        {
          img: "/assets/site-images/api.png",
          title: "API Integration",
          description:
            "RESTful API integration with your existing applications for seamless OTP delivery.",
        },
        {
          img: "/assets/site-images/sms-icon-blue-300x300.png",
          title: "Custom SenderIDs",
          description:
            "Use branded SenderIDs for your OTP and alert messages to build customer trust.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Scheduling",
          description:
            "Schedule SMS alerts for specific times and dates to reach customers at the right moment.",
        },
        {
          img: "/assets/site-images/dash.png",
          title: "Real-Time Reports",
          description:
            "Get instant delivery confirmations and detailed reports on your OTP and alert campaigns.",
        },
        {
          img: "/assets/site-images/manage.png",
          title: "High Throughput",
          description:
            "Process millions of OTPs per hour with our high-capacity infrastructure built for peak loads.",
        },
        {
          img: "/assets/site-images/Google-Voice-icon.png",
          title: "Failover Routes",
          description:
            "Automatic failover to backup routes ensures your critical OTPs always reach their destination.",
        },
      ]}
    />
  );
}
