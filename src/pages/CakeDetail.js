// CakeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';


function CakeDetail() {
    const { id } = useParams();
    const cakes = [
        { id: '2', name: 'Vanilla Cake', price: 280, image: 'https://images.pexels.com/photos/20620511/pexels-photo-20620511/free-photo-of-sweet-birthday-cake.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'A classic vanilla cake' },
        { id: '1', name: 'Strawberry Cake', price: 540, image: 'https://images.pexels.com/photos/18604369/pexels-photo-18604369/free-photo-of-sweet-cake-on-tray.jpeg?auto=compress&cs=tinysrgb&w=60', description: 'A delicious strawberry cake' },
        // Add other cakes 
        {id:'3',name:'Kitkat Cake',price:600, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJXDMemgsKv3uQCknBSC5KZKklZxVU42r0A&s',description:'A Delicious Cake'},
        {id:'4',name:'Chocalate Venilla Cake',price:600, image:'https://images.pexels.com/photos/16112672/pexels-photo-16112672/free-photo-of-ornate-cake-with-a-strawberry-on-top.jpeg?auto=compress&cs=tinysrgb&w=600',description:'A Fancy Cakes'},
    
    ];

    const cake = cakes.find(cake => cake.id === id);

    if (!cake) {
        return <p>Cake not found.</p>;
    }

    return (
        <div>
            <h1>{cake.name}</h1>
            <img src={cake.image} alt={cake.name} />
            <p>Price: ₹{cake.price}</p>
            <p>{cake.description}</p>
        </div>
    );
}

export default CakeDetail;