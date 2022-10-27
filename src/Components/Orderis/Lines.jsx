

function Lines({ rubs }) {


    
    return (
        <li className="list-group-item">
            <div className="home" style={{
                justifyContent: 'center'
            }}>
                <div className="home__content">
                    <div className="home__content__info" style={{
                        gap: '100px'
                    }}>

                    {rubs.image ? <div className='img-bin'>
                            <img src={rubs.image} alt='upload'>
                            </img> 
                         </div> : null} 
                     Type: {rubs.type}, Size: {rubs.size}, Color: {rubs.color}, Price: {rubs.price}                      
               
                {rubs.orderis === 0 ? <button style={{
                    // marginLeft: '200px',
                    backgroundColor: 'green',
                    borderRadius: '10px',
                    height: '100px'
                }}>Waiting confirmation</button> : <button style={{
                    // marginLeft: '200px',
                    backgroundColor: 'crimson',
                    borderRadius: '10px',
                    color: 'black'
                }}>Confirmed</button>}
                </div>
                </div>
            </div> 
        </li>
    )
}

export default Lines;