import React, { createContext, useContext, useState, useCallback } from 'react';

const BookingModalContext = createContext(null);

export function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState(null);

  const openModal = useCallback((prefillData) => {
    setPrefill(prefillData ?? null);
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal, prefill }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error('useBookingModal must be used within a BookingModalProvider');
  return ctx;
}
