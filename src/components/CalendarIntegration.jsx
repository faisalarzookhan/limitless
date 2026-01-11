import React, { useState } from 'react';
import { format, addDays, isSameDay } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  X,
  ChevronLeft,
  CalendarDays,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

const CalendarIntegration = ({
  onSchedule,
  onClose,
  userName = 'Limitless Operator',
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [step, setStep] = useState(1); // 1: Date selection, 2: Time selection, 3: Confirmation

  const availableDates = Array.from({ length: 30 }, (_, i) =>
    addDays(new Date(), i)
  );

  const generateAvailableTimes = date => {
    const today = new Date();
    const isToday = isSameDay(date, today);

    if (isToday) {
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
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  return (
    <div className="fixed inset-0 bg-[#0e1114]/80 backdrop-blur-2xl flex items-center justify-center z-[200] p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-[#0e1114] border border-white/10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] w-full max-w-lg overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1ba6d6]/5 to-transparent pointer-events-none"></div>
        
        <div className="p-10 relative z-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">
                Neural <span className="text-[#1ba6d6]">Scheduling</span>
              </h3>
              <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-[0.2em]">
                {step === 1 && 'Deploy Window Selection'}
                {step === 2 && 'Synchronize Telemetry Time'}
                {step === 3 && 'Final Implementation Review'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[350px] overflow-y-auto pr-2 scrollbar-hide">
                  {availableDates.map((date, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-1 border transition-all duration-300 ${
                        isSameDay(date, selectedDate)
                          ? 'bg-[#1ba6d6] border-[#1ba6d6] text-white shadow-[0_0_20px_rgba(27,166,214,0.3)]'
                          : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-[0.6rem] font-black uppercase tracking-widest">{format(date, 'EEE')}</div>
                      <div className="text-[0.85rem] font-black">{format(date, 'd')}</div>
                      <div className="text-[0.55rem] font-black uppercase tracking-widest opacity-40">{format(date, 'MMM')}</div>
                    </button>
                  ))}
                </div>
                <div className="bg-[#1ba6d6]/5 border border-[#1ba6d6]/10 p-6 rounded-2xl">
                  <p className="text-[0.6rem] text-white/60 font-black uppercase tracking-widest leading-relaxed">
                    Select an operational window for architectural consultation with a Limitless coordinator.
                  </p>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 bg-[#1ba6d6]/10 rounded-xl flex items-center justify-center text-[#1ba6d6]">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <span className="text-[0.7rem] font-black text-white uppercase tracking-widest">
                    {format(selectedDate, 'MMMM d, yyyy')}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeSelect(time)}
                      className={`p-4 rounded-2xl text-[0.7rem] font-black uppercase tracking-widest border transition-all duration-300 ${
                        time === selectedTime
                          ? 'bg-[#1ba6d6] border-[#1ba6d6] text-white shadow-[0_0_20px_rgba(27,166,214,0.3)]'
                          : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="bg-[#1ba6d6]/5 border border-[#1ba6d6]/20 rounded-[2.5rem] p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="w-24 h-24 text-[#1ba6d6]" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-[#1ba6d6] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(27,166,214,0.4)]">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-[0.4em]">
                      Protocol Summary
                    </h4>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/20">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[0.5rem] font-black text-white/20 uppercase tracking-widest mb-1">Target Date</p>
                        <p className="text-[0.7rem] font-black text-white uppercase tracking-widest">
                          {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/20">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[0.5rem] font-black text-white/20 uppercase tracking-widest mb-1">Telemetry Sync</p>
                        <p className="text-[0.7rem] font-black text-white uppercase tracking-widest">
                          {selectedTime} HOURS
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/20">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[0.5rem] font-black text-white/20 uppercase tracking-widest mb-1">Assignment</p>
                        <p className="text-[0.7rem] font-black text-white uppercase tracking-widest">
                          LIMITLESS ARCHITECT CONSULTATION
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[0.6rem] text-white/30 font-black uppercase tracking-widest leading-relaxed text-center px-6">
                  Confirm the transmission parameters. A neural bridge link will be dispatched to your primary node terminal.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-[0.6rem] font-black text-white/40 hover:text-white uppercase tracking-[0.3em] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Protocol
              </button>
            ) : (
              <button
                onClick={onClose}
                className="text-[0.6rem] font-black text-white/20 hover:text-white uppercase tracking-[0.3em] transition-colors"
              >
                Abort Sequence
              </button>
            )}

            {step === 3 && (
              <button
                onClick={handleConfirm}
                className="px-8 py-5 bg-[#1ba6d6] text-white text-[0.7rem] font-black uppercase tracking-[0.4em] rounded-2xl shadow-[0_0_30px_rgba(27,166,214,0.3)] hover:scale-105 active:scale-95 transition-all duration-500 flex items-center gap-3"
              >
                Authorize Link
                <Zap className="w-4 h-4" />
              </button>
            )}
            
            {step < 3 && step === 2 && (
              <button
                disabled
                className="px-8 py-5 bg-white/5 text-white/10 text-[0.7rem] font-black uppercase tracking-[0.4em] rounded-2xl cursor-not-allowed"
              >
                Select Vector
              </button>
            )}
            
            {step === 1 && (
               <div className="text-[0.5rem] font-black text-white/10 uppercase tracking-[0.3em]">
                 Phase 01: Date Logic
               </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CalendarIntegration;
