import APIRequest from "../utils/config/axios.config";

export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resuelve solo si STATUS es menor de 500
        }
    }); // https://randomuser.me/api

}
 