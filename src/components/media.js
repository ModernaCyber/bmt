import React,{Component} from "react";

class Media extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;

    script.src = "../scripts/medianet.js";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className="medianet" ref={el => (this.div = el)}>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default Media;