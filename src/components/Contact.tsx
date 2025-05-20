import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import GradientButton from './ui/GradientButton';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdoqzqzq"; // Replace with your Formspree endpoint after signup

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      title: 'Our Location',
      details: '7 Sylvania Terrace, Hammonds Plains, NS Canada',
    },
    {
      icon: <Mail className="h-5 w-5 text-primary-600" />,
      title: 'Email Address',
      details: 'info@verdantiq.com',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <SectionHeader
          subtitle="Get in Touch"
          title="Start Your Journey with AI for Good"
          description="Ready to harness the power of AI for good? We're here to help you create positive change with responsible technology."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary-50 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{info.title}</h4>
                    <p className="text-neutral-600">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm animate-grow">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="text-green-600 font-semibold">Thank you for your message! We will get back to you soon.</div>
            ) : (
            <form 
              action={FORMSPREE_ENDPOINT} 
              method="POST" 
              onSubmit={() => setSubmitted(true)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  required
                ></textarea>
              </div>

              <GradientButton primary type="submit" className="flex items-center gap-2">
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </GradientButton>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;