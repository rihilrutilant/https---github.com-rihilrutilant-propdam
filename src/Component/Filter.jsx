import React from 'react'
import '../Style/Filter.css'
import Navbar2 from './Navbar2'
function Filter() {
    return (
        <>
            <Navbar2/>
            <section className='section-y'>
                <div className="container12">
                    <div className='flex'>
                        <div className='sidebar'>
                            <div className='flex justify-content align-items'>
                                <h6 className='a-f'>Applied Filters</h6>
                                <a href="#">clear all</a>
                            </div>
                            <div className=''>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                                <button>sector 47 gurgaon</button>
                            </div>
                            <div>
                                <span>Budget</span>
                                <div className='flex justify-content mt-1'>
                                    <h6 className='budget-btn'>0</h6>
                                    <h6 className='budget-btn'>100+ Crores</h6>
                                </div>
                                <input type="range" />
                                <input type="text" placeholder='Min budget' />
                                <input type="text" placeholder='Max budget' />
                            </div>
                            <hr />
                            <h6>Property Type</h6>
                            <div className='property-btn'>
                                <button> <i class="fa-solid fa-bars-staggered"></i>Residential Apartment</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>Builder Floor</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>Residential Land</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>Independent House/Villa</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>1 RK/ Studio Apartment</button>
                            </div>
                            <hr />
                            <h6>No. of Bedrooms</h6>
                            <div className='bedrooms-btn'>
                                <button><i class="fa-solid fa-bars-staggered"></i>1Rk/ 1Bhk</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>2Bhk</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>3Bhk</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>4Bhk</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>5Bhk</button>
                            </div>
                            <hr />
                            <h6>Posted by</h6>
                            <div className='posted-btn'>
                                <button> <i class="fa-solid fa-bars-staggered "></i>owner</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>builder</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>dealer</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>feature dealer</button>
                            </div>
                            <hr />
                            <div>
                                <span>Area <br />sq.ft.</span>
                                <div className='flex justify-content mt-1'>
                                    <h6 className='budget-btn'>0 sq.ft.</h6>
                                    <h6 className='budget-btn'>4000+ sq.ft.</h6>
                                </div>
                                <input type="range" />
                                <input type="text" placeholder='Min budget' />
                                <input type="text" placeholder='Max budget' />
                            </div>
                            <hr />
                            <h6>Localities</h6>
                            <div className='posted-btn'>
                                <button> <i class="fa-solid fa-bars-staggered "></i>owner</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>builder</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>dealer</button>
                                <button><i class="fa-solid fa-bars-staggered"></i>feature dealer</button>
                            </div>
                        </div>
                        <div className='right-card'>
                            <div className='category-btn'>
                                <button>all</button>
                                <button>ower</button>
                                <button>verified</button>
                                <button>under construcation</button>
                                <button>ready to move</button>
                            </div>
                            <div className='flex mt-3'>
                                <div className='img-card'>
                                    <div className='card-pic'>
                                        <img src={require('../Assets/banner.jpg')} alt="" className='img-fluid' srcset="" />
                                    </div>
                                </div>
                                <div className='card-information'>
                                    <a href="#">sector 42 gurugram</a>
                                    <p>adani m2k oyster grande</p>
                                    <div className='flex gap'>
                                        <div>
                                            <h6 className='text-center'>1.80 Lac</h6>
                                            <span>3312.00/sq/ft.</span>
                                        </div>
                                        <div>
                                            <h6 className='text-center'>368 Sqyard </h6>
                                            <span>307.69 Super built-up Area</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-content align-items mt-3'>
                                        <button className='btn-contact2'>view phone number</button>
                                        <button className='btn-contact1'>contact dealer</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <div className='img-card'>
                                    <div className='card-pic'>
                                        <img src={require('../Assets/banner.jpg')} alt="" className='img-fluid' srcset="" />
                                    </div>
                                </div>
                                <div className='card-information'>
                                    <a href="#">sector 42 gurugram</a>
                                    <p>adani m2k oyster grande</p>
                                    <div className='flex gap'>
                                        <div>
                                            <h6 className='text-center'>1.80 Lac</h6>
                                            <span>3312.00/sq/ft.</span>
                                        </div>
                                        <div>
                                            <h6 className='text-center'>368 Sqyard </h6>
                                            <span>307.69 Super built-up Area</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-content align-items mt-3'>
                                        <button className='btn-contact2'>view phone number</button>
                                        <button className='btn-contact1'>contact dealer</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <div className='img-card'>
                                    <div className='card-pic'>
                                        <img src={require('../Assets/banner.jpg')} alt="" className='img-fluid' srcset="" />
                                    </div>
                                </div>
                                <div className='card-information'>
                                    <a href="#">sector 42 gurugram</a>
                                    <p>adani m2k oyster grande</p>
                                    <div className='flex gap'>
                                        <div>
                                            <h6 className='text-center'>1.80 Lac</h6>
                                            <span>3312.00/sq/ft.</span>
                                        </div>
                                        <div>
                                            <h6 className='text-center'>368 Sqyard </h6>
                                            <span>307.69 Super built-up Area</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-content align-items mt-3'>
                                        <button className='btn-contact2'>view phone number</button>
                                        <button className='btn-contact1'>contact dealer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Filter