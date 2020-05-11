import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Title from './Title';
import Rooms from './Rooms';

const FeaturedRooms = () => {
    
    const {loading, featuredRooms: rooms} = useContext(RoomContext);
    
    return (
        <section className='featured-rooms'>
            <Title title='featured rooms'></Title>
            <div className='featured-rooms-center'>
                {
                    loading ? <Loading/> 
                    : rooms.map(room => {
                        return <Rooms key={room.id} room={room}></Rooms>
                    })
                }
            </div>
        </section>
    );
};

export default FeaturedRooms;