"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear form after successful submission
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
        console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto ">
      {submitStatus === "success" && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
         {` Thank you for your message! I'll get back to you soon.`}
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
          Sorry, something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 dark">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#282829] px-3 py-2 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2 dark">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#282829] px-3 py-2 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2 dark">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#282829] px-3 py-2 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
            placeholder="Your message..."
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="secondary"
            className="w-full sm:w-auto gap-2"
            disabled={isSubmitting}
          >
            <FaPaperPlane
              className={`text-sm ${isSubmitting ? "animate-pulse" : ""}`}
            />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
