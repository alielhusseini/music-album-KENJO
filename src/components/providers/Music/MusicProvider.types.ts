import { IAlbum, IArtist } from "../../../data/data.types"

export interface IMusic {
    state: {
        'Albums': IAlbum[],
        'Artists': IArtist[]
    },
    dispatch: React.Dispatch<{ type: string; payload: any; }>,
    switchTab(tab: TabType): void,
    activeTab: TabType
    isLoading: boolean
    toggleLoading(load: boolean): void
    isError: boolean
}

export type TabType = "Artists" | "Albums"