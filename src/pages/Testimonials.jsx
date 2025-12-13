import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiStar,
  HiCheckCircle,
  HiSparkles,
  HiUserCircle,
  HiFilter,
  HiChevronDown,
  HiChevronUp
} from 'react-icons/hi';

const Testimonials = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [expandedReview, setExpandedReview] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'TechVision Solutions',
      industry: 'Technology',
      rating: 5,
      date: 'November 2023',
      text: 'Limitless transformed our business with a custom CRM system. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40%! The attention to detail and commitment to understanding our business needs was exceptional.',
      project: 'Custom CRM System',
      image: null,
      verified: true,
      longReview: 'Working with Limitless Infotech Solution has been an absolute game-changer for our company. From the initial consultation to the final deployment, every step was handled with utmost professionalism. The CRM system they built is not just a tool; it\'s a complete transformation of how we manage customer relationships. The team took the time to understand our unique challenges and delivered a solution that exceeded our expectations. Our sales team loves the intuitive interface, and the automated workflows have saved us countless hours. I highly recommend Limitless to any business looking for a technology partner that truly cares about your success.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'StyleHub Fashion',
      industry: 'Retail',
      rating: 5,
      date: 'October 2023',
      text: 'The e-commerce platform they built for us is stunning and incredibly efficient. Sales have tripled since launch. Highly recommend their services! The AI-powered recommendations have been a game-changer for our business.',
      project: 'E-commerce Platform',
      image: null,
      verified: true,
      longReview: 'I cannot express enough how thrilled we are with our new e-commerce platform. Limitless not only delivered a beautiful website but also integrated cutting-edge features like AI-powered product recommendations that have significantly boosted our average order value. The mobile experience is flawless, and our customers love how easy it is to shop on their phones. The team was incredibly patient with our requests and always found solutions to our challenges. Since launching, we\'ve seen a 300% increase in online sales. This investment has paid for itself many times over.'
    },
    {
      id: 3,
      name: 'Ahmed Ali',
      role: 'Operations Manager',
      company: 'LogiTrack Logistics',
      industry: 'Logistics',
      rating: 5,
      date: 'September 2023',
      text: 'Outstanding mobile app development! The app is intuitive, fast, and our clients love it. The team\'s expertise in automation saved us countless hours. Real-time tracking has revolutionized our operations.',
      project: 'Logistics Mobile App',
      image: null,
      verified: true,
      longReview: 'The mobile app developed by Limitless has transformed our logistics operations completely. Our drivers find it easy to use, even those who aren\'t tech-savvy. The real-time GPS tracking gives our customers peace of mind, and the route optimization feature has reduced our fuel costs by 30%. The offline functionality ensures that deliveries continue smoothly even in areas with poor network coverage. The support team has been fantastic, always available to help with any questions. This app has given us a competitive edge in the market.'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      role: 'Director',
      company: 'EduLearn Academy',
      industry: 'Education',
      rating: 5,
      date: 'August 2023',
      text: 'Working with Limitless was a game-changer. They built a complete learning management system that exceeded all our requirements. True professionals! Student engagement has increased dramatically.',
      project: 'Learning Management System',
      image: null,
      verified: true,
      longReview: 'As an educational institution, we needed a platform that could handle video streaming, assessments, progress tracking, and student engagement. Limitless delivered all of this and more. The LMS they built is robust, scalable, and incredibly user-friendly. Both our teachers and students have adapted to it quickly. The analytics dashboard provides valuable insights into student performance, helping us improve our teaching methods. The system handles thousands of concurrent users without any performance issues. We\'re extremely satisfied with the results.'
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'FinSecure Banking',
      industry: 'Finance',
      rating: 5,
      date: 'July 2023',
      text: 'Exceptional work on our payment gateway! Security was paramount, and they delivered a solution that meets all compliance requirements. The system is fast, reliable, and secure. Couldn\'t ask for better.',
      project: 'Payment Gateway',
      image: null,
      verified: true,
      longReview: 'In the financial sector, security and reliability are non-negotiable. Limitless understood this from day one and built a payment gateway that not only meets but exceeds industry standards. The system handles thousands of transactions per second with 99.99% uptime. The fraud detection mechanisms are sophisticated, and the multi-currency support has enabled us to expand internationally. The code quality is exceptional, and the documentation is comprehensive. This is the kind of partner you want for mission-critical systems.'
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'HealthCare Plus',
      industry: 'Healthcare',
      rating: 5,
      date: 'June 2023',
      text: 'Our patient portal has been a huge success! HIPAA compliant, user-friendly, and packed with features. Patients can now book appointments, access records, and communicate with doctors seamlessly. Amazing work!',
      project: 'Patient Portal',
      image: null,
      verified: true,
      longReview: 'Limitless built us a patient portal that has revolutionized how we interact with our patients. The telemedicine integration was implemented flawlessly, which proved invaluable during the pandemic. The system is fully HIPAA compliant, giving us and our patients peace of mind about data security. Appointment bookings have increased by 150%, and our administrative staff now has more time to focus on patient care rather than paperwork. The mobile app is particularly popular with our younger patients. Highly recommended!'
    },
    {
      id: 7,
      name: 'David Martinez',
      role: 'Owner',
      company: 'Restaurant Chain Group',
      industry: 'Food & Beverage',
      rating: 5,
      date: 'May 2023',
      text: 'The restaurant management system is perfect for our needs! POS integration, inventory tracking, and customer loyalty program all in one place. Orders are processed faster, and waste has decreased significantly.',
      project: 'Restaurant Management System',
      image: null,
      verified: true,
      longReview: 'Managing multiple restaurant locations was a nightmare before Limitless came into the picture. Their management system has centralized everything - from inventory across all locations to customer loyalty programs. The POS integration is seamless, and the real-time reporting helps us make quick decisions. We\'ve reduced food waste by 45% thanks to the intelligent inventory tracking. The customer-facing mobile app has increased repeat business through our loyalty program. The ROI on this investment was achieved within six months.'
    },
    {
      id: 8,
      name: 'Jennifer Wilson',
      role: 'Founder & CEO',
      company: 'PropertyHub Realty',
      industry: 'Real Estate',
      rating: 5,
      date: 'April 2023',
      text: 'Outstanding real estate platform! The virtual tour feature is phenomenal. Our listings get 4x more views now, and the lead generation has skyrocketed. Best decision we made for our business.',
      project: 'Real Estate Platform',
      image: null,
      verified: true,
      longReview: 'The real estate platform created by Limitless has given us a significant competitive advantage. The 3D virtual tours are incredibly immersive, allowing potential buyers to explore properties from anywhere in the world. The mortgage calculator and agent matching features have improved our lead quality substantially. The admin panel makes managing hundreds of listings effortless. Our agents love the mobile app, which allows them to update listings on the go. Since launch, our lead conversion rate has increased by 95%. Absolutely worth every penny.'
    },
    {
      id: 9,
      name: 'Robert Anderson',
      role: 'VP of Operations',
      company: 'Manufacturing Corp',
      industry: 'Manufacturing',
      rating: 5,
      date: 'March 2023',
      text: 'Custom ERP system that integrated all our departments seamlessly! Production efficiency is up 65%, and we finally have real-time visibility across the entire operation. Limitless delivered exactly what we needed.',
      project: 'Enterprise ERP System',
      image: null,
      verified: true,
      longReview: 'Implementing an ERP system is no small feat, especially for a manufacturing company with complex processes. Limitless approached this challenge methodically, taking the time to understand each department\'s workflow. The result is a system that has brought all our operations under one roof - from procurement to production to sales. The real-time dashboards provide visibility we never had before. Integration with our existing machinery and systems was handled expertly. The training provided to our staff was comprehensive. This system has transformed how we operate.'
    },
    {
      id: 10,
      name: 'Lisa Thompson',
      role: 'Co-Founder',
      company: 'FitLife Wellness',
      industry: 'Health & Fitness',
      rating: 5,
      date: 'February 2023',
      text: 'Amazing fitness app! User engagement is through the roof. The workout tracking, meal planning, and social features work perfectly together. Our user base has grown 1000% since launch. Thank you, Limitless!',
      project: 'Fitness Mobile App',
      image: null,
      verified: true,
      longReview: 'We had a vision for a fitness app that would truly engage users and help them achieve their health goals. Limitless not only understood our vision but enhanced it with their technical expertise. The app is beautifully designed, incredibly smooth, and packed with features. The workout tracking with video demonstrations, personalized meal plans, and social community features have created an addictive user experience. Our retention rate is 85%, which is exceptional in the fitness app market. The backend analytics help us continuously improve the user experience. Limitless is an outstanding partner.'
    },
    {
      id: 11,
      name: 'James Brown',
      role: 'Director of IT',
      company: 'Global Trading Co',
      industry: 'Import/Export',
      rating: 5,
      date: 'January 2023',
      text: 'Automated our entire shipping and documentation process. What used to take days now takes hours. The system handles customs paperwork, tracking, and compliance automatically. Incredible efficiency gains!',
      project: 'Trade Automation System',
      image: null,
      verified: true,
      longReview: 'International trade involves complex documentation and compliance requirements. Limitless built us an automation system that has eliminated manual errors and drastically reduced processing time. The system automatically generates customs documents, tracks shipments across multiple carriers, and ensures compliance with international regulations. The integration with our accounting system has streamlined our entire operation. Our team can now handle 3x the volume with the same headcount. The support team at Limitless is always responsive and helpful. Highly recommended for any business dealing with international trade.'
    },
    {
      id: 12,
      name: 'Emily Davis',
      role: 'Chief Customer Officer',
      company: 'SupportDesk Inc',
      industry: 'Customer Service',
      rating: 5,
      date: 'December 2022',
      text: 'AI chatbot reduced our support ticket volume by 60%! It handles common queries brilliantly and escalates complex issues to human agents smoothly. Customer satisfaction scores are up 75%. Fantastic solution!',
      project: 'AI Customer Support System',
      image: null,
      verified: true,
      longReview: 'Implementing an AI chatbot was crucial for scaling our customer support. Limitless created an intelligent system that understands natural language, learns from interactions, and provides accurate responses. The seamless escalation to human agents ensures customers always get the help they need. The multi-language support has enabled us to serve international customers better. The analytics dashboard shows us exactly where customers need help, allowing us to improve our products and documentation. Our support costs have decreased while customer satisfaction has increased - a true win-win. Limitless delivered beyond our expectations.'
    }
  ];

  const industries = ['all', 'Technology', 'Retail', 'Logistics', 'Education', 'Finance', 'Healthcare', 'Food & Beverage', 'Real Estate', 'Manufacturing', 'Health & Fitness', 'Import/Export', 'Customer Service'];
  const ratings = ['all', '5', '4', '3'];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesRating = selectedRating === 'all' || testimonial.rating.toString() === selectedRating;
    const matchesIndustry = selectedIndustry === 'all' || testimonial.industry === selectedIndustry;
    return matchesRating && matchesIndustry;
  });

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);
  const totalReviews = testimonials.length;

  const toggleExpanded = (id) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="container-custom px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-8 animate-fade-in-down">
              <HiSparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Client Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              What Our Clients Say
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Real feedback from real clients who have transformed their businesses with Limitless
            </p>

            {/* Overall Rating */}
            <div className="flex items-center justify-center space-x-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{averageRating}</div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{totalReviews}</div>
                <div className="text-sm text-white/80">Total Reviews</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Verified Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            {/* Industry Filter */}
            <div className="flex items-center space-x-3">
              <HiFilter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Industry:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="select-field py-2 px-4 text-sm"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="flex items-center space-x-3">
              <HiStar className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Rating:</span>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="select-field py-2 px-4 text-sm"
              >
                {ratings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold text-primary-600 dark:text-primary-400">{filteredTestimonials.length}</span> review{filteredTestimonials.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    {/* Info */}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        {testimonial.verified && (
                          <HiCheckCircle className="w-5 h-5 text-green-500" title="Verified Client" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {testimonial.industry} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="w-5 h-5 text-yellow-500" />
                    ))}
                  </div>
                </div>

                {/* Project Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold mb-4">
                  Project: {testimonial.project}
                </div>

                {/* Review Text */}
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    "{expandedReview === testimonial.id ? testimonial.longReview : testimonial.text}"
                  </p>
                </div>

                {/* Read More Button */}
                {testimonial.longReview && (
                  <button
                    onClick={() => toggleExpanded(testimonial.id)}
                    className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline text-sm"
                  >
                    <span>{expandedReview === testimonial.id ? 'Read Less' : 'Read Full Review'}</span>
                    {expandedReview === testimonial.id ? (
                      <HiChevronUp className="w-4 h-4" />
                    ) : (
                      <HiChevronDown className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <HiUserCircle className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No reviews found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters to see more reviews
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                100% Verified Reviews
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every testimonial is from real clients with completed projects
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiStar className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {averageRating} Average Rating
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Consistently high ratings across all projects and industries
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUserCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                50+ Happy Clients
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Growing list of satisfied clients across multiple industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a project that you'll be excited to review
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
