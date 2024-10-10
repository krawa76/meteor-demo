import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { Test1 } from '../../api/test1';

export const PageTest = ({filter}) => {
    return (
        <div>
            <Connection/>

            <div>
                <a href="/test1">test1</a>
                &nbsp;
                <a href="/test2">test2</a>
            </div>

            <Data filter={filter}/>
        </div>
    );
}

export const Connection = () => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const status = Meteor.status();
            setStatus(prevState => {
                if (JSON.stringify(prevState) !== JSON.stringify(status)) console.info(status);
                return {...status}
            });
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, []);
    
    const handleReconnectClick = (e) => {
        e.preventDefault();
        console.info('reconnect');
        Meteor.reconnect();
    }

    return status ? 
    (
        <div className="connection">
            <div>Status: {status.status}</div>

            <div><a href="#" onClick={handleReconnectClick}>Reconnect</a></div>
        </div>
    )
    : null;
}

const Data = ({filter}) => {
    console.info('useSubscribe');

    const isLoading = useSubscribe('test1', filter);

    const items = useFind(() => Test1.find({}, {sort: {name: 1}}))

    if (isLoading()) return <div>loading...</div>;

    console.info('data loaded');

    return (
        <div>
            <ul>
                {items.map(
                    item =>
                    <li key={item._id}>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>
    );
}
