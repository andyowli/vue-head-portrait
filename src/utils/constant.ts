import { HeadSetting } from '../interface'

import { WrapperShape } from '../enum'

export const Setting: Readonly<HeadSetting> = {
    wrapper:Object.values(WrapperShape)
}