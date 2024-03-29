import img from "../img/img.png";
import attach from "../img/attach.png";

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something.." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}
