import { Form } from "reactstrap";

export default function OrderForm() {
	return (
		<>
			<Form>
				<h2>Ürün adı Lorem, ipsum dolor.</h2>
				<div>
					<h3>85 TL</h3>
					<span>4.9</span>
					<span>(250)</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
					distinctio recusandae delectus adipisci, ut nam officia architecto
					laudantium saepe quam repellat explicabo itaque accusamus sit maxime
					ad voluptatem temporibus fuga.
				</p>
				<div>
					<div>
						<p>
							Boyut seç <span>*</span>
						</p>
						<label>
							<input type="radio" name="pSize" /> Küçük
						</label>
						<label>
							<input type="radio" name="pSize" /> Orta
						</label>
						<label>
							<input type="radio" name="pSize" /> Büyük
						</label>
					</div>
					<div>
						<p>
							Hamur Seç <span>*</span>
						</p>
						<select name="pThickness" id="pThickness">
							<option value="">Hamur Kalınlığı</option>
							<option value="ince">İnce</option>
							<option value="orta">Orta</option>
							<option value="kalin">Kalın</option>
						</select>
					</div>
				</div>
				<div>
					<p>Ek Malzemeler</p>
					<div>
						<p>NOT bıraya checkbox lar gelecek</p>
					</div>
				</div>
				<div>
					<p>Sipariş Notu</p>
					<input
						type="text"
						placeholder="Siparişine eklemek istediğin bir not var mı?"
					/>
				</div>
				<div>
					<div>
						<button>-</button>
						<input type="number" />
						<button>+</button>
					</div>
					<div>
						<p>Sipariş Toplamı</p>
						<div>
							<span>Seçimler</span>
							<span>0 TL</span>
						</div>
						<div>
							<span>Toplam</span>
							<span>0 TL</span>
						</div>
						<button>Sipariş Ver</button>
					</div>
				</div>
			</Form>
		</>
	);
}
