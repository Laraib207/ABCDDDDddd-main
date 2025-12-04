import React from "react";
import Certificate from "../../components/Certificate";

/**
 * Page route: /certificate
 * Put this file at src/app/certificate/page.js
 */

export const metadata = {
  title: "Certificate — Veer Bharat",
  description: "Official certificate preview and download",
};

export default function CertificatePage() {
  // customize details or load them dynamically from API if needed
  const details = [
    { label: "Certificate No.", value: "US-FDA-3001 / USD" },
    { label: "Registration", value: "Food & Drug Registration" },
    { label: "Date", value: "01 Nov 2025" },
    { label: "Issued To", value: "Veer Bharat" },
  ];

  return <Certificate imageSrc="/images/Certifacte.jpeg" title="Certificate of Registration" subtitle="Food & Drug Registration" details={details} />;
}
