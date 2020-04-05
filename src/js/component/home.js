import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div className="navbar">
				<div className="logo">SHOPSHOP</div>
				<ul className="menu">
					<li>Product</li>
					<li>About</li>
					<li>My Account</li>
					<li>Cart</li>
				</ul>
			</div>
			<div className="breadcrumbs" />
			<div className="product-content">
				<div className="gallery">
					<div className="main-img" />
					<ul>
						<img
							className="img"
							src="https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
						/>

						<li
							className="img"
							src="https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
						/>
						<li className="img" />
					</ul>
				</div>
				<div className="product-info">
					<h1>Bonsai</h1>
					<span>$19.99</span>
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
				</div>
			</div>
		</div>
	);
}
