import React from 'react';

export function ReviewsCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Reviews</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Positive Reviews</span>
            <span className="text-sm text-gray-500">80%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '80%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Neutral Reviews</span>
            <span className="text-sm text-gray-500">17%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-gray-500 rounded-full" style={{ width: '17%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Negative Reviews</span>
            <span className="text-sm text-gray-500">3%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-red-500 rounded-full" style={{ width: '3%' }} />
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          More than <span className="font-medium text-gray-900">1,500,000</span> developers used Creative Tim's products and over <span className="font-medium text-gray-900">700,000</span> projects were created.
        </p>
      </div>

      <button className="mt-6 w-full text-gray-700 font-medium text-sm py-2 px-4 rounded-lg hover:bg-gray-50 border border-gray-200">
        View all reviews
      </button>
    </div>
  );
}