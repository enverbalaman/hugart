import "./Partners.scss"

const SecParttns = ({data}) => {

  return (

    <div className="container">
      <div className="parttns text-center">
        <div className="row">
          {data && data.map((item , key) => (
            <div key={key} className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
              <img src={item.img} alt="" />
            </div>   
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecParttns;