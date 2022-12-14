import Orders from "../../Contexts/Orders";
import List from "./List";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authConfig } from '../../Functions/auth';
import DataContext from "../../Contexts/DataContext";


function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [orders, setOrders] = useState(null);
    const { makeMsg } = useContext(DataContext);
    const [rubis, setRubis] = useState (null)

    const reList = data => {
        const d = new Map();
        data.forEach(line => {
            if (d.has(line.type)) {
                d.set(line.type, [...d.get(line.type), line]);
            } else {
                d.set(line.type, [line]);
            }
        });
        return [...d];
    }

    // READ for list
    // useEffect(() => {
    //     axios.get('http://localhost:3003/rubs/wc', authConfig())
    //         .then(res => {
    //             setRubis(reList(res.data));
    //         })
    // }, [lastUpdate]);

    useEffect(() => {
        axios.get('http://localhost:3003/server/rubs/wc', authConfig())
            .then(res => {
                setRubis(reList(res.data));
            })
    }, [lastUpdate]);


    useEffect(() => {
        if (null === orders) {
            return;
        }
        axios.delete('http://localhost:3003/server/orders/' + orders.id, authConfig())
            .then(res => {
                setLastUpdate(Date.now());
                makeMsg(res.data.text, res.data.type);
            })
    }, [orders, makeMsg]);

    return (
        <Orders.Provider value={{
            setOrders,
            orders,
            rubis
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <List />
                    </div>
                </div>
            </div>
        </Orders.Provider>
    );
}

export default Main;