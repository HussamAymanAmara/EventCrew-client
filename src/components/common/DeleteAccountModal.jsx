import "./CSS/DeleteAccountModal.css";


function DeleteAccountModal(props) {

    if (!props.show) {
        return null;
    }


    return (
        <div className="eventcrew-delete-modal-overlay">

            <div className="eventcrew-delete-modal">

                <h2>
                    {props.title || "Delete account"}
                </h2>

                <p>
                    {props.message ||
                        "Are you sure that you want to delete your account?"}
                </p>


                <div className="eventcrew-delete-modal-actions">

                    <button
                        type="button"
                        className="eventcrew-delete-modal-cancel"
                        onClick={props.onCancel}
                    >
                        No
                    </button>


                    <button
                        type="button"
                        className="eventcrew-delete-modal-confirm"
                        onClick={props.onConfirm}
                    >
                        {props.confirmText || "Yes, delete"}
                    </button>

                </div>

            </div>

        </div>
    );
}


export default DeleteAccountModal;