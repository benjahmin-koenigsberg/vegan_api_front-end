import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
function FourZeroFour() {


  return (
    <div className="text-center my-5">
      <h1 className="display-5 bg-white text-center mx-auto">
        404, Page Not Found
      </h1>
      <button onClick={sendEmail} className="display-6 shadow px-5 rounded bg-dark text-light">
        ➡️ Vegan Meme API
      </button>
      <Footer />
    </div>
  );
}
export default FourZeroFour;
