import React from 'react';
import { Link } from 'react-router-dom';

const Demoo = ({ property }) => {
    const { location, name, price, pricePerSqft, size, superBuiltUpArea, photo } = property;

    return (
        <div className="flex mt-3">
            <div className="img-card">
                <div className="card-pic">
                    <img src={photo} alt="" className="img-fluid" srcSet="" /> {/* Use the photo property here */}
                </div>
            </div>
            <div className="card-information">
                <Link to="#">{location}</Link>
                <p>{name}</p>
                <div className="flex gap">
                    <div>
                        <h6 className="text-center">{price}</h6>
                        <span>{pricePerSqft}</span>
                    </div>
                    <div>
                        <h6 className="text-center">{size}</h6>
                        <span>{superBuiltUpArea}</span>
                    </div>
                </div>
                <hr />
                <div className="flex justify-content align-items mt-3">
                    <button className="btn-contact2">view phone number</button>
                    <button className="btn-contact1">contact dealer</button>
                </div>
            </div>
        </div>
    );
};

export default Demoo;
