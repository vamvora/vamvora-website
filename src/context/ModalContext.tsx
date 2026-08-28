import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ModalContextType {
  isConsultationOpen: boolean;
  preselectedService: string;
  openConsultation: (service?: string) => void;
  closeConsultation: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const openConsultation = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    } else {
      setPreselectedService('');
    }
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isConsultationOpen,
        preselectedService,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useConsultationModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useConsultationModal must be used within a ModalProvider');
  }
  return context;
};
