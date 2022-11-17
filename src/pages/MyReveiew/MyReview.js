import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaAddressCard, FaPlus, FaTrash, FaUpload } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviewsperson?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(review => review._id !== id);
                    setReview(remaining);
                }
            })
        }
    }

   

    return (
        <div>

            <div className='bg-purple-200'>
                {
                    reviews.map(review => <div key={review._id} className='border p-6 mb-5'>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center mb-3">
                                <img style={{ height: '35px', width: '35px', borderRadius: '100%' }} src={user.photoURL} alt="" />
                                <h1 className='font-bold ml-2'> {review.email}</h1>
                            </div>
                            <p>{review?.serviceTitle}</p>
                            <p>{review?.description}</p>


                            <div className="flex">
                                <FaTrash className='mr-5 text-red-700 text-2xl' onClick={()=>handleDelete(review._id)}></FaTrash>
                                <FaPlus className='text-orange-600 text-2xl'></FaPlus>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default MyReview;