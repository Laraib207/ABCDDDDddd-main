"use client";

import React from "react";
import Image from "next/image";

/**
 * Certificate component
 * Props:
 *  - imageSrc (string) e.g. "/images/Certifacte.jpeg"
 *  - title (string)
 *  - subtitle (string)
 *  - details (array of {label, value})
 *
 * This component includes:
 *  - print button (window.print)
 *  - download image link (works for images in public/)
 */

export default function Certificate({
  imageSrc = "/images/Certifacte.jpeg",
  title = "Certificate of Registration",
  subtitle = "Certified Product / Organization",
  details = [
    { label: "Certificate No.", value: "XXX-2025-001" },
    { label: "Date", value: "01 Nov 2025" },
    { label: "Issued To", value: "Veer Bharat Foods" },
    { label: "Verified By", value: "Authority Name" },
  ],
}) {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-neutral-50 via-amber-50 to-yellow-50 py-12 px-4">
      <div className="max-w-4xl w-full">
        {/* Navbar with 3 icons */}
        <div className="flex items-center justify-center gap-6 mb-8 bg-white rounded-lg shadow-md p-4">
          {/* Certificate */}
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Certificate</span>
          </a>

          {/* View Brochure */}
          <a
            href="/images/Brochure.png"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm font-medium">View Brochure</span>
          </a>

          {/* Download Brochure */}
          <a
            href="/images/Brochure.png"
            download
            className="flex flex-col items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-medium">Download Brochure</span>
          </a>
        </div>

        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-amber-900">
              {title}
            </h1>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow"
            >
              Print
            </button>

            {/* Download button: direct link to image in public folder */}
            <a
              href={imageSrc}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-amber-200 text-amber-800 font-semibold shadow hover:bg-amber-50"
            >
              Download
            </a>
          </div>
        </div>

        {/* Certificate container */}
        <div
          id="certificate-card"
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100"
          style={{ printColorAdjust: "exact" }}
        >
          {/* Certificate header band */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase font-bold tracking-wider">Certificate</div>
                <div className="text-lg md:text-xl font-black">Official Registration</div>
              </div>
              <div className="text-xs md:text-sm text-white/90">Ref: 2025/CB/01</div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* LEFT: big certificate image */}
            <div className="md:col-span-2">
              <div className="border rounded-lg overflow-hidden bg-gray-50 shadow-inner">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={imageSrc}
                    alt="Certificate"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* small caption under the image */}
              <div className="mt-4 text-sm text-gray-600">
                Example certificate — keep your real certificate image in <code>/public/images/</code> and update the path.
              </div>
l            </div>

            {/* RIGHT: metadata / details */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <div className="text-xs text-amber-800 font-bold uppercase">Details</div>
                <div className="mt-3 space-y-2">
                  {details.map((d, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <div className="text-gray-700 font-medium">{d.label}</div>
                      <div className="text-gray-600">{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-amber-100 p-4 shadow-sm">
                <div className="text-xs text-amber-800 font-bold uppercase">Verified Seal</div>
                <div className="mt-3 text-sm text-gray-700">This certificate is verified by authorized body and issued after strict checks.</div>

                <div className="mt-4">
                  <div className="text-sm text-gray-800 font-bold">Signature</div>
                  <div className="mt-3 h-12 border-t border-gray-200" />
                  <div className="text-xs text-gray-500 mt-2">Manager / Issuing Authority</div>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500">
                Tip: Use the Print button for a clean printout (choose "Scale: 100%" in print dialog).
              </div>
            </div>
          </div>
        </div>

        {/* Footer small CTA */}
        <div className="mt-6 text-center text-sm text-gray-700">
          Want a downloadable PDF version? I can add a client-side PDF exporter (html2pdf/html2canvas) — tell me if you want that.
        </div>
      </div>
    </div>
  );
}
