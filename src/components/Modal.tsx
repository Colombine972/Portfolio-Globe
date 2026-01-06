import type { ReactNode } from "react";
import "../styles/Modal.css";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
	console.log("Modal render - isOpen =", isOpen);

	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<button
				type="button"
				className="modal-close"
				onClick={onClose}
				aria-label="Fermer"
			>
				×
			</button>

			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{/* ✅ wrapper qui porte le layout */}
				<div className="modal-inner">{children}</div>
			</div>
		</div>
	);
}

export default Modal;
