import { WrapperShape } from '../enum'

export interface HeadSetting {
    wrapper:WrapperShape[],
    // backgroundColor: string[]
}

export interface headOption {
    wrapperShape?: `${WrapperShape}`
}