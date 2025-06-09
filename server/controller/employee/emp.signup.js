import { Employee } from "../../models/employee.model.js";

const empSignUp = async (req, res) => {
    const { firstName, email, password } = req.body;
    console.log(firstName, email);
    try {
        const isSignUpEmp = await Employee.create({ firstName, email, password });
        console.log("Result of Employee",isSignUpEmp);
        
        if (!isSignUpEmp) {
            return res.status(404).json({
                status: false,
                message: "Failed to create HR"
            });
        }
        else {
            return res.status(200).json({
                status: true,
                message: "Employee created successfully"
            })
        };
            
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            message:"Server Error!"
        })
        
    }
    
};

export default empSignUp;