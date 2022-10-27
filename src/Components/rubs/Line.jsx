import { useContext } from 'react';
import Rubs from '../../Contexts/Rubs';

function Line({ rubs }) {

    const { setDeleteData, setModalData } = useContext(Rubs);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <div className="line__content__info">
                        {rubs.image ? <div className='img-bin'>
                            <img src={rubs.image} alt={rubs.type}>
                            </img>
                        </div> : <span className="red-image">No image</span>}
                    </div>
                    <div className="line__content__title">
                     Type:   {rubs.type}
                    </div>
                    <div className="line__content__title">
                     Size:   {rubs.size}
                    </div>
                    <div className="line__content__title">
                     Color:   {rubs.color}
                    </div>
                    <div className="line__content__info">
                     Price:   {rubs.price}
                    </div>
                </div>
                <div className="line__buttons">
                    <button onClick={() => setModalData(rubs)} type="button" className="btn btn-outline-success">Edit</button>
                    <button onClick={() => setDeleteData(rubs)} type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;