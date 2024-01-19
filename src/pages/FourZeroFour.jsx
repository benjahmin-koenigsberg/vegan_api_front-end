import {Link} from 'react-router-dom'
// import emailjs from '@emailjs/browser';
function FourZeroFour() {

  //"send" method using fetch
  // const sendEmail = (e) => {

  //         emailjs
  //           .send(
  //             "service_7u0w0cb",
  //             "template_x5ku14t",
  //             {
  //               from_name: "benjahmin",
  //               to_name: "Benjahmin",
  //               from_email: "benjamin.lakin@gmail.com",
  //               to_email: "benjahmin.lakin@gmail.com",
  //               message: "meme uploaded",
  //             },
  //             "MaKWSfPyiE272Y8lz"
  //           )
  //           .then(
  //             (result) => {
  //               console.log(result);
  //             },
  //             (error) => {
  //               console.log(error);
  //             }
  //         );

  // }

  return (
    <div className="text-center my-5">
      <h1 className="display-5 bg-white text-center mx-auto">
        404, Page Not Found
      </h1>
      <button onClick={sendEmail} className="display-6 shadow px-5 rounded bg-dark text-light">
        ➡️ Vegan Meme API
      </button>
    </div>
  );
}
export default FourZeroFour;
