import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/img/Trends in.png";
import Image2 from "../../assets/img/Black edition.png";
import Image3 from "../../assets/img/ian.png";
import Image4 from "../../assets/img/jas.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
	return (
		<section style={{ paddingTop: 120 }}>
			<Carousel infiniteLoop autoPlay={true} interval={3000}>
				<div id="page-home" className="carousel carousel-dark slide mt-5">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"></button>
						<button
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to="1"
							aria-label="Slide 2"></button>
						<button
							type="button"
							data-bs-target="#carouselExampleDark"
							data-bs-slide-to="2"
							aria-label="Slide 3"></button>
					</div>
					<div
						className="carousel-inner"
						//  style={{ marginLeft: "6%" }}
					>
						<div
							className="carousel-item active d-flex ml-5"
							data-bs-interval="10000"
							style={{ marginLeft: "8%" }}>
							<div style={{ marginRight: "2%", marginTop: "5px" }}>
								<img src={Image3} className="d-block w-20" alt="..." />
							</div>
							<div
								style={{
									marginRight: "2%",
									textAlign: "center",
									display: "flex",
									position: "relative",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<img
									src={Image1}
									className="d-block w-20"
									alt="..."
									style={{
										maxWidth: "100%",
										height: "auto",
										display: "block",
									}}
								/>
								<p
									style={{
										fontSize: "30px",
										fontWeight: "bold",
										position: "absolute",
										color: "white",
									}}>
									Trends in 2020
								</p>
							</div>
							<div
								style={{
									marginRight: "2%",
									textAlign: "center",
									display: "flex",
									position: "relative",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<img src={Image2} className="d-block w-20" alt="..." />
								<p
									className="text-center"
									style={{
										position: "absolute",
										fontSize: "30px",
										fontWeight: "bold",
										color: "white",
									}}>
									Black edition
								</p>
							</div>
							<div style={{ marginRight: "2%", marginTop: "5px" }}>
								<img src={Image4} className="d-block w-20" alt="..." />
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide="prev"
						style={{ marginLeft: "5%" }}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide="next"
						style={{ marginRight: "6%" }}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</Carousel>
		</section>
	);
};

export default CarouselSection;
