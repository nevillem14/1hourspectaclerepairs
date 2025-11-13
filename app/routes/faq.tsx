// File: app/routes/FAQ.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQType = {
  question: string;
  answer: string;
};

const faqs: FAQType[] = [
  {
    question: "What is a domain, and how does it help my brand?",
    answer:
      "A domain is your website’s unique address on the internet, like `yourbusiness.com`. It’s what customers type to find you online. A great domain boosts your brand by making it easy to remember, professional, and trustworthy. For example, a custom domain like `YourName.com` looks more polished than a generic one, helping you stand out, build customer trust, and create a consistent identity across your website and email (e.g., `info@YourName.com`). It’s like your business’s digital storefront sign—clear, inviting, and uniquely yours!",
  },
  {
    question: "How does web hosting work?",
    answer:
      "Web hosting is like renting a space on the internet to keep your website live and accessible 24/7. Think of it as a super-powered computer (called a server) that stores your website’s files—pages, images, and more—and delivers them to visitors when they type your domain (like `yourbusiness.com`) into their browser. Our hosting ensures your site loads fast, stays secure, and is always online, so customers can find you anytime. With our packages, hosting is included, along with updates and support, making it hassle-free for you to shine online!",
  },
  {
    question: "What is included in each web design package?",
    answer:
      "Each package includes a set number of pages, mobile-friendly design, SEO features, and email support. Tier 1 offers 1–4 pages with Basic SEO, Tier 2 includes up to 10 pages with Standard SEO, Tier 3 provides over 10 pages with Advanced SEO, and the Custom package offers unlimited pages with a full SEO package and additional features. All packages include 1 email account.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes, you can upgrade your package at any time. Simply contact our support team via email, and we’ll guide you through the process to transition to a higher tier or a custom solution that fits your needs.",
  },
  {
    question: "Why do I have to pay a recurring monthly or annual fee?",
    answer:
      "The recurring fee keeps your website and email services running smoothly and up to date, so you can focus on your business without worry. It covers essentials like hosting your website on fast, secure servers, maintaining your professional email accounts, and providing ongoing support whenever you need help. Plus, we regularly update your site’s performance, security, and SEO to ensure it stays modern and easy for customers to find. Think of it as a small investment to keep your online presence strong, reliable, and growing—month after month or year after year, with the flexibility to save up to 15% by choosing annual billing!",
  },
  {
    question: "How does the email package work?",
    answer:
      "The email package provides additional email accounts for R25/month each, billed annually at R300. Each account includes a 3GB mailbox, access from anywhere, device syncing, anti-virus, and anti-spam protection. These accounts are ideal for businesses needing professional email solutions.",
  },
  {
    question: "What does 'Mobile-friendly' mean?",
    answer:
      "Mobile-friendly means your website is designed to look and function well on smartphones and tablets. It includes responsive design, ensuring content adjusts seamlessly to different screen sizes for an optimal user experience.",
  },
  {
    question: "What is SEO, and why does it matter for my website?",
    answer:
      "SEO, or Search Engine Optimization, is like giving your website a megaphone to stand out on Google and other search engines. It involves optimizing your site so it appears higher in search results when customers look for services like yours. With our SEO packages, we make your website easier to find by using the right keywords, improving content, and ensuring it loads fast and works well on phones. This means more visitors, more customers, and a bigger impact for your business—without you needing to understand the technical details!",
  },
  {
    question: "What is included in the SEO features?",
    answer:
      "SEO features vary by package: Basic SEO (Tier 1) includes on-page optimization like meta tags and keywords. Standard SEO (Tier 2) adds content optimization and basic link-building. Advanced SEO (Tier 3) includes comprehensive strategies like technical SEO and analytics. The Custom package offers a full SEO package tailored to your goals.",
  },
  {
    question: "How do I contact sales for the Custom package?",
    answer:
      "For the Custom package, reach out to our sales team via the 'Contact Sales' button on the pricing page or email us directly. We’ll discuss your specific needs and provide a tailored quote.",
  },
  {
    question: "Need to get your business online?",
    answer:
      "buy a domain name, get world class hosting, access amazing web tools",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Find answers to common questions about our web design and email
          packages.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-lg">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ translateY: -4 }}
              className="border border-gray-200 rounded-lg mb-4 bg-white shadow"
              initial={false}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left text-gray-900"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="p-6 pt-0 text-gray-600"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto my-16 px-4 py-16 rounded-lg animate-aws-gradient-aws-variantA">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Still Have Questions?
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Contact our support team for personalized assistance.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-gray-800 text-white hover:bg-gray-900 py-2 px-6 rounded-lg font-medium transition">
            Contact Support
          </button>
        </div>
      </div>
    </main>
  );
}
