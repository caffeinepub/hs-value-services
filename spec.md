# HS Value Services Website

## Current State
New project with empty backend actor and default frontend scaffold. User uploaded a PHP-based website for "HS Value Services" (hisarsms.com) - a unified messaging platform offering SMS, Voice, Email, and WhatsApp services.

## Requested Changes (Diff)

### Add
- Full multi-page React SPA replicating the original PHP website
- Navigation header with logo and all service links
- Home page: hero section, voice services, SMS services, email section, WhatsApp section, CTA
- About page: company overview and story
- Service detail pages: Bulk SMS, OTP/SMS Alert, Voice SMS, Virtual Receptionist, Missed Call, Click 2 Call, IVR/Dialer, Toll Free Number, Email Services, WhatsApp Business API, Lead Management System
- Contact page with address, phone, email, Google Maps embed
- Privacy Policy page
- Terms & Conditions page
- Footer with links, contact info, WhatsApp widget link
- All extracted images from new-image/ folder used (path: /assets/site-images/)

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Set up React Router for multi-page navigation
2. Build reusable Layout component (Header + Footer)
3. Build Home page with all sections
4. Build About page
5. Build 11 service detail pages (each with hero + features cards)
6. Build Contact page with form (non-functional, just UI) and map embed
7. Build Privacy Policy and T&C pages
8. Use existing images from /assets/site-images/
9. Primary color theme: teal/blue (#176e88, #0CB4CE)
