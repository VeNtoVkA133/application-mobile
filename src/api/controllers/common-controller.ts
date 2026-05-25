import { $api, config } from "../index";
import { dataNotes, dataNameNote } from "../../types/data.types";

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
export const getListNotes = () => {
    return $api.get('/api/data/getlistnotes', { headers: config() });
}

export const postNote = (body: dataNotes) => {
    return $api.post(`/api/data/note`, body, { headers: config() });
}

export const createNote = (body: dataNameNote) => {
    return $api.post(`/api/data/createnote`, body, { headers: config() });
}

export const changeNote = (id: number, body: dataNotes) => {
    return $api.patch(`/api/data/changeNote/${id}`, body, { headers: config() });
}
// export const editDataId = (id: number, body: dataDto) => {
//     return $api.put(`/api/data/${id}`, body, { headers: config() });
//}

export const deleteDataId = (id: number) => {
    return $api.delete(`/api/data/${id}`, { headers: config() });
}