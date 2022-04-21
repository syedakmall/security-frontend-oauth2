import axios from "axios"
import { LoginUserDto } from "../pages"

export const BASE_URL = 'http://localhost:8080/'

export const getCredentials = () => {
    return axios.get(BASE_URL + "cred", { method: 'GET', withCredentials: true })
}


export const logIn = (loginDto: LoginUserDto): Promise<any> => {
    let bodyFormData = new FormData();
    bodyFormData.append("username", loginDto.username);
    bodyFormData.append("password", loginDto.password);

    return fetch(BASE_URL + "login", {
        method: "POST",
        credentials: "include",
        body: bodyFormData,
    });
};