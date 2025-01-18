import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VendorRegistrationForm from "./VendorRegistrationForm.jsx"
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  DollarSign,
  Users,
  Bell,
  ChevronDown,
  Search,
  Menu,
  X,
  TrendingUp,
  AlertCircle,
  BarChart
} from 'lucide-react';

const Sidebar = ({ isMobile, setMobileMenu }) => (
  <div className="bg-gray-900 text-white w-64 p-4 flex flex-col h-screen fixed">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-500 p-2 rounded">
          <Package className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold">VendorPanel</span>
      </div>
      {isMobile && (
        <button onClick={() => setMobileMenu(false)}>
          <X className="w-6 h-6" />
        </button>
      )}
    </div>
    
    <nav className="space-y-2 flex-1">
      {[
        
        { icon: ShoppingCart, label: 'Profile', path: '/'},
        { icon: Package, label: 'Tender', path:'/tenders'},
        { icon: Package, label: 'Registration', path:'/VendorRegistrationForm'},
        

      ].map(({ icon: Icon, label ,path}) => (
        <Link
          key={label}
          to={path}
          className="flex items-center space-x-3 text-gray-300 hover:bg-gray-800 w-full p-3 rounded-lg transition-colors"
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  </div>
);

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      {trend && (
        <div className="flex items-center space-x-1 text-green-500">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+{trend}%</span>
        </div>
      )}
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-gray-500 text-sm">{label}</div>
  </div>
);

const AlertCard = ({ title, description, type = "warning" }) => (
  <div className={`rounded-lg p-4 flex items-start space-x-3 ${
    type === "warning" ? "bg-yellow-50" : "bg-red-50"
  }`}>
    <AlertCircle className={`w-5 h-5 ${
      type === "warning" ? "text-yellow-500" : "text-red-500"
    }`} />
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="font-semibold">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600">
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
    {children}
  </div>
);

const OrderTable = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Recent Orders</h3>
        <button className="text-blue-500 text-sm">View All</button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            { id: '#12345', customer: 'Mining Corp A', status: 'Processing', amount: '$1,234' },
            { id: '#12346', customer: 'Mining Corp B', status: 'Delivered', amount: '$2,345' },
            { id: '#12347', customer: 'Mining Corp C', status: 'Pending', amount: '$3,456' },
          ].map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const VendorDashboard = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenu(true)}
          className="bg-gray-900 text-white p-2 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        lg:block
        ${mobileMenu ? 'block' : 'hidden'}
      `}>
        <Sidebar isMobile={true} setMobileMenu={setMobileMenu} />
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
                <button className="relative">
                  <Bell className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={ShoppingCart} label="Total Orders" value="1,234" trend="12" />
            <StatCard icon={DollarSign} label="Revenue" value="$45,678" trend="8" />
            <StatCard icon={Package} label="Products" value="89" />
            <StatCard icon={Users} label="Customers" value="456" trend="5" />
          </div>

          {/* Alerts */}
          <div className="space-y-4 mb-8">
            <AlertCard
              title="Low Stock Alert"
              description="5 products are running low on inventory"
              type="warning"
            />
            <AlertCard
              title="System Maintenance"
              description="Scheduled maintenance on July 20, 2024"
              type="info"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard title="Revenue Overview">
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <BarChart className="w-8 h-8 text-gray-400" />
              </div>
            </ChartCard>
            <ChartCard title="Order Statistics">
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <BarChart className="w-8 h-8 text-gray-400" />
              </div>
            </ChartCard>
          </div>

          {/* Recent Orders */}
          <OrderTable />
        </main>
      </div>
    </div>
  );
};



export default VendorDashboard;







