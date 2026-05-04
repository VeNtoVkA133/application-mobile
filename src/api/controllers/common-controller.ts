import { $api, config } from "../index";
import { dataNotes } from "../../types/data.types";

export const getCommon = () => {
    return $api.get('/api', { headers: config() });
}

export const getData = () => {
    return $api.get('/api/data/', { headers: config() });
}

export const getDataId = (id: number) => {
    return $api.get(`/api/data/${id}`, { headers: config() });
}


export const getNote = () => {
    return $api.get('/api/data/noteget', { headers: config() });
}

export const postNote = (body: dataNotes) => {
    return $api.post(`/api/data/note`, body, { headers: config() });
}

// export const editDataId = (id: number, body: dataDto) => {
//     return $api.put(`/api/data/${id}`, body, { headers: config() });
//}

export const deleteDataId = (id: number) => {
    return $api.delete(`/api/data/${id}`, { headers: config() });
}