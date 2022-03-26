import axios from "axios";

const BASE_URL = 'http://192.168.1.108:3000/' // 'http://localhost:3000/'

// no interceptors on
const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// albums
interface IAlbum {
    title: string
    artistId: string
    coverUrl: string
    year: number
    genre: string
}

export const getAlbums = () => API.get('albums/all')
export const getAlbum = ({ id, controller }: { id: string, controller: AbortController }) => API.get(`album/${id}`, { signal: controller.signal })
export const updateAlbum = ({ id, data }: { id: string, data: IAlbum }) => API.put(`album/${id}`, data)
export const deleteAlbum = ({ id }: { id: string }) => API.delete(`album/${id}`)

// artists
interface IArtist {
    name: string
    photoUrl: string
    birthdate: string
    deathDate: string
}

export const getArtists = () => API.get('artists/all')
export const getArtist = ({ id, controller }: { id: string, controller: AbortController }) => API.get(`artist/${id}`, { signal: controller.signal })
export const updateArtist = ({ id, data }: { id: string, data: IArtist }) => API.put(`artist/${id}`, data)
export const deleteArtist = ({ id }: { id: string }) => API.delete(`artist/${id}`)