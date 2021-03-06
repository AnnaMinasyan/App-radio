import authApi from "./authInstance"
import qs from 'query-string';
import keys from "../keys";

export interface IgetMenuDatasMethodResponse   {
    [key:string]: any,

}
interface IDATA {
    getMenuDatas(): Promise<any>;
    getCities(): Promise<any>
}
class Static implements IDATA {
    async getMenuDatas() {
        try {

            const response = await authApi.get(`${keys.API_URL}/radios.json`,);

            return response.data
        } catch (ex) {
            throw new Error(ex);
        }
    }
    async getCities() {
        try {

            const response = await authApi.get(`${keys.API_URL}/cities.json`,);

            return response.data
        } catch (ex) {
            throw new Error(ex);
        }
    }
    async getGanres() {
        try {
            console.log('servis getCities');

            const response = await authApi.get(`${keys.API_URL}/genres.json`,);

            return response.data
        } catch (ex) {
            throw new Error(ex);
        }
    }
}
const auth = new Static();
export default auth