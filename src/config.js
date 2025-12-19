export const config = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    apiTimeout: import.meta.env.VITE_API_TIMEOUT || '10000',
    environment: import.meta.env.VITE_ENVIRONMENT || 'development',
    debug: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true',
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
}