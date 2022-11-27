import React from 'react';

const VerificationModal = ({ title, meassage, modalData, successAction, successHandleButton }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-veri" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box">
                    <label htmlFor="confirmation-veri" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg flex justify-center items-center">{title}</h3>
                    <p className="py-4">{meassage}</p>
                    <div className="modal-action flex justify-center items-center">
                        <label onClick={() => successHandleButton(modalData)} htmlFor="confirmation-veri" className="btn btn-lg text-white bg-green-600 text-center">{successAction}</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VerificationModal;