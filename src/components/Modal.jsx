import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";


export default function Modal({ children, open }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
        if (!open) {
            dialog.current.close();
        }
    }, [open])

    return createPortal(
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>,
        document.getElementById('modal'))
}