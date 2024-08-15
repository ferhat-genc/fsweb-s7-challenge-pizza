import { useHistory } from "react-router-dom";

export default function HomePage() {
	// hooks
	const history = useHistory();
	//handles
	function handleClick() {
		history.push("/order");
		console.log("tıklandı");
	}

	return (
		<div className="home-container">
			<button className="home-button" onClick={handleClick}>
				Acıktım
			</button>
		</div>
	);
}
