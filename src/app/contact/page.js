import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiPackage,
} from "react-icons/fi";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Veer Bharat for premium edible oils — bulk orders, partnerships and distributorship. Call +91 9266328444 or email info@veerbharat.com.",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "Noida Sector 61",
      subDetails: "Plot No. 40, Noida Sector 61, Uttar Pradesh 201304 (India)",
      href: "https://www.magicbricks.com/Sector-61-in-Noida-Overview",
      external: true,
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 9266328444",
      subDetails: "Mon – Sat (9:00 AM – 6:00 PM)",
      href: "tel:+919266328444",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@veerbharat.com",
      subDetails: "We reply within 24 hours",
      href: "mailto:info@veerbharat.com",
    },
  ];

  const products = [
    "Soyabean Oil",
    "Mustard Oil",
    "Palm Oil",
    "Sunflower Oil",
    "Rice Bran Oil",
    "Brand Rice",
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: "var(--vb-ivory)", color: "var(--vb-ink)" }}>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(183,137,45,0.10)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(139,42,63,0.08)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="vb-eyebrow">We'd Love to Hear From You</span>
          <h1 className="vb-heading mt-5 text-4xl md:text-5xl" style={{ fontFamily: "var(--vb-font-head)" }}>
            Get In <span className="vb-heading-accent">Touch</span>
          </h1>
          <div className="vb-divider vb-divider--center mt-6" />
          <p className="vb-lead mx-auto mt-6 max-w-2xl">
            Connect with <span className="font-semibold" style={{ color: "var(--vb-ink)" }}>Veer Bharat</span> for premium quality edible oils.
            We're here to serve your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Form */}
          <div className="vb-card p-6 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--vb-font-head)", color: "var(--vb-ink)" }}>Send us a Message</h3>
              <p style={{ color: "var(--vb-muted)" }}>Fill out the form and we'll respond promptly.</p>
            </div>

            <form action="https://formspree.io/f/mkgpgdov" method="POST" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vb-ink)" }}>Your Name *</label>
                  <input type="text" name="name" required placeholder="Enter your name" className="vb-input" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vb-ink)" }}>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 9266328444" className="vb-input" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vb-ink)" }}>Email Address *</label>
                <input type="email" name="email" required placeholder="your@email.com" className="vb-input" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vb-ink)" }}>Subject *</label>
                <select name="subject" required className="vb-input">
                  <option value="">Select a subject</option>
                  <option value="bulk-order">Bulk Order Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="distributor">Become a Distributor</option>
                  <option value="product-info">Product Information</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vb-ink)" }}>Your Message *</label>
                <textarea name="message" required rows={5} placeholder="Tell us about your requirements..." className="vb-input resize-none" />
              </div>

              <button type="submit" className="vb-btn-solid w-full justify-center group">
                <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Info column */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.external ? "_blank" : "_self"}
                rel={info.external ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <div className="vb-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl group-hover:scale-110 transition-transform duration-300" style={{ background: "var(--vb-gold-soft)", color: "var(--vb-gold)" }}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1" style={{ color: "var(--vb-ink)" }}>{info.title}</h4>
                      <p className="font-semibold mb-1" style={{ color: "var(--vb-maroon)" }}>{info.details}</p>
                      {info.subDetails && (
                        <p className="text-sm flex items-center gap-2" style={{ color: "var(--vb-muted)" }}>
                          {info.title === "Call Us" && <FiClock className="w-4 h-4" />}
                          {info.subDetails}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Products */}
            <div className="vb-card p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "var(--vb-ink)" }}>
                <FiPackage className="w-5 h-5" style={{ color: "var(--vb-gold)" }} />
                Our Premium Products
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-center transition-transform duration-300 hover:scale-105"
                    style={{ background: "var(--vb-ivory-2)", border: "1px solid var(--vb-line)", color: "var(--vb-ink)" }}
                  >
                    {product}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="vb-card p-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.43851558299!2d77.370186875334!3d28.626568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER!5e0!3m2!1sen!2sin!4v1704700000000!5m2!1sen!2sin"
                width="600"
                height="380"
                style={{ border: 0, width: "100%", borderRadius: 12 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Veer Bharat location"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl p-8 md:p-12 text-center" style={{ background: "var(--vb-ink)" }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--vb-font-head)", color: "var(--vb-ivory)" }}>
            Ready to Partner with Us?
          </h3>
          <p className="text-lg mb-7 max-w-2xl mx-auto" style={{ color: "#9FB0C6" }}>
            Join hands with Veer Bharat for quality edible oils. Perfect for retailers, distributors and bulk buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919266328444" className="vb-btn-gold">Call Us Now</a>
            <a href="mailto:info@veerbharat.com" className="vb-btn-ghost" style={{ color: "#fff", borderColor: "rgba(251,247,239,0.35)" }}>
              Email Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .vb-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: var(--vb-cream);
          border: 1px solid var(--vb-line);
          color: var(--vb-ink);
          transition: border-color .2s ease, box-shadow .2s ease;
          font-size: 0.95rem;
        }
        .vb-input::placeholder { color: #9aa7ba; }
        .vb-input:focus {
          outline: none;
          border-color: var(--vb-gold);
          box-shadow: 0 0 0 3px rgba(183,137,45,0.12);
        }
      `}</style>
    </section>
  );
}
