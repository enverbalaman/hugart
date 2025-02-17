const SectionHeading = ({
	title,
	text,
	img,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle="",
	titleUp,
	titleDown
}) => {

  return (
  	<>
  	{img ? (

			<div className="section-heading text-center">
				<div className="dream-dots justify-content-center" data-aos="fade-up">
					<img draggable="false" src={img} alt="" />
				</div>
				<h2 data-aos="fade-up">{title}</h2>
				<p className="g-text" data-aos="fade-up">{text}</p>
			</div>

      	):(
			<div className="section-heading text-center">
				<div className={ClassSpan} data-aos="fade-up">
					<span className={ClassSpanTitle}>{titleUp}</span>
				</div>
				<h2 data-aos="fade-up">{titleDown}</h2>
				<p data-aos="fade-up">{text}</p>
			</div>
      	)}
    </>
  );
}

export default SectionHeading;