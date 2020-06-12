
import utils from '../../../helpers/utils';
import './myNavbar.scss';

const loadNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-expand navbar expand="md">';
  domString += '<img src ="https://live.staticflickr.com/65535/49995569386_71eaf52f74_n.jpg" class="navbar logo-icon"></img>';
  domString += '<div class="navbar vb-red">';
  domString += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">';
  domString += ' <span class="navbar-toggler-icon"></span>';
  domString += '</button>';
  domString += '<div class="collapse navbar-collapse" id="navbarNavAltMarkup">';
  domString += '  <div class="navbar-nav">';
  domString += '    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>';
  domString += '    <a class="nav-item nav-link" href="#">Features</a>';
  domString += '   <a class="nav-item nav-link" href="#">Pricing</a>';
  domString += '   <a class="nav-item nav-link" href="#">Request a Quote</a>';
  domString += '  </div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</nav>';
  utils.printToDom('nav-container', domString);
};

export default { loadNavbar };
