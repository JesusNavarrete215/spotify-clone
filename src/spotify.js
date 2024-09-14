//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/# -> to get everything up and running
//we need an endpoint 

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = "http://localhost:3000/"

const clientId = "54584d3a412e45fc961ddb66d8b9d2a3"

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
    ];

export const getTokenFromUrl =() => {
    return window.location.hash //it goes to the url and then to the # (hash) in the url 
    .substring(1) //get the first substring
    .split('&')// split at the &
    .reduce((initial, item) => {
        //#accessToken=mysupersecretekey&name=sonny&abc
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial
    }, {})
}

export const loginUrl =`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`