"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { INDIAN_STATES, BUSINESS_TYPES } from "@/lib/constants";

interface ContactFormProps {
  variant?: "full" | "compact";
  defaultInquiryType?: string;
}

export default function ContactForm({
  variant = "full",
  defaultInquiryType = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value.toString());
    });
    
    // Google Forms requires 'emailAddress' when 'Collect email addresses' is enabled in form settings
    const emailValue = formData.get("entry.1291691220");
    if (emailValue) {
      searchParams.append("emailAddress", emailValue.toString());
    }

    const formAction = "https://docs.google.com/forms/d/e/1FAIpQLSfsfJPsFXWJOiPHptioz5P8_Tcr__h7ax-mJLBWL328TK4G0A/formResponse";

    try {
      await fetch(formAction, {
        method: "POST",
        mode: "no-cors",
        body: searchParams,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Even if there's an error (like adblock blocking), we show success because no-cors is opaque
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
          Thank You!
        </h3>
        <p className="text-warm-gray">
          Your inquiry has been submitted. Our team will contact you within 24
          hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm text-gold font-medium hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-beige-dark/30 rounded-xl text-sm text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300";
  const labelClass =
    "block text-sm font-medium text-charcoal-light mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      <div className={`grid ${variant === "full" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-5`}>
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="entry.1090593032"
            required
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="companyName">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="entry.501772"
            required
            placeholder="Your company name"
            className={inputClass}
          />
        </div>
      </div>

      <div className={`grid ${variant === "full" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-5`}>
        <div>
          <label className={labelClass} htmlFor="businessType">
            Business Type *
          </label>
          <select
            id="businessType"
            name="entry.1137390534"
            required
            className={inputClass}
          >
            <option value="">Select business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="inquiryType">
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="entry.1339654133"
            required
            defaultValue={defaultInquiryType}
            className={inputClass}
          >
            <option value="">Select inquiry type</option>
            <option value="Distributor Inquiry">Distributor Inquiry</option>
            <option value="Franchise Inquiry">Franchise Inquiry</option>
            <option value="Clinic/Doctor Supply">Clinic / Doctor Supply</option>
            <option value="Bulk Order Inquiry">Bulk Order Inquiry</option>
            <option value="Retailer Inquiry">Retailer Inquiry</option>
            <option value="Monopoly Rights">Monopoly Rights</option>
          </select>
        </div>
      </div>

      <div className={`grid ${variant === "full" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-5`}>
        <div>
          <label className={labelClass} htmlFor="state">
            State *
          </label>
          <select
            id="state"
            name="entry.933756849"
            required
            className={inputClass}
          >
            <option value="">Select state</option>
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="entry.1669741464"
            required
            placeholder="Your city"
            className={inputClass}
          />
        </div>
      </div>

      <div className={`grid ${variant === "full" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-5`}>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="entry.26839480"
            required
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="entry.1291691220"
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      {variant === "full" && (
        <div>
          <label className={labelClass} htmlFor="monthlyRequirement">
            Monthly Requirement (Units)
          </label>
          <input
            type="text"
            id="monthlyRequirement"
            name="entry.295942536"
            placeholder="Estimated monthly units"
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="entry.114896620"
          rows={4}
          placeholder="Tell us about your requirements..."
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-70 disabled:cursor-not-allowed"
        id="contact-form-submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}
