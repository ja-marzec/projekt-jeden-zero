export interface Work {
    title: string,
    src: string,
    description: string,
    date: Date | 'unknown',
    height?: number,
    width?: number,
    type?: 'audio'
    imgSrc?: string,
}

export type Works  = Array<Work>