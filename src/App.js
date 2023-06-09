import "./styles.css";
import image from "../public/download.png";
import image2 from "../public/download (1).png";
import image3 from "../public/Apple-Logo.png";
export default function App() {
  return (
    <div className="App">
      <div className="box">
        <img className="image" alt="twitterimg" src={image} />
        <h1 className="signin">Sign In to Twitter </h1>
        <button className="btnclass">
          <img className="image2" alt="twitterimg" src={image2} />
          Sign in with Google
        </button>
        <button className="btnclass top">
          <img className="image3" alt="twitterimg" src={image3} />
          Sign in with Google
        </button>

        <h2 className="or"> Or </h2>
        <input
          className="inputClass "
          type="text"
          placeholder=" Phone email or Username"
        />
        <button className="btn3">Next</button>

        <button className="btnclass top">Forget Password</button>

        <h3 href="www.google.com"> Don't have an account / Sign Up</h3>
      </div>
    </div>
  );
}
