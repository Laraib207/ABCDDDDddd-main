"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Order Placed Successfully!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for your order. We have received your order and will process it shortly.
          </p>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Order ID</label>
              <p className="mt-1 text-lg font-semibold text-gray-900">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                You will receive an email confirmation shortly with your order details.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="/products"
                className="flex-1 bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center"
              >
                Continue Shopping
              </a>
              <a
                href="/"
                className="flex-1 bg-gray-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-center"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
