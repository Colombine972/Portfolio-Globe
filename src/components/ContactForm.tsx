import { useState } from "react";
import "../styles/ContactForm.css";

type ContactFormData = {
	category: ContactCategory;
	name: string;
	phoneNumber: string;
	commentaires: string;
};

type ContactCategory = "wizdle" | "portfolio" | "general" | "cv";

function ContactForm() {
	const [formData, setFormData] = useState<ContactFormData>({
		category:"general",
		name: "",
		phoneNumber: "",
		commentaires: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
			category:"general",
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
					<select
	name="category"
	value={formData.category}
	onChange={handleInputChange}
	aria-label="Catégorie de la question"
	required
>
	<option value="general">Question générale</option>
	<option value="portfolio">Projet Portfolio</option>
	<option value="wizdle">Projet Wizdle</option>
	<option value="cv">CV / Recrutement</option>
</select>
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
						name="phoneNumber"
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
