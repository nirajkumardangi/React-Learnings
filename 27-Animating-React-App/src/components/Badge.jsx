import { motion } from 'framer-motion';

export default function Badge({ caption }) {
  return (
    <motion.span animate={{ scale: [1, 1.3, 1] }} className="badge">
      {caption}
    </motion.span>
  );
}
