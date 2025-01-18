import React from 'react';

const VendorDashboard = ({ vendor }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Main Dashboard Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Vendor Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-6">
            <img 
              src={vendor.profileImage} 
              alt="Vendor Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{vendor.companyName}</h1>
              <p className="text-gray-600">{vendor.location}</p>
              <div className="flex items-center mt-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {vendor.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Total Supply</h3>
            <p className="text-3xl font-bold text-gray-800">{vendor.totalSupply} MT</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Active Contracts</h3>
            <p className="text-3xl font-bold text-gray-800">{vendor.activeContracts}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Performance Rating</h3>
            <p className="text-3xl font-bold text-gray-800">{vendor.rating}/5</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Company Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Registration No.</span>
                <span className="font-medium">{vendor.registrationNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Coal Type</span>
                <span className="font-medium">{vendor.coalType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mining License</span>
                <span className="font-medium">{vendor.licenseNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contact Email</span>
                <span className="font-medium">{vendor.email}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {vendor.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-800">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;