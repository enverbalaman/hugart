import Demo from "./Demo";

const SectionDemo = ({data}) => {

  return (
    <div className="row">
      {data && data.map((item , key) => (
          <Demo
            key={key}
            path={item.path}
            img={item.imgDemo}
            text={item.text}
          />
        ))}
    </div>
  );
}

export default SectionDemo;
