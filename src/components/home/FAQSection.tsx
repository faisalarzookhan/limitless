import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const faqs = [
  {
    question: "What services does Limitless Infotech Solution offer?",
    answer:
      "We offer comprehensive technology solutions including Web Development, Mobile App Development, Custom Software & Systems, CRM & Task Management Apps, Business Automation & AI Integration, IoT Solutions, Network Installation, and Server Setup. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications may take 2-4 months. Mobile apps generally require 3-6 months, and custom enterprise software can take 3-12 months. We provide detailed timelines during the planning phase and keep you updated throughout development.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with cutting-edge technologies including React, Vue, Angular, Next.js for frontend; Node.js, Python, PHP, .NET for backend; React Native and Flutter for mobile apps; MongoDB, PostgreSQL, MySQL for databases; and AWS, Azure, Google Cloud for cloud infrastructure. We choose the best technology stack for each project based on your specific requirements.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes! We offer comprehensive post-launch support including 24/7 technical assistance, regular updates and maintenance, bug fixes, security patches, performance monitoring, and training. We ensure your systems continue to operate flawlessly and stay up-to-date with the latest technologies.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Project costs vary based on scope, complexity, timeline, and required features. We believe in transparent pricing and provide detailed quotes after understanding your requirements. Fill out our client requirements form or contact us directly for a personalized quote tailored to your budget and needs.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Absolutely! We specialize in integrating with existing systems and can enhance, upgrade, or build upon your current infrastructure. Whether you need to modernize legacy systems or add new features, our team has the expertise to ensure seamless integration.",
  },
  {
    question:
      "What makes Limitless different from other development companies?",
    answer:
      "Our commitment to Total Security, True Uniqueness, and Royal Client Experience sets us apart. We don't just build software – we create transformative solutions that are secure, scalable, and truly unique to your business. Our dedicated team provides white-glove service, ensuring your success at every step.",
  },
  {
    question: "Do you offer custom CRM solutions?",
    answer:
      "Yes! We specialize in custom CRM development tailored to your business processes. Our CRM solutions include customer management, sales tracking, lead management, automated workflows, reporting and analytics, and seamless integration with your existing tools. We build systems that adapt to your needs, not the other way around.",
  },
];

const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <HiChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                ) : (
                  <HiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openFaq === index && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-700 animate-slide-down">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
