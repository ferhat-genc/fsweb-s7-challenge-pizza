import { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./companent/HomePage";
import OrderPage from "./companent/OrderPage";
import OrderStatusPage from "./companent/OrderStatusPage";

const initalOrder = {
	pName: "", // adı
	pPrice: 0, // fiyatı
	pRating: "", // puanı
	pQuantity: 0, // satış sayısı
	pDescription: "", // açıklaması
	pSize: [], // boyutu
	pThickness: [], // hamur kalınlığı
	pMaterials: [], // ek malzemeler
	pOrderNote: "", // sipariş notu
	pPiece: 0, // sipariş edilen ürün adedi
	pAdditionalFees: 0, // ekstra seçim ücretleri
	pTotalOrderPrice: 0, // toplam sipariş tutarı
};

export default function App() {
	// hooks
	const [order, setOrder] = useState(initalOrder);

	// handle functions

	return (
		<>
			<Switch>
				<Route path="/" exact>
					<HomePage order={order} setOrder={setOrder} />
				</Route>
				<Route path="/order">
					<OrderPage order={order} setOrder={setOrder} />
				</Route>
				<Route path="/orderstatus">
					<OrderStatusPage />
				</Route>
			</Switch>
		</>
	);
}
