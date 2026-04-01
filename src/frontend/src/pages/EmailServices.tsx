import ServicePage from "../components/ServicePage";
export default function EmailServices() {
  return (
    <ServicePage
      title="Email Service"
      description="Send transactional emails from your apps and run large-scale email marketing campaigns. High deliverability, beautiful templates, and detailed analytics included."
      heroImage="/assets/site-images/email_marketing_campaingns.png"
      features={[
        {
          img: "/assets/site-images/manage.png",
          title: "Campaign Management",
          description:
            "Create, schedule, and manage unlimited email campaigns with our intuitive campaign builder.",
        },
        {
          img: "/assets/site-images/emailer-design.png",
          title: "Email Templates",
          description:
            "Choose from hundreds of professionally designed responsive email templates or build your own.",
        },
        {
          img: "/assets/site-images/Reporting.png",
          title: "Reporting",
          description:
            "Track open rates, click rates, bounces, and conversions with real-time email analytics.",
        },
        {
          img: "/assets/site-images/api.png",
          title: "API Integration",
          description:
            "Send transactional emails from any application using our simple SMTP or REST API.",
        },
        {
          img: "/assets/site-images/manage.png",
          title: "List Management",
          description:
            "Manage subscriber lists with segmentation, opt-out handling, and bounce management.",
        },
        {
          img: "/assets/site-images/dash.png",
          title: "A/B Testing",
          description:
            "Test different subject lines, content, and send times to optimize campaign performance.",
        },
      ]}
    />
  );
}
