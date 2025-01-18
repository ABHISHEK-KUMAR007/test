// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">Logo</div>
        
//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
//           </svg>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6">
//           <button className="hover:text-gray-300 flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
//             </svg>
//             Profile
//           </button>
          
//           <button className="hover:text-gray-300 flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
//             </svg>
//             Vendors
//           </button>
          
//           <button className="hover:text-gray-300 flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//             </svg>
//             Settings
//           </button>
          
//           <button className="hover:text-gray-300 flex items-center text-red-400">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
//             </svg>
//             Logout
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="absolute top-16 right-0 left-0 bg-gray-800 p-4 md:hidden">
//             <div className="flex flex-col space-y-4">
//               <button className="hover:text-gray-300 flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
//                 </svg>
//                 Profile
//               </button>
              
//               <button className="hover:text-gray-300 flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
//                 </svg>
//                 Vendors
//               </button>
              
//               <button className="hover:text-gray-300 flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//                 </svg>
//                 Settings
//               </button>
              
//               <button className="hover:text-gray-300 flex items-center text-red-400">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
//                 </svg>
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { LogOut, Users, UserPen, Settings, SquarePen } from 'lucide-react';

const Layout = () => {
  const navItems = [
    { id: 1, name: 'Profile', icon: UserPen },
    { id: 2, name: 'Vendors', icon: Users },
    { id: 3, name: 'Settings', icon: Settings },
    { id: 4, name: 'Registor', icon: SquarePen },
    { id: 5, name: 'Logout', icon: LogOut }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Logo Section */}
        <div className="h-16 flex items-center px-4 border-b border-gray-200">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 3L3 8.2V15.8L12 21L21 15.8V8.2L12 3Z" />
            <path d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z" />
          </svg>
          <span className="ml-2 text-xl font-bold text-gray-900">CoalOptimizer</span>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6">
          <div className="px-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
              >
                <item.icon className="h-5 w-5 text-gray-600" />
                <span className="ml-3">{item.name}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome to CoalOptimizer</h1>
        </main>
      </div>
    </div>
  );
};

export default Layout;
