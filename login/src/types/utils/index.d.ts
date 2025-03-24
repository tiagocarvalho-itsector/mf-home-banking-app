declare module "utils/FallbackRemote" {
    type ThisProps = {
        name: string;
    };
    const FallbackRemote: ({ name }: ThisProps) => import("react/jsx-runtime").JSX.Element;
    export default FallbackRemote;
}
declare module "utils/Loading" {
    import React from "react";
    const Loading: React.FC;
    export default Loading;
}
