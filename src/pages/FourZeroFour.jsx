import {Link} from 'react-router-dom'

function FourZeroFour() {
  return (
    <div
      className="text-center my-5">
      <h1 className="display-5 bg-white text-center mx-auto">404, Page Not Found</h1>
      <Link to="/" className="display-6 shadow px-5 rounded bg-dark text-light">
        ➡️ Vegan Meme API
      </Link>
    </div>
  );
}
export default FourZeroFour;
