interface Window {
    /** Webflow API instance array */
    Webflow: any & {
        _: any;
    }[];
    /** Environment variables exposed to the client */
    Env: {
        /** Global variable */
        VITE_GLOBAL_VAR: string;
    };
}