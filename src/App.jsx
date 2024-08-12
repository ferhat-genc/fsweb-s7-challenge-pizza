import { useState } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import HomePage from "./companent/HomePage";
import OrderPage from "./companent/OrderPage";
import OrderStatusPage from "./companent/OrderStatusPage";

export default function App() {
	// hooks

	// handle functions

	return (
		<>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/orderpage">
					<OrderPage />
				</Route>
				<Route path="/orderstatus">
					<OrderStatusPage />
				</Route>
			</Switch>
		</>
	);
}
