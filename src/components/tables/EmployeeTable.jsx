import { Eye,Pencil,Trash} from "lucide-react";

const EmployeeTable = ({ employeeData }) => {
  const thClass = "px-6 py-3 text-left text-sm font-semibold text-gray-500";
  const tdClass = "px-6 py-3 text-left text-sm font-semibold text-gray-500";
  const statusStyles = {
    "active": "bg-green-100 text-green-700",
    "in active": "bg-yellow-100 text-yellow-700",
    "on leave": "bg-red-100 text-red-600",
  }
  return (
    <>
      <div className="bg-white rounded-lg border border-collapse border-gray-300 overflow-x-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 rounded-tl-lg">
              <tr>
                <th className={thClass}>Employee ID</th>
                <th className={thClass}>Name</th>
                <th className={thClass}>Email</th>
                <th className={thClass}>Department</th>
                <th className={thClass}>Role</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {
                employeeData.map((employee) => (
                  <tr key={employee.id} className="">
                    <td className={tdClass}>{employee.employeeId}</td>
                    <td className={tdClass}>
                      <div className="flex items-center gap-2">
                        <img src={employee.avatar || "https://via.placeholder.com/40"} alt="{employee.name}" className="rounded-full w-9 h-9 object-cover" />
                        {employee.name}
                      </div>
                    </td>
                    <td className={tdClass}>{employee.email}</td>
                    <td className={tdClass}>{employee.department}</td>
                    <td className={tdClass}>{employee.role}</td>
                    <td className={tdClass}>
                      <span className={`px-3 py-1 font-medium text-sm rounded-full ${statusStyles[employee.status?.toLowerCase()] || "bg-gray-100 text-gray-500"}`}>{employee.status}</span>
                    </td>
                    <td className={tdClass}>
                      <div className="flex item-center gap-3">
                        <button ><Eye size={16} /></button>
                        <button><Pencil size={16} /></button>
                        <button><Trash size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default EmployeeTable;
