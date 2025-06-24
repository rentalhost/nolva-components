declare global {
    interface Window {
        VLibras: {
            Widget: new () => void;
        };
    }
}
declare function VLibrasComponent(): import("react/jsx-runtime").JSX.Element;
export { VLibrasComponent as VLibras };
