// src/animations/index.ts
// 📦 Export همه چیز از یک جا

// Components
export { 
    AnimatedSection, 
    AnimatedStagger, 
    AnimatedStaggerItem 
  } from './components/AnimatedSection';
  
  export { 
    AnimatedCard, 
    SubtleCard, 
    StrongCard 
  } from './components/AnimatedCard';
  
  export { 
    NumberCounter,
    PercentageCounter,
    CurrencyCounter,
    YearsCounter,
  } from './components/NumberCounter';
  
  export { 
    RippleButton,
    PrimaryRippleButton,
    SecondaryRippleButton,
    OutlineRippleButton,
  } from './components/RippleButton';
  
  // Hooks
  export { 
    useScrollAnimation, 
    useScrollAnimationCallback,
    useStaggeredAnimation,
  } from './hooks/useScrollAnimation';
  
  export { 
    useCounter, 
    counterPresets 
  } from './hooks/useCounter';
  
  export { 
    useRipple, 
    useCenterRipple 
  } from './hooks/useRipple';
  
  // Variants
  export * from './config/variants';