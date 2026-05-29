"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send, ArrowRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/vvvvkt@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
          _subject: `New Classic Delight Inquiry from ${formData.name}`,
          _template: "table",
        }),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON Server Response:", text);
        
        // Strip HTML tags to get the readable text message from FormSubmit (e.g. activation notice)
        const cleanText = text
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        
        const previewText = cleanText.length > 200 
          ? cleanText.substring(0, 200) + "..." 
          : cleanText;

        // If the text contains activation keywords, let's make it a friendlier prompt
        if (cleanText.toLowerCase().includes("activate") || cleanText.toLowerCase().includes("confirm")) {
          throw new Error(
            `Activation Required: ${previewText}. FormSubmit has sent a confirmation email to the recipient. Please check your inbox and click activate.`
          );
        }

        throw new Error(
          `FormSubmit Message: ${previewText}`
        );
      }

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage(error.message || "Failed to send inquiry. Please try again.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="relative min-h-[500px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center p-8 md:p-12"
          >
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-8 relative"
            >
              <motion.div
                className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CheckCircle2 className="w-10 h-10 text-green-400 relative z-10" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold mb-4 text-white tracking-tight"
            >
              Message Sent!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed max-w-md mb-8"
            >
              Thank you for reaching out. Your inquiry has been forwarded to our team. We will get back to you shortly.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleReset}
              className="
                group
                flex
                items-center
                gap-2
                bg-white/10
                hover:bg-white/20
                text-white
                px-6
                py-3
                rounded-2xl
                border
                border-white/10
                transition-all
                duration-300
                text-sm
                font-medium
              "
            >
              Send Another Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Error Notification */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Failed to send message</p>
                  <p className="text-red-400/80">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            {/* Form Fields Container */}
            <div className={`space-y-5 transition-opacity duration-300 ${status === "submitting" ? "opacity-50 pointer-events-none" : ""}`}>
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    bg-black/30
                    border
                    border-white/10
                    focus:border-[#f26522]/50
                    focus:ring-2
                    focus:ring-[#f26522]/10
                    rounded-2xl
                    px-6
                    py-4
                    outline-none
                    text-white
                    transition-all
                    duration-300
                    placeholder:text-white/30
                  "
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    bg-black/30
                    border
                    border-white/10
                    focus:border-[#f26522]/50
                    focus:ring-2
                    focus:ring-[#f26522]/10
                    rounded-2xl
                    px-6
                    py-4
                    outline-none
                    text-white
                    transition-all
                    duration-300
                    placeholder:text-white/30
                  "
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="
                    w-full
                    bg-black/30
                    border
                    border-white/10
                    focus:border-[#f26522]/50
                    focus:ring-2
                    focus:ring-[#f26522]/10
                    rounded-2xl
                    px-6
                    py-4
                    outline-none
                    text-white
                    transition-all
                    duration-300
                    placeholder:text-white/30
                  "
                />
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement"
                  rows={5}
                  required
                  className="
                    w-full
                    bg-black/30
                    border
                    border-white/10
                    focus:border-[#f26522]/50
                    focus:ring-2
                    focus:ring-[#f26522]/10
                    rounded-2xl
                    px-6
                    py-4
                    outline-none
                    text-white
                    transition-all
                    duration-300
                    placeholder:text-white/30
                    resize-none
                  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="
                w-full
                bg-[#f26522]
                text-white
                px-8
                py-4
                rounded-2xl
                hover:scale-[1.02]
                active:scale-[0.98]
                disabled:scale-100
                disabled:opacity-75
                disabled:cursor-not-allowed
                transition-all
                duration-300
                font-semibold
                tracking-wide
                flex
                items-center
                justify-center
                gap-2
                shadow-lg
                shadow-[#f26522]/20
                hover:shadow-[#f26522]/30
              "
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
