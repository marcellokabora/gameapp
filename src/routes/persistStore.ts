import { writable } from 'svelte/store'

export const persistStore = (key: any, initial: any) => {
    const persist = localStorage.getItem(key)
    const data = persist ? JSON.parse(persist) : initial
    //if sub is broken, sets value to current local storage value
    const store: any = writable(data, () => {
        const unsubscribe = store.subscribe((value: any) => {
            localStorage.setItem(key, JSON.stringify(value))
        })
        return unsubscribe
    })
    return store
} 