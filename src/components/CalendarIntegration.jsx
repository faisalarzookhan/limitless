import React, { useState } from 'react';
import { format, addDays, isBefore, isSameDay } from 'date-fns';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineCheckCircle,
  HiOutlineX,
} from 'react-icons/hi';

const CalendarIntegration = ({
  onSchedule,
  onClose,
  userName = 'Auralis User',
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [step, setStep] = useState(1); // 1: Date selection, 2: Time selection, 3: Confirmation

  // Generate available dates (next 30 days)
  const availableDates = Array.from({ length: 30 }, (_, i) =>
    addDays(new Date(), i)
  );

  // Generate available times for a given date
  const generateAvailableTimes = date => {
    const today = new Date();
    const isToday = isSameDay(date, today);

    if (isToday) {
      // If it's today, only show times after current time
      const currentHour = today.getHours();
      const currentMinute = today.getMinutes();

      const times = [];
      for (let hour = currentHour; hour < 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          if (
            hour > currentHour ||
            (hour === currentHour && minute >= currentMinute)
          ) {
            times.push(
              `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
            );
          }
        }
      }
      return times;
    } else {
      // For other days, show all business hours
      const times = [];
      for (let hour = 9; hour < 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          times.push(
            `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
          );
        }
      }
      return times;
    }
  };

  const handleDateSelect = date => {
    setSelectedDate(date);
    setAvailableTimes(generateAvailableTimes(date));
    setStep(2);
  };

  const handleTimeSelect = time => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleConfirm = () => {
    const scheduledDateTime = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':').map(Number);
    scheduledDateTime.setHours(hours, minutes, 0, 0);

    onSchedule({
      date: selectedDate,
      time: selectedTime,
      dateTime: scheduledDateTime,
      userName,
    });
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {step === 1 && 'Select Date'}
              {step === 2 && 'Select Time'}
              {step === 3 && 'Confirm Meeting'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HiOutlineX className="w-6 h-6" />
            </button>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {availableDates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className={`p-3 rounded-lg text-center text-sm font-medium transition-colors ${
                      isSameDay(date, selectedDate)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    <div className="font-semibold">{format(date, 'EEE')}</div>
                    <div className="text-xs">{format(date, 'MMM d')}</div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Select a date for your consultation with Auralis AI
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <HiOutlineCalendar className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-900 dark:text-white">
                  {format(selectedDate, 'MMMM d, yyyy')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {availableTimes.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-3 rounded-lg text-center text-sm font-medium transition-colors ${
                      time === selectedTime
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Select a time for your consultation
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <HiOutlineCheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Meeting Details
                  </h4>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <HiOutlineCalendar className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <HiOutlineClock className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {selectedTime}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <HiOutlineUser className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Auralis AI Consultation
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Confirm this meeting time for your consultation with Auralis AI.
                You'll receive a calendar invite with the meeting details.
              </p>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
              >
                Back
              </button>
            )}

            <div className="ml-auto space-x-3">
              {step < 3 && (
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              )}

              {step === 3 && (
                <button
                  onClick={handleConfirm}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium"
                >
                  Confirm Meeting
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarIntegration;
