import React, { useState, useEffect } from 'react';
import items from './data';

const RoomContext = React.createContext();

const RoomProvider = (props) => {
    const [rooms, setRooms] = useState({
       room: [],
       storedRooms: [],
       featuredRooms: [],
       loading: true
    })
    useEffect(() => {
        let room = FormatData(items);
        let featuredRooms = room.filter(room => room.featured === true);
        setRooms({
            room,
            featuredRooms,
            sortedRooms: room,
            loading: false
        })
    }, []);
    const FormatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, images, id}
            return room;
        });
        return tempItems;
    };
    const getRoom = slug => {
        let tempRooms = {...rooms};
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }
    return (
        <RoomContext.Provider value={{
            ...rooms,
            getRoom: getRoom
        }}>
            {props.children}
        </RoomContext.Provider>
    );
};
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };