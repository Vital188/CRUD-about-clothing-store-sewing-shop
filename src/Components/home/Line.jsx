import { useContext } from 'react';
import Home from '../../Contexts/Home';

import { useState } from "react";

function Line({ rubs, rubFiltered }) {
console.log(rubs)
    const { setOrder } = useContext(Home);

    const [orderis, setOrderis] = useState('');
    const [post, setPost] = useState('');
    const [text, setText] = useState('Order');
    const [color, setColor] = useState('skyblue')

    const add = () => {
        setOrder({
            comment: post,
            orderis,
            rubs_id: rubs.id
        });
        setOrderis('');
        setPost('');
        setText('Ordered');
        setColor('orange');
       }
       
    return ( <>
    
        <li className="list-group-item">
            <div className="home">
                <div className="home__content">
                <div className="home__content__info">
                        {rubs.image ? <div className='img-bin'>
                            <img src={rubs.image} alt='upload'>
                            </img>
                        </div> : null}
                     Type: {rubs.type}, Size: {rubs.size}, Color: {rubs.color}, Price: {rubs.price}   
                     <div className="mb-3" style={{
                        marginLeft: '100px',
                        color: 'black',
                        width: '400px'                       
                         }}>
                    <label className="form-label">Add comment</label>
                    <textarea className="form-control"  value={post} style={{
                        height: '200px',
                     }} onChange={e => setPost(e.target.value)}></textarea>
                    </div>

                       <button onClick={add} type="button" style={{
                        backgroundColor: color,
                        color: 'black'
                         }} className="btn btn-outline-success">{text}</button>
                </div>
            </div>
            </div>
        </li></>
)
}

export default Line;