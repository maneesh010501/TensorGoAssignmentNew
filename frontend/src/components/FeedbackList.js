import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = ({ category }) => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get(`/api/feedback/category/${category}`);
                console.log('API response:', response.data); // Log the response for debugging
                setFeedback(response.data);
            } catch (err) {
                console.error('Error fetching feedback:', err);
            }
        };

        fetchFeedback();
    }, [category]);

    return (
        <div>
            <h2 className="my-2 font-semibold m-2">{category} Feedback:</h2>
            <ul>
                {Array.isArray(feedback) ? (
                    feedback.map((item) => (
                        <li key={item._id}>
                            <strong>Rating:</strong> {item.rating} <br />
                            <strong>Comments:</strong> {item.comments}
                        </li>
                    ))
                ) : (
                    <li className='m-2'>No feedback available</li>
                )}
            </ul>
        </div>
    );
};

export default FeedbackList;

