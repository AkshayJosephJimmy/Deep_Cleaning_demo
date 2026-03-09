import BookingTable from "./BookingTable";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <span className="text-sky-500 text-xs font-bold uppercase tracking-widest">Admin Panel</span>
          <h1
            className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-1"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Customer Bookings
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-green-400 rounded-full mt-3"></div>
        </div>

        {/* Table card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-600">Live Bookings</span>
          </div>
          <div className="overflow-x-auto">
            <BookingTable />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
