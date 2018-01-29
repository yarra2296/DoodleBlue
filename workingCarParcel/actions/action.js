import {SAVE_CAR_HATCHBACK_1, SAVE_CAR_HATCHBACK_2, SAVE_CAR_SUV_1, SAVE_CAR_SUV_2 } from '../constants'

export default function saveCarDetails(title, details) {
    console.log("Call in Action:", details);
    console.log("Call in title:", title);
    if(title === 'Hatchback 1') {
        return {
            type: SAVE_CAR_HATCHBACK_1,
            details
        }
    } else if(title === 'Hatchback 2') {
        return {
            type: SAVE_CAR_HATCHBACK_2,
            details
        }
    } else if(title === 'SUV 1') {
        return {
            type: SAVE_CAR_SUV_1,
            details
        }
    }else if(title === 'SUV 2') {
        return {
            type: SAVE_CAR_SUV_2,
            details
        }
    }
}