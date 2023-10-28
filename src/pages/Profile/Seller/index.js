import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Global/Navbar/index";
import SidebarSeller from "../../../components/Profile/SidebarSeller";
import TestOrder from '../Costumer/my_order'
import MyOrder from "./my_order";
import MyProduct from "./my_product";
import OrderProfile from "./order_cancel";
import SellingProduct from "./selling_product";
import StoreProfile from "./store_profile";

import "./index.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneCustomerAction } from "../../../redux/reducers/customer/getOneCustomerSlice";
import { editCustomerAction } from "../../../redux/reducers/customer/editCustomerSlice";
import FilterModal from "../../../components/Global/FilterModal";

const SellerProfile = () => {
	const navigate = useNavigate();
	const id = localStorage.getItem("user_id");
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.getOneCustomer.data);
	const { isLoading, isEdited } = useSelector((state) => state.editCustomer);

	const [openTab, setOpenTab] = useState("my_account");
	const [image, setImage] = useState("");
	const [showImage, setShowImage] = useState("");
	const [data, setData] = useState({
		name: "",
		email: "",
		gender: "",
		phone: "",
	});

	useEffect(() => {
		if (id) {
			dispatch(getOneCustomerAction(id));
		}

		if (isEdited) {
			navigate("/");
		}
	}, [id, dispatch, isEdited, navigate]);

	useEffect(() => {
		if (currentUser) {
			setImage(currentUser.photo);
			setShowImage(currentUser.photo);

			setData({
				name: currentUser.name,
				email: currentUser.email,
				phone: currentUser.phone,
				gender: currentUser.gender,
			});
		}
	}, [dispatch, currentUser]);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setShowImage(reader?.result);
		};
		reader?.readAsDataURL(file);

		setImage(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(editCustomerAction({ data, image, id }));
	};

	return (
		<div id="page-profile" className="container-float">
			<Navbar />
			<div className="profile">
				{/* Sidebar Costumer */}
				<SidebarSeller
					currentUser={currentUser}
					setOpenTab={setOpenTab}
					openTab={openTab}
				/>

        <TestOrder />

				{/* {openTab === "my_account" && ( 
          <MyAccount
            data={data}
            isLoading={isLoading}
            showImage={showImage}
            handleChangeImage={handleChangeImage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            image={image}
          />
				)}

        {openTab === "shipping_address" && (
          <Address />
        )}

        {openTab === "my_order" && (
          <MyOrder />
        )} */}

			</div>

      

			<FilterModal />
		</div>
	);
};

export default SellerProfile;