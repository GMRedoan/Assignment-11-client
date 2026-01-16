import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxios from '../Hooks/UseAxios';
import Swal from 'sweetalert2';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    const axiosInstance = useAxios()

    useEffect(() => {
        axiosInstance.post(`/payment-success?session_id=${sessionId}`)
            .then((res) => {
                if (res.data?.alreadyPaid) {
                    Swal.fire({
                        icon: "info",
                        title: 'Payment Already Done!',
                        text: 'Thank you for your donation',
                        confirmButtonColor: '#F91617',
                    })
                    return;
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful!',
                    text: 'Thank you for your donation',
                    confirmButtonColor: '#F91617',
                })
            })
    }, [axiosInstance, sessionId])

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="bg-base-200 shadow-xl rounded-2xl p-10 max-w-md w-full text-center">

                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-base-200 mb-6">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-base-300 mb-2">
                    Payment Successful!
                </h2>

                <p className="text-accent mb-6">
                    Your payment has been completed successfully.
                </p>

                <div className="animate-pulse text-sm text-accent">
                    Confirming transaction...
                </div>
                <div>
                    <Link to='/' className='btn btn-sm md:btn-md btn-primary border-0 text-white hover:bg-white hover:text-primary my-3'>
                        Go to Home
                    </Link>

                    <Link to='/funding' className='btn btn-sm md:btn-md bg-white text-primary hover:text-white hover:bg-primary ml-3'>
                        Go to Fund History
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;