import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getReviews = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/reviews.json`)
    .then((response) => {
      const demReviews = response.data;
      console.error('whats up', demReviews);
      const reviews = [];
      if (demReviews) {
        Object.keys(demReviews).forEach((reviewId) => {
          demReviews[reviewId].id = reviewId;
          reviews.push(demReviews[reviewId]);
        });
      }

      resolve(reviews);
    })
    .catch((err) => reject(err));
});


export default { getReviews };
