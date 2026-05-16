import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings } from 'lucide-react';
import './FeatureCard.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='feature-card'>
      <img src={icon} alt='icon' className='feature-icon' />
      <h3 className='feature-title'>{title}</h3>
      <p className='feature-description'>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;