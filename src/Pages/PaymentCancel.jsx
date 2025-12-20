import React from 'react';
import { useNavigate } from 'react-router';

const PaymentCancel = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">

                 <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                    <svg
                        className="w-8 h-8 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>

                 <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Payment Cancelled
                </h2>

                <p className="text-gray-600 mb-6">
                    Your payment was cancelled. No money has been charged.
                </p>

                 <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate('/fundForm')}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
                        Try Again
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full border border-gray-300 hover:bg-gray-100 py-2 rounded-lg font-semibold transition">
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
