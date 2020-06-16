import utils from '../../../helpers/utils';


import reviews from '../../../helpers/data/reviewData';

const createReviewCards = () => {
  // let domString = '';
  reviews.getReviews()
    .then((reviewsList) => {
      let domString = '<div class="d-flex flex-wrap review container">';
      console.error('hello', reviewsList);
      reviewsList.forEach((finishedReviews) => {
        domString += '<div class="col-sm">';
        domString += '<div class="card-body review col">';
        domString += '<div class="row">';
        domString += `<img class="card-img-top review-screenshot col-sm" src="${finishedReviews.imgUrl}">`;
        domString += '</div>';
        domString += '</div>';
        domString += '<div class="card-footer">';
        domString += '</div>';

        utils.printToDom('reviews', domString);
      })
        .catch((err) => console.error('getReviews broke', err));
    });
};
export default { createReviewCards };
