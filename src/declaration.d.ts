declare module "*.svg" {
    import * as React from "react";
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export const ReactComponent: typeof content;
    export default content;
  }