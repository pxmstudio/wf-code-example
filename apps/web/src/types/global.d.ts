/**
 * Extends the Window interface to include custom global properties used in the application.
 */
interface Window {
    /** Webflow API instance array */
    Webflow: any & {
        _: {
            VERSION: string;
        };
    }[];
    /** Environment variables exposed to the client */
    Env: {
        /** Global variable */
        VITE_GLOBAL_VAR: string;
    };
}