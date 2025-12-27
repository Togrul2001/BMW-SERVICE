import { motion } from "framer-motion";

export function BMWLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.div
      className={`${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer black ring */}
        <circle cx="100" cy="100" r="98" fill="#000" />

        {/* Inner ring */}
        <circle cx="100" cy="100" r="85" fill="#111" />

        {/* BMW text */}
        <text
          x="100"
          y="42"
          textAnchor="middle"
          fill="white"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="6"
        >
          
        </text>

        {/* Quadrants */}
        <motion.path
          d="M100 100 L100 40 A60 60 0 0 1 160 100 Z"
          fill="#1C69D4"
        />
        <motion.path
          d="M100 100 L160 100 A60 60 0 0 1 100 160 Z"
          fill="#fff"
        />
        <motion.path
          d="M100 100 L100 160 A60 60 0 0 1 40 100 Z"
          fill="#1C69D4"
        />
        <motion.path
          d="M100 100 L40 100 A60 60 0 0 1 100 40 Z"
          fill="#fff"
        />

        {/* Center circle border */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="black"
          strokeWidth="2"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}
