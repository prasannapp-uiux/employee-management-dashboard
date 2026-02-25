import EmployeeTable from "../../components/tables/EmployeeTable"
import { UserRoundPlus } from "lucide-react";
import Button from "../../components/ui/button";

const Employee = () =>{
    const employeeList = [
        {
            id:1,
            employeeId:"1001",
            name:"Prasanna",
            email:"john.doe@example.com",
            department:"Engineering",
            role:"Lead Specialist",
            status:"Active",
            avatar: "https://i.pravatar.cc/40?img=1"
        },
        {
            id:2,
            employeeId:"1002",
            name:"Sabari",
            email:"jane.doe@example.com",
            department:"Design",
            role:"Lead Specialist",
            status:"In Active",
            avatar: "https://i.pravatar.cc/40?img=1"
        },
        {
            id:3,
            employeeId:"1003",
            name:"Praveen",
            email:"jim.beam@example.com",
            department:"Sales",
            role:"Lead Specialist",
            status:"On Leave",
            avatar: "https://i.pravatar.cc/40?img=1"
        },
        {
            id:4,
            employeeId:"1004",
            name:"Jill Smith",
            email:"jill.smith@example.com",
            department:"Marketing",
            role:"Lead Specialist",
            avatar: "https://i.pravatar.cc/40?img=1",
            status:"Active"
        },
        {
            id:5,
            employeeId:"1005",
            name:"Jack Smith",
            email:"jack.smith@example.com",
            department:"Business",
            role:"Lead Specialist",
            avatar: "https://i.pravatar.cc/40?img=1",
            status:"Active"
        }
    ]
    return(
        <>
        <div className="flex items-center justify-between mb-4">
        <div className="">
        <h5 className="font-bold text-3xl text-gray-900">Employees</h5>
        <p>Manage your organization's workforce and roles.</p>
        </div>

        <Button  label="Add Employee" icon= {<UserRoundPlus size={16}/>}  />
        </div>
        <EmployeeTable employeeData={employeeList}/>
        </>
    )
}

export default Employee