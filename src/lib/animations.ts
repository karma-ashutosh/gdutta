import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

export const slideIn: Variants = {
  initial: { 
    opacity: 0,
    x: -20
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5
    }
  }
}

export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
} 