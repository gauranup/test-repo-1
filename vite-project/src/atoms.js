import {atom} from "recoil";bv


export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationsSelector",
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom)
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom)
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
    }
})