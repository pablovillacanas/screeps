const MAX_CREEP_NUMBER = 2;

import {h} from './roles/Harvester'
import {b} from './roles/Builder'

export function loop () {
    h()
    b()
}