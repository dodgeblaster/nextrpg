
export type TileDefinition = {
    graphics: {
        type: string,
        css?: object,
        img?: string
    },
    playerInteraction: string,
    layer: number,
    event: boolean
}

export type LocationEvent = {
    type: string,
    location: string
}

export type DialogueEvent = {
    type: string,
    text: string
}

export type StoryEvent = {
    type: string,
    newStoryState: string
}

export type WorldEvent = {
    type: string,
    worldCategory: string,
    newWorldState: string
}