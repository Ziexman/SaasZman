"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./globals.css"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return; // Prevent empty submissions

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3s

    window.open(
      `mailto:contact@codecrafter.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Glowing Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-900 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl w-full p-8 backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-extrabold text-center mb-6 neon-text">
          Contact Me from the Future 🚀
        </h1>

        <p className="text-center text-white/70 mb-6">
          Drop me a message and let’s connect across time and space!
        </p>

        <form onSubmit={submitForm} className="space-y-5">
          <motion.div whileHover={{ scale: 1.05 }}>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              className="w-full p-4 neon-input"
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <input
              type="email"
              value={email}
              placeholder="Your Email"
              className="w-full p-4 neon-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <input
              type="text"
              value={subject}
              placeholder="Subject"
              className="w-full p-4 neon-input"
              onChange={(e) => setSubject(e.target.value)}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <textarea
              rows={5}
              value={message}
              placeholder="Your Message"
              className="w-full p-4 neon-input"
              onChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <button type="submit" className="submit">
              Send Message 🚀
            </button>
          </motion.div>
        </form>

        {submitted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-5 text-green-400"
          >
            ✅ Your message has been sent to the future! 🌌
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
