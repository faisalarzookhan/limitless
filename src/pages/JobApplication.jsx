import { useParams } from 'react-router-dom';
import JobApplicationForm from '../components/JobApplicationForm';

const JobApplication = () => {
  const { jobId } = useParams();

  // In a real application, you would fetch job details based on the jobId
  // For now, we'll just render the form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="absolute inset-0 container-custom px-4 md:px-6 lg:px-8" aria-hidden="true">
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>
        <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Apply for Position
            </h1>
            <p className="text-xl text-primary-100">
              Join our team and help us build the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100 dark:border-dark-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  Job Application
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below to apply for the position
                </p>
              </div>
              
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobApplication;