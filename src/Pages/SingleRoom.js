import React, { useContext} from 'react';
import { RoomContext } from '../Context';
import { useParams } from 'react-router-dom';


const SingleRoom = () => {
    const {getRoom} = useContext(RoomContext);
    const {slug} = useParams();
    const room = getRoom(slug);
    console.log(room);
    return (
        <div>
            <h1>Hello from single room.</h1>
        </div>
    );
};

export default SingleRoom;