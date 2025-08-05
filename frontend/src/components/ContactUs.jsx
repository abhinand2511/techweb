import axios from "axios";
import { useState } from "react";
import { FaArrowRight, FaCheck, FaExclamationTriangle } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstname.trim()) {
      setSubmitStatus({
        success: false,
        message: "First name is required"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email"
      });
      return;
    }

    if (!formData.message.trim()) {
      setSubmitStatus({
        success: false,
        message: "Message is required"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact", 
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      setSubmitStatus({
        success: true,
        message: response.data.message || "Message sent successfully!"
      });

      // Reset form
      setFormData({
        firstname: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        success: false,
        message: err.response?.data?.error || "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-manrope text-gray-800 pt-8 min-h-screen">
      <section className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 py-16 items-start">
        <div className="text">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">Let's connect</h1>
          <p className="text-lg text-gray-600">
            Have questions or want to discuss a project? Fill out the form and we'll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
          <div>
            <label className="block mb-2 font-medium">First Name *</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#610218]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#610218]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="123-456-7890"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#610218]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#610218]"
            />
          </div>

          {submitStatus.message && (
            <div className={`p-4 rounded-lg flex items-start gap-3 ${
              submitStatus.success 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}>
              {submitStatus.success ? (
                <FaCheck className="mt-1 flex-shrink-0" />
              ) : (
                <FaExclamationTriangle className="mt-1 flex-shrink-0" />
              )}
              <span>{submitStatus.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`group flex items-center justify-center gap-2 bg-[#610218] text-white px-6 py-3 rounded-full hover:bg-[#4a0112] transition-colors duration-300 w-full ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Submit Now
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;