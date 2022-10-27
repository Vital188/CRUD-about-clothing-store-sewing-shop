import { useContext, useState } from 'react';
import Orders from '../../Contexts/Orders';
import axios from 'axios'
import { authConfig } from '../../Functions/auth';

function Line({ rubis }) {

    const [text, setText] = useState('Conformation');
    const [color, setColor] = useState('none')
    const { setOrders} = useContext(Orders);    

    const remove = id => {
        setOrders({id});
    }
   
   const handleChangeOrder = () =>{
          axios.put('http://localhost:3003/server/orders/' + rubis[1][0].oid, {confirmed: 1}, authConfig())
            .then(res => {
            console.log('CONFIRMED');
            setText('CONFIRMED');
            setColor('orange');
            });
   }
  
    return (
        <li className="list-group-item">
            <div className="home">
                <div className="home__content">
                    <div className="home__content__info">

                    {rubis[1][0].image ? <div className='img-bin'>
                            <img src={rubis[1][0].image} alt='upload'>
                            </img>
                        </div> : null}
                     Type: {rubis[1][0].type}, Size: {rubis[1][0].size}, Color: {rubis[1][0].color}, Price: {rubis[1][0].price}   
                     <div className="mb-3" style={{
                        marginLeft: '50px',
                        
                        color: 'black',
                        width: '400px',
                       
                         }}>
                     <label className="form-label">User comment</label>
                    <textarea className="form-control"  value={rubis[1][0].comment} readOnly style={{
                        height: '200px',
                     }} ></textarea>
                    </div>
                     <div style={{
                       display: 'flex',
                       gap: '50px',
                       justifyContent: 'space-around',
                    }}>
                        <ul className="list-group" style={{
                     listStyle: 'none'
                    }}> 
                    {rubis[1][0].orderis === 0 ?
                                 <button onClick={handleChangeOrder} type="button" style={{
                                    backgroundColor: color,      
                                    color: 'black'
                                }} className="btn btn-outline-success">{text}</button> : <button onClick={handleChangeOrder} type="button" style={{ 
                                    backgroundColor: 'orange',
                                    color: 'black',
                                    border: '1px solid black'
                                }} className="btn btn-outline-success">CONFIRMED</button> }
                    
                </ul> 
                 <ul className="list-group" style={{
                     listStyle: 'none'
                    }}> 
                    {
                        rubis[1]?.map(o =>  <li key={o.oid}  >  
                           
                                 <button onClick={() => remove(o.oid)} type="button" style={{
                                  
                                }} className="btn btn-outline-danger">Delete</button>   
                         </li> ) 
                    }
                </ul> 
                </div>  
                </div>
                </div>
            </div> 
        </li>
    )
}

export default Line;