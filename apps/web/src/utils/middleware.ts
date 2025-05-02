export default async function middleware() {
    injectEnv();
}

function injectEnv() {
    window.Env = {
        VITE_GLOBAL_VAR: import.meta.env.VITE_GLOBAL_VAR,
    }
}