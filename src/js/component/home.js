import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div className="navbar layout horizontal">
				<div className="logo p-1">SHOPSHOP</div>
				<ul className="menu layout horizontal p-1">
					<li>Product</li>
					<li>About</li>
					<li>My Account</li>
					<li>Cart (0)</li>
				</ul>
			</div>
			<div className="breadcrumbs p-1">
				<ul className="menu layout horizontal layout-left">
					<li>Home</li>
					<li>/</li>
					<li>Household Plants</li>
					<li>/</li>
					<li>Bonsai</li>
				</ul>
			</div>
			<div className="product-content layout horizontal">
				<div className="gallery w-50 p-1">
					<div className="main-img img">
						<img
							className="main-img img"
							src="https://images-na.ssl-images-amazon.com/images/I/81Rx03JgEDL._AC_SL1500_.jpg"
						/>
					</div>
					<ul className="layout horizontal">
						<li className="img">
							<img
								className="img"
								src="https://images-na.ssl-images-amazon.com/images/I/71p1rqxwWeL._AC_SL1500_.jpg"
							/>
						</li>
						<li className="img">
							<img
								className="img"
								src="https://images-na.ssl-images-amazon.com/images/I/712p6bNYuVL._AC_SL1500_.jpg"
							/>
						</li>
						<li className="img">
							<img
								className="img"
								src="https://images-na.ssl-images-amazon.com/images/I/712p6bNYuVL._AC_SL1500_.jpg"
							/>
						</li>
					</ul>
				</div>
				<div className="product-info w-50 p-1">
					<h1>Bonsai</h1>
					<span className="price">$19.99</span>
					<div className="description">
						<p>
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lacus enim. Donec ornare convallis diam. Phasellus volutpat dolor et ornare laoreet. Curabitur quis magna id dui interdum vehicula. Cras pharetra turpis quis ornare mollis. Sed enim ante, tincidunt ac rutrum nec, imperdiet nec lacus. Sed venenatis dolor nec tincidunt porta. Donec a ipsum pharetra."
							}
						</p>
						<p>
							{
								"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis interdum velit non tellus pharetra porttitor. Suspendisse tempus purus tellus, ac accumsan dolor finibus in. Suspendisse efficitur sed libero non ultrices. Pellentesque dignissim orci nec vehicula porttitor. Vestibulum ultricies augue id nulla feugiat auctor."
							}
						</p>
					</div>
					<button>Add to cart</button>
				</div>
			</div>
		</div>
	);
}
