interface employee_details {
    emp_name: string,
    emp_address: string,
    emp_contact: number,
    emp_data?: object,
    emp_blood_group?: string, 
    emp_location_preference?: string
}

const emp_one: employee_details = {
    emp_name: 'Dheeraj Singh',
    emp_address: 'New Delhi',
    emp_contact: 45346436
}