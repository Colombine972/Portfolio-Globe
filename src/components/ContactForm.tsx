import { useState } from "react";
import "../styles/ContactForm.css";

type ContactFormData = {
	name: string;
	phoneNumber: string;
	commentaires: string;
};

function ContactForm() {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		phoneNumber: "",
		commentaires: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFormSubmit = (event: React.FormEvent) => {
		event.preventDefault(); // empêche le rechargement de la page
		console.log("Données envoyées :", formData);
		setIsSubmitted(true);
		setFormData({
			name: "",
			phoneNumber: "",
			commentaires: "",
		});
		setTimeout(() => {
			setIsSubmitted(false);
		}, 5000);
	};

	return (
		<>
			{!isSubmitted ? (
				<form onSubmit={handleFormSubmit} className="formulaire">
					<h3>Vous avez une question ?</h3>

					<input
						type="text"
						name="name"
						placeholder="Votre nom"
						aria-label="nom"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>

					<input
						type="tel"
						name="phonenumber"
						placeholder="Votre numéro"
						aria-label="Numéro"
						value={formData.phoneNumber}
						onChange={handleInputChange}
						required
					/>

					<textarea
						name="commentaires"
						placeholder="Votre message"
						aria-label="commentaires"
						value={formData.commentaires}
						onChange={handleInputChange}
						required
					/>

					<button type="submit">Envoyer</button>
				</form>
			) : (
				<p className="form-success">
					Merci pour votre message ✨ Je vous répondrai très rapidement.
				</p>
			)}
		</>
	);
}

export default ContactForm;
