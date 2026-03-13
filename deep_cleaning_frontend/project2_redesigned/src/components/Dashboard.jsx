import BookingTable from "./BookingTable";
import { MdDashboard } from "react-icons/md";
import { FaCalendarCheck, FaUsers, FaClock } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-100 rounded-2xl flex items-center justify-center">
            <MdDashboard className="text-sky-500" size={22} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-400 text-xs">Manage all customer bookings</p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: FaCalendarCheck, label: "Total Bookings", value: "—", color: "sky" },
          { icon: FaUsers, label: "Customers", value: "—", color: "green" },
          { icon: FaClock, label: "Pending", value: "—", color: "amber" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          const colors = {
            sky: "bg-sky-50 text-sky-500",
            green: "bg-green-50 text-green-500",
            amber: "bg-amber-50 text-amber-500"
          };
          return (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[stat.color]}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-800">{stat.value}</p>
                <p className="text-gray-400 text-xs font-medium">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking table */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-800">Customer Bookings</h2>
            <p className="text-gray-400 text-xs mt-0.5">View and manage all incoming service requests</p>
          </div>
          <BookingTable />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
