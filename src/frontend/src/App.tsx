import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import BulkSMS from "./pages/BulkSMS";
import Click2Call from "./pages/Click2Call";
import Contact from "./pages/Contact";
import EmailServices from "./pages/EmailServices";
import Home from "./pages/Home";
import IVRDialer from "./pages/IVRDialer";
import LMS from "./pages/LMS";
import MissedCall from "./pages/MissedCall";
import OtpSmsAlert from "./pages/OtpSmsAlert";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TollFree from "./pages/TollFree";
import VirtualReceptionist from "./pages/VirtualReceptionist";
import VoiceSMS from "./pages/VoiceSMS";
import WABA from "./pages/WABA";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const bulkSmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bulk-sms",
  component: BulkSMS,
});
const otpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/otp-sms-alert",
  component: OtpSmsAlert,
});
const voiceSmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/voice-sms",
  component: VoiceSMS,
});
const virtualReceptionistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/virtual-receptionist",
  component: VirtualReceptionist,
});
const missedCallRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/missed-call",
  component: MissedCall,
});
const click2CallRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/click-2-call",
  component: Click2Call,
});
const ivrDialerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ivr-dialer",
  component: IVRDialer,
});
const tollFreeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/toll-free",
  component: TollFree,
});
const emailServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/email-services",
  component: EmailServices,
});
const wabaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/waba",
  component: WABA,
});
const lmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lms",
  component: LMS,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});
const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: Terms,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  bulkSmsRoute,
  otpRoute,
  voiceSmsRoute,
  virtualReceptionistRoute,
  missedCallRoute,
  click2CallRoute,
  ivrDialerRoute,
  tollFreeRoute,
  emailServicesRoute,
  wabaRoute,
  lmsRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
