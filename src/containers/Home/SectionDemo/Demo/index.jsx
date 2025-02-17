import { NavLink } from "react-router-dom";

const Demo = ({version , path , img , text}) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="demo-item">
        {version && <div className="demo-badge">{version}</div>}
        <NavLink to={path}><img src={img} alt="demo" className="img-responsive" /></NavLink>
        <div className="preview-btn-wrapper text-center">
          <NavLink to={path} className="preview-demo">{text} <i className="fa fa-long-arrow-right" /></NavLink>
        </div>
      </div>
    </div>

  );
}

export default Demo;
