import navbar from './components/myNavbar/myNavbar';
import '../styles/main.scss';
import reviewCards from './components/reviews/reviews';


const init = () => {
  navbar.loadNavbar();
  reviewCards.createReviewCards();
};

init();
