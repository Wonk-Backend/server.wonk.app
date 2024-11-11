function getEnvFromPath(pathString) {
    const url = new URL(pathString, 'http://example.com'); // Base URL is required for URL parsing
    return url.searchParams.get('var');
}

const env = getEnvFromPath(window.location.href);

if (!env) {
    console.error('Query parameter "var" is missing');
    alert('Query parameter "var" is missing (Does the variable exist?)');
} else {
    console.log(`The environment variable is: ${env}`);
    // Fetch the environment variable value from the server
    fetch(`http://server.wonk.app/expose/env?var=${env}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error(data.error);
                alert(data.error);
            } else {
                console.log(`The value of the environment variable ${env} is: ${data[env]}`);
                alert(`The value of the environment variable ${env} is: ${data[env]}`);
            }
        })
        .catch(error => {
            console.error('Error fetching the environment variable:', error);
            alert('Error fetching the environment variable');
        });
}