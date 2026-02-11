import { useState } from "react";
import emailjs from "@emailjs/browser";
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

	const handleFormSubmit = async (event: React.FormEvent) => {
		event.preventDefault(); // empêche le rechargement de la page
		console.log("FORM SUBMITTED");
		try {
/*			await commentLeave();
			console.log("FETCH SUCCESS");*/
		await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          category: formData.category,
          name: formData.name,
          phone: formData.phoneNumber,
          commentaires: formData.commentaires,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

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
	} catch (error) {
		console.error("FETCH ERROR", error);
	}
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
					<option value="wizdle">Projet Notebook</option>
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

					<button type="submit" className="btn-return-odyssey">Envoyer</button>
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
