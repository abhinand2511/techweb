import React from "react";
import logo from "../assets/whatwedo.jpg";
import plus from "../assets/plus.png";

const WhatWeDo = () => {
  return (
    <div className="font-sans text-black-800 pt-8">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-1 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="pl-46">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Financial Consulting <br />
            Strategic Insights for <br />
            Your Business Growth
          </h1>
          <p className="text-lg text-black-600">
            At <span className="font-bold">Techspiration</span>, we help
            businesses{" "}
            <span className="font-bold">
              unlock their full financial potential
            </span>
            . Our expert <span className="font-bold">financial consulting</span>{" "}
            services guide you through key decisions to ensure sustainable
            growth, operational efficiency, and financial stability in today’s
            fast-paced market.{" "}
          </p>
        </div>
        <div className=" w-full h-64 flex items-center justify-center rounded-sm w-full h-auto">
          <span className="text-gray-500 ">
            <img
              src={logo}
              alt="what we do people's pic"
              className="w-full  rounded-none"
            />
          </span>
        </div>
      </section>

      {/* Red Clarity Banner */}
      <section className="bg-[#800000] text-2xl text-slate-100 text-center py-24 px-16">
        We focus on <span className="font-bold">clarity</span>,{" "}
        <span className="font-bold">actionable advice</span>, and{" "}
        <span className="font-bold">results</span>, helping you navigate complex
        financial landscapes with confidence.
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <h2 className="text-6xl font-semibold mb-10">
          Why Choose Techspiration?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-center border">
          <div>
            <h3 className="text-green-700 text-3xl font-semibold mb-2">
              Expert Guidance:
            </h3>
            <p className="text-2xl text-black-700 pb-3">
              We’re not just consultants; we’re your partners in making
              impactful financial decisions.{" "}
            </p>
          </div>
          <div>
            <h3 className="text-red-300 text-3xl font-semibold mb-2">
              Fast, Clear Solutions:
            </h3>
            <p className="text-2xl text-black-700 pb-3">
              Get straight-to-the-point advice that works for your business—no
              jargon, just results.{" "}
            </p>
          </div>
          <div className="border pr-4 pt-2">
            <h3 className="text-yellow-700 text-3xl font-semibold mb-2">
              Proven Success:
            </h3>
            <p className="text-2xl text-black-700 pb-3">
              We've helped 200+ businesses streamline their finances, secure
              funding, and achieve compliance.{" "}
            </p>
          </div>
          <div>
            <h3 className="text-blue-500 text-3xl font-semibold mb-2">
              Client-Focused:
            </h3>
            <p className="text-2xl text-black-700 pb-3">
              Your business needs come first. We craft solutions that work for
              you, not a one-size-fits-all approach.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-[#830000] mb-10 pb-5">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border p-6 rounded shadow-sm">
              <h3 className="text-3xl text-green-700 font-bold pb-2 mb-2">
                1. Tailored Financial Strategy
              </h3>
              <p className="text-2xl text-black-700 pb-3">
                Whether you’re a startup or a growing enterprise, we provide
                customized financial strategies that align with your specific
                business goals.
              </p>
              <p className="text-2xl text-black-700 pb-10">
                We help you identify growth opportunities, manage cash flow, and
                enhance profitability with a sharp, forward-thinking approach.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow-sm">
              <h3 className="text-3xl text-orange-600 font-bold pb-2 mb-2">
                2. Regulatory Compliance & Licensing
              </h3>
              <p className="text-2xl text-black-700 pb-3">
                Stay ahead of regulatory challenges with our expert registration
                and licensing services .
              </p>
              <p className="text-2xl text-black-700 pb-10">
                We simplify complex processes to help you meet legal
                requirements efficiently, ensuring your business operates
                smoothly in India’s evolving regulatory environment.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow-sm">
              <h3 className="text-3xl text-blue-700 font-bold pb-2 mb-2">
                3. Business Law Advisory
              </h3>
              <p className="text-2xl text-black-700 pb-10">
                Need financing for your next big move? Our business loan
                advisory service helps you secure the right type of
                funding—whether for expansion, working capital, or
                investment—with tailored loan options and strategic financial
                planning.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow-sm">
              <h3 className="text-3xl text-purple-700 font-bold pb-2 mb-2">
                4. Audit & Financial Health Check
              </h3>
              <p className="text-2xl text-black-700 pb-10">
                Our audit services provide a clear snapshot of your business’s
                financial health. We ensure compliance, uncover potential
                inefficiencies, and offer insights into improving profitability
                with data-driven audits that highlight actionable improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section - Aligned left */}
<section className="bg-gray-50 py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-light text-[#830000] mb-10 pb-5">
      Frequently Asked Questions
    </h2>
    <h2 className="text-5xl font-bold text-black mb-10 pb-5">
      We Answered All
    </h2>
    <div className="space-y-0">
      <details className="group border-b border-gray-200 py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          <h3 className="font-semibold text-2xl text-gray-700">
            How do you protect client rights?
          </h3>
          <img
            src={plus}
            alt="Toggle answer"
            className="w-6 h-6 transform group-open:rotate-45 transition-transform"
          />
        </summary>
        <p className="mt-4 text-xl text-gray-600">
          Protecting client rights is one of our core principles. We are
          dedicated to advocating for our clients' best interests and
          diligently safeguarding their rights.
        </p>
      </details>
      
      <details className="group border-b border-gray-200 py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          <h3 className="font-semibold text-2xl text-gray-700">
            What are your achievements in handling legal matters?
          </h3>
          <img
            src={plus}
            alt="Toggle answer"
            className="w-6 h-6 transform group-open:rotate-45 transition-transform"
          />
        </summary>
        <p className="mt-4 text-xl text-gray-600">
          CRN Law Firm has achieved success in a diverse range of legal
          matters. We have protected clients' intellectual property
          rights, providing them with a competitive advantage.
        </p>
      </details>
      
      <details className="group border-b border-gray-200 py-6">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          <h3 className="font-semibold text-2xl text-gray-700">
            How do you handle sensitive family law matters with care?
          </h3>
          <img
            src={plus}
            alt="Toggle answer"
            className="w-6 h-6 transform group-open:rotate-45 transition-transform"
          />
        </summary>
        <p className="mt-4 text-xl text-gray-600">
          We understand the sensitive nature of family law cases. Our
          compassionate team approaches such matters with empathy and
          discretion.
        </p>
      </details>
    </div>
  </div>
</section>
    </div>
  );
};

export default WhatWeDo;
