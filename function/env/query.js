function getEnvFromPath(pathString) {
    const url = new URL(pathString, 'http://example.com'); // Base URL is required for URL parsing
    return url.searchParams.get('var');
}

// Example usage
const pathString = 'http://server.wonk.app/expose/env?var=OPENAI_API_KEY';
const env = getEnvFromPath(pathString);

console.log(`The environment variable is: ${env}`);