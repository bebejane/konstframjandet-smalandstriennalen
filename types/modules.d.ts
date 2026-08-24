import { AriaAttributes, DOMAttributes } from "react";

declare module "*.json" {
  const value: any;
  export default value;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
};