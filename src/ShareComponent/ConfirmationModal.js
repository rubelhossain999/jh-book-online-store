import React from 'react';

const ConfirmationModal = ({ title, meassage, modalData, successAction, successHandleButton }) => {

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box">
                    <label htmlFor="confirmation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{meassage}</p>
                    <div className="modal-action flex justify-center items-center">
                        <label onClick={() => successHandleButton(modalData)} htmlFor="confirmation-modal" className="btn bg-secondary text-white">{successAction}</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmationModal;