import React from "react";
import "./store_profile.css";

function MyProfile({
	data,
	showImage,
	handleChangeImage,
	handleChange,
	handleSubmit,
	isLoading,
	image,
}) {
	return (
		<div id="store-profile">
			<div className="content">
				{/* Header My Account */}
				<div className="row mx-3" style={{ marginTop: "3.5%" }}>
					<div className="col">
						<h5 className="fw-bold">My Profile Store</h5>
						<p className="text1">Manage your profile Information</p>
						<hr />
					</div>
				</div>

				{/* Form My Account */}
				<form
					onSubmit={handleSubmit}
					className="row"
					style={{ margin: "1rem 1.7rem" }}>
					{/* Form Identity */}
					<div className="form-profile">
						{/* If Screen < 768, Image in Top*/}
						<div className="update-image">
							{showImage || image ? (
								<img
									src={showImage ?? image}
									alt=""
									width="110px"
									height="110px"
									style={{ borderRadius: 9999, objectFit: "cover" }}
								/>
							) : (
								<img
									src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
									alt=""
									width="110px"
									height="110px"
									style={{ borderRadius: 9999, objectFit: "cover" }}
								/>
							)}
							<div className="btn-selectImage container1">
								<p className="mt-3">Select image</p>
								<input
									type="file"
									onChange={handleChangeImage}
									className="stretched-link opacity-0"
								/>
							</div>
						</div>

						{/* Identity */}
						<div>
							{/* Store Name */}
							<div className="row mb-4" style={{ height: "47px" }}>
								{/* Text */}
								<div className="container2 col-text">
									<label htmlFor="name" className="text1">
										Store name
									</label>
								</div>
								<div className="col-flexauto" style={{ width: "3%" }}></div>
								{/* Field */}
								<div className="col-flexauto col-field">
									<input
										className="px-3"
										type="text"
										name="store_name"
										onChange={handleChange}
										value={data.store_name}
									/>
								</div>
								<div className="col-flexauto" style={{ width: "6%" }}></div>
							</div>

							{/* Email */}
							<div className="row mb-4" style={{ height: "47px" }}>
								{/* Text */}
								<div className="container2 col-text">
									<label htmlFor="name" className="text1">
										Email
									</label>
								</div>
								<div className="col-flexauto" style={{ width: "3%" }} />
								{/* Field */}
								<div className="col-flexauto col-field">
									<input
										className="px-3"
										name="email"
										onChange={handleChange}
										value={data.email}
									/>
								</div>
								<div className="col-flexauto" style={{ width: "6%" }} />
							</div>

							{/* Phone Number */}
							<div className="row mb-4" style={{ height: "47px" }}>
								{/* Text */}
								<div className="container2 col-text">
									<label htmlFor="name" className="text1">
										Phone number
									</label>
								</div>
								<div className="col-flexauto" style={{ width: "3%" }} />
								{/* Field */}
								<div className="col-flexauto col-field">
									<input
										className="px-3"
										type="number"
										name="phone"
										onChange={handleChange}
										value={data.phone}
									/>
								</div>
								<div className="col-flexauto" style={{ width: "6%" }} />
							</div>

							{/* Store Description */}
							<div className="row mb-4" style={{ height: "147px" }}>
								{/* Text */}
								<div className="container2 col-text">
									<label htmlFor="description" className="text1">
										Description
									</label>
								</div>
								<div className="col-flexauto" style={{ width: "3%" }}></div>
								{/* Field */}
								<div className="col-flexauto col-field">
									{/* <input className="px-3"
                    type="text"
                    name="name"
                  /> */}
									<textarea
										className="px-3 py-2"
										id="description"
										rows="5"
										name="store_description"
										onChange={handleChange}
										value={data.store_description}></textarea>
								</div>
								<div className="col-flexauto" style={{ width: "6%" }}></div>
							</div>

							{/* Save Button */}
							<div className="row">
								<div className="col-text" />
								<div className="col-flexauto" style={{ width: "3%" }} />
								<div className="col-flexauto" style={{ width: "67%" }}>
									<button disabled={isLoading} type="submit" className="btn-save">
										{isLoading ? "loading..." : "Save"}
									</button>
								</div>
								<div className="col-flexauto" style={{ width: "6%" }} />
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="change-image">
						{showImage || data.image ? (
							<img
								width="110px"
								height="110px"
								style={{ borderRadius: 9999, objectFit: "cover" }}
								src={showImage ?? data.image}
								alt="my_image"
							/>
						) : (
							<img
								width="110px"
								height="110px"
								style={{ borderRadius: 9999, objectFit: "cover" }}
								src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
								alt="blank_picture"
							/>
						)}

						<div className="btn-selectImage container1">
							<p className="mt-3">Select image</p>
							<input
								type="file"
								onChange={handleChangeImage}
								className="stretched-link opacity-0"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default MyProfile;
