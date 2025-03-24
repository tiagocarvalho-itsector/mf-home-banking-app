declare module "utils/FallbackRemote" {
    type ThisProps = {
        name: string;
    };
    const FallbackRemote: ({ name }: ThisProps) => import("react/jsx-runtime").JSX.Element;
    export default FallbackRemote;
}
