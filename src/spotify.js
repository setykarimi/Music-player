import axios from "axios";


const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "442809f27ceb405fa44168c87978be58";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const LoginEndpoint = `${authEndpoint}response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("20%")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config
    })
}

export default apiClient;