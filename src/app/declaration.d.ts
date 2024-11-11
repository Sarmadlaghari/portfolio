// declaration.d.ts
declare module "react-animated-numbers" {
    import { ComponentType } from "react";
  
    interface AnimatedNumbersProps {
      includeComma?: boolean;
      animateToNumber: number;
      locale?: string;
      className?: string;
      configs?: (index: number) => { mass: number; friction: number; tension: number };
    }
  
    const AnimatedNumbers: ComponentType<AnimatedNumbersProps>;
    export default AnimatedNumbers;
  }
  