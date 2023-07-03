import React, { useState } from 'react';
import PropertyCard from './Demoo';

const Demo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(3); // Number of properties to display per page

  // Assuming you have an array of property data
  const properties = [
    {
      id: 1,
      location: 'sector 42 gurugram',
      name: 'adani m2k oyster grande',
      price: '1.80 Lac',
      pricePerSqft: '3312.00/sq/ft.',
      size: '368 Sqyard',
      superBuiltUpArea: '307.69 Super built-up Area',
      photo: require('../Assets/banner.jpg')
    },
    {
      id: 2,
      location: 'sector 42 gurugram',
      name: 'adani m2k oyster grande',
      price: '1.80 Lac',
      pricePerSqft: '3312.00/sq/ft.',
      size: '368 Sqyard',
      superBuiltUpArea: '307.69 Super built-up Area',
      photo: require('../Assets/first.jpeg')
    },
    {
      id: 3,
      location: 'sector 42 gurugram',
      name: 'adani m2k oyster grande',
      price: '1.80 Lac',
      pricePerSqft: '3312.00/sq/ft.',
      size: '368 Sqyard',
      superBuiltUpArea: '307.69 Super built-up Area',
      photo: require('../Assets/ios.png')
    },
    {
      id: 4,
      location: 'sector 42 gurugram',
      name: 'adani m2k oyster grande',
      price: '1.80 Lac',
      pricePerSqft: '3312.00/sq/ft.',
      size: '368 Sqyard',
      superBuiltUpArea: '307.69 Super built-up Area',
      photo: require('../Assets/Play.png')
    },
    {
      id: 5,
      location: 'sector 42 gurugram',
      name: 'adani m2k oyster grande',
      price: '1.80 Lac',
      pricePerSqft: '3312.00/sq/ft.',
      size: '368 Sqyard',
      superBuiltUpArea: '307.69 Super built-up Area',
      photo: require('../Assets/R.png')
    },
    {
      id: 6,
      location: 'sector 42 gurugram',
      name: 'adani m2k oyster grande',
      price: '1.80 Lac',
      pricePerSqft: '3312.00/sq/ft.',
      size: '368 Sqyard',
      superBuiltUpArea: '307.69 Super built-up Area',
      photo: require('../Assets/second.jpeg')
    },
    // Add more property objects here
  ];

  // Logic for displaying properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  // Calculate total number of pages
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Demo;
