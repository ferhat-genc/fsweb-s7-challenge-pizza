import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "reactstrap";

//
//	state objesinin keylerine denk gelen elementleri name attribute leri ile eşleştirme yapmalıyım
//  daha sonra objeyi props tan descructer ederek fonksiyonlar içinde kullanmaya başlamalıyım
//  aşağıdaki elementleri control input'a dönüştürmeliyim
//
const initalOrder = {};

export default function OrderForm() {
	const [isValid, setIsValid] = useState(false);

	const history = useHistory();

	const [order, setOrder] = useState({
		pName: "Ürün adı Lorem, ipsum dolor", // adı
		pPrice: 85, // fiyatı
		pRating: 4.9, // puanı
		pQuantity: 215, // satış sayısı
		pDescription:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, illum incidunt nemo molestiae obcaecati dicta repellat dolor, quasi tempora officiis exercitationem molestias.", // açıklaması
		pSize: "", // boyutu
		pThickness: "", // hamur kalınlığı
		pMaterials: [], // ek malzemeler
		pOrderNote: "", // sipariş notu
		pPiece: 1, // sipariş edilen ürün adedi
		pAddItionalFees: 0, // ekstra seçim ücretleri
		pTotalOrderPrice: 85, // toplam sipariş tutarı
	});

	const ekMalzemeler = [
		"Pepperoni",
		"Sosis",
		"Kanada Jambonu",
		"Tavuk Izgara",
		"Soğan",
		"Domates",
		"Mısır",
		"Sucuk",
		"Ananas",
		"Kabak",
	];

	const hamurKalinligi = ["Küçük", "Orta", "Büyük"];

	function handleChange(event) {
		let { value, name, type, checked } = event.target;

		// label içindeki inputların temsil ettiği değeri bu şekilde alıyorum
		const deger = event.target.parentElement.innerText;

		// değer checkbox tan geliyor ise value değerini bu şekilde ayarla
		value = type === "checkbox" ? deger : value;

		// değer radio butonlardan geliyor ise size değerini buradan güncelle
		if (name === "pSize") {
			setOrder({ ...order, pSize: deger });
		}

		// değer ordernote inputundan geliyor ise
		if (name === "pOrderNote") {
			setOrder({ ...order, pOrderNote: value });
		}

		// ürün adedi değişiyor ise
		if (name === "pPiece") {
			setOrder({ ...order, pPiece: Number(value) });
		}

		// değer checkbox lardan geliyor ise
		if (type === "checkbox") {
			if (order.pMaterials.find((mat) => mat === deger)) {
				const newMaterials = order.pMaterials.filter((mat) => mat !== deger);
				const ekUcretler = order.pAddItionalFees - 10;
				setOrder({
					...order,
					pAddItionalFees: ekUcretler,
					pMaterials: newMaterials,
				});
			} else {
				const newMaterials = [...order.pMaterials, deger];
				const ekUcretler = order.pAddItionalFees + 10;
				setOrder({
					...order,
					pAddItionalFees: ekUcretler,
					pMaterials: newMaterials,
				});
			}
		}

		// değer pThickness select elementinden geliyorsa
		if (name === "pThickness") {
			setOrder({ ...order, pThickness: value });
		}
	}

	useEffect(() => {
		// sipariş toplamı değeri
		let toplam =
			order.pAddItionalFees * order.pPiece + order.pPrice * order.pPiece;
		setOrder({ ...order, pTotalOrderPrice: toplam });

		if (order.pSize !== "" && order.pThickness !== "") {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [order.pPiece, order.pAddItionalFees, order.pThickness, order.pSize]);

	function handleSubmit(event) {
		event.preventDefault();
		history.push("/orderstatus");
	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<h2>{order.pName}</h2>

				<div className="form-row">
					<h3 name="pPrice">{order.pPrice} TL</h3>
					<span name="pRating">{order.pRating}</span>
					<span name="pQuantity">{order.pQuantity}</span>
				</div>

				<p name="pDescription">{order.pDescription}</p>
				<div className="form-row">
					<div className="form-column">
						<p>Boyut seç {!isValid && <span className="valid">*</span>}</p>
						{hamurKalinligi.map((byt) => {
							return (
								<label>
									<input type="radio" name="pSize" onChange={handleChange} />
									{byt}
								</label>
							);
						})}
					</div>
					<div className="form-column">
						<p>
							Hamur Seç
							{!isValid && <span className="valid">*</span>}
						</p>

						<select name="pThickness" id="pThickness" onChange={handleChange}>
							<option value="" hidden>
								Hamur Kalınlığı
							</option>
							<option value="İnce">İnce</option>
							<option value="Orta">Orta</option>
							<option value="Kalın">Kalın</option>
						</select>
					</div>
				</div>
				<div className="form-column">
					<p>Ek Malzemeler</p>
					<div className="form-matarial">
						{ekMalzemeler.map((mlzm) => {
							return (
								<label>
									<input
										type="checkbox"
										onChange={handleChange}
										checked={!!order.pMaterials.find((mat) => mat === mlzm)}
									/>
									{mlzm}
								</label>
							);
						})}
					</div>
				</div>
				<div>
					<p>Sipariş Notu</p>
					<input
						name="pOrderNote"
						type="text"
						placeholder="Siparişine eklemek istediğin bir not var mı?"
						onChange={handleChange}
						value={order.pOrderNote}
					/>
				</div>

				<div className="form-column siparis-toplami">
					<p>Sipariş Toplamı</p>
					<div>
						<span>Seçimler:</span>
						{"  "}
						<span>{order.pAddItionalFees * order.pPiece} TL</span>
					</div>
					<div>
						<span>Toplam:</span>
						{"  "}
						<span>{order.pTotalOrderPrice} TL</span>
					</div>
				</div>

				<div className="form-row">
					<div>
						<input
							name="pPiece"
							type="number"
							onChange={handleChange}
							value={order.pPiece}
							min={1}
						/>
					</div>
					<button type="submit" disabled={!isValid}>
						Sipariş Ver
					</button>
				</div>
			</Form>
		</>
	);
}
