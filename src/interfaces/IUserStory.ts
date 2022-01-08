export interface IUserStory {
    user_id: number,
    user_image: string,
    user_name: string,
    stories: IUserStoryItem[]
}

export interface IUserStoryItem {
    story_id: number,
    story_image: string
    createdAt: string;
    onPress?: any,
    text?: any,
    renderIconMenu?:any,
    renderMenu?:any,
    finish?: number,// TODO, mexi aqui
    onStartView?: any // TODO, mexi aqui
}
