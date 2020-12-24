import React, { useReducer, createContext } from 'react'

export const CounterContext = createContext()

// const initialState = {
//     age: 21
// }
const initialState = {
    todos: [],
    clubs: [
        {
            club_name: 'Bournemouth', main_ground: 'Vatilitystadium', league: 'EFL Championship', developer: "Developer1", website: "www.website.com", address: "Club Address", email: "club@wu.com"
            , engagementHistory: [
                { date: "10/10/2020", contact: "contact1", staff: "staff1" }
                , { date: "10/10/2020", contact: "contact2", staff: "staff2" }
                , { date: "10/10/2020", contact: "contact3", staff: "staff3" }
            ]
            , contactList: [
                { fullName: "Jason Tindall", role: "Manager", email: "jason@fa.com", phone: "0111111111" }
                , { fullName: "Nawaz Haider", role: "Employ", email: "nawaz@fa.com", phone: "0111111112" }
                , { fullName: "M Ehsan", role: "Employ", email: "ehsan@fa.com", phone: "0111111113" }
            ]
        },
        {
            club_name: 'Manchester United', main_ground: 'Old Trafford', league: 'EFL Championship', developer: "Developer1", website: "www.website.com", address: "Club Address", email: "club@wu.com"
            , engagementHistory: [
                { date: "10/10/2020", contact: "contact1", staff: "staff1" }
                , { date: "10/10/2020", contact: "contact2", staff: "staff2" }
                , { date: "10/10/2020", contact: "contact3", staff: "staff3" }
            ]
            , contactList: [
                { fullName: "Jason Tindall", role: "Manager", email: "jason@fa.com", phone: "0111111111" }
                , { fullName: "Nawaz Haider", role: "Employ", email: "nawaz@fa.com", phone: "0111111112" }
                , { fullName: "M Ehsan", role: "Employ", email: "ehsan@fa.com", phone: "0111111113" }
            ]
        },
        {
            club_name: 'Chelsea', main_ground: 'Stamford Bridge', league: 'EFL Championship', developer: "Developer1", website: "www.website.com", address: "Club Address", email: "club@wu.com"
            , engagementHistory: [
                { date: "10/10/2020", contact: "contact1", staff: "staff1" }
                , { date: "10/10/2020", contact: "contact2", staff: "staff2" }
                , { date: "10/10/2020", contact: "contact3", staff: "staff3" }
            ]
            , contactList: [
                { fullName: "Jason Tindall", role: "Manager", email: "jason@fa.com", phone: "0111111111" }
                , { fullName: "Nawaz Haider", role: "Employ", email: "nawaz@fa.com", phone: "0111111112" }
                , { fullName: "M Ehsan", role: "Employ", email: "ehsan@fa.com", phone: "0111111113" }
            ]
        },
        {
            club_name: 'Newcastle United', main_ground: 'St James\' Park', league: 'EFL Championship', developer: "Developer1", website: "www.website.com", address: "Club Address", email: "club@wu.com"
            , engagementHistory: [
                { date: "10/10/2020", contact: "contact1", staff: "staff1" }
                , { date: "10/10/2020", contact: "contact2", staff: "staff2" }
                , { date: "10/10/2020", contact: "contact3", staff: "staff3" }
            ]
            , contactList: [
                { fullName: "Jason Tindall", role: "Manager", email: "jason@fa.com", phone: "0111111111" }
                , { fullName: "Nawaz Haider", role: "Employ", email: "nawaz@fa.com", phone: "0111111112" }
                , { fullName: "M Ehsan", role: "Employ", email: "ehsan@fa.com", phone: "0111111113" }
            ]
        },
        {
            club_name: 'Chelsea', main_ground: 'Stamford Bridge', league: 'EFL Championship', developer: "Developer1", website: "www.website.com", address: "Club Address", email: "club@wu.com"
            , engagementHistory: [
                { date: "10/10/2020", contact: "contact1", staff: "staff1" }
                , { date: "10/10/2020", contact: "contact2", staff: "staff2" }
                , { date: "10/10/2020", contact: "contact3", staff: "staff3" }
            ]
            , contactList: [
                { fullName: "Jason Tindall", role: "Manager", email: "jason@fa.com", phone: "0111111111" }
                , { fullName: "Nawaz Haider", role: "Employ", email: "nawaz@fa.com", phone: "0111111112" }
                , { fullName: "M Ehsan", role: "Employ", email: "ehsan@fa.com", phone: "0111111113" }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    // switch (action.type) {
    //     case "AGE_UP":
    //         newState.age = action.val
    //         break
    //     case "AGE_DOWN":
    //         newState.age -= action.val
    //         break
    // }
    return newState;

}

export const CounterContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={[state, dispatch]}>
            {props.children}
        </CounterContext.Provider>
    )
}