'use client';

import { motion } from 'framer-motion';
import { WhatsApp } from '@/components/icons';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/393888248473"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-[#25D366] hover:bg-[#20ba5a] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsApp className="w-8 h-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
