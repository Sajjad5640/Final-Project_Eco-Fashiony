import { useState } from "react";

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({ name: "", age: "", phone: "", total: "" });
    const [editIndex, setEditIndex] = useState(-1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    };

    const addCustomer = () => {
        if (!newCustomer.name || !newCustomer.age || !newCustomer.phone || !newCustomer.total) {
            alert("Please fill all the fields");
            return;
        }
        setCustomers([...customers, newCustomer]);
        setNewCustomer({ name: "", age: "", phone: "", total: "" });
    };

    const deleteCustomer = (index) => {
        setCustomers(customers.filter((_, i) => i !== index));
    };

    const editCustomer = (index) => {
        setEditIndex(index);
        setNewCustomer(customers[index]);
    };

    const updateCustomer = () => {
        if (!newCustomer.name || !newCustomer.age || !newCustomer.phone || !newCustomer.total) {
            alert("Please fill all the fields");
            return;
        }
        const updatedCustomers = customers.map((customer, i) => i === editIndex ? newCustomer : customer);
        setCustomers(updatedCustomers);
        setNewCustomer({ name: "", age: "", phone: "", total: "" });
        setEditIndex(-1);
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">Customer Management</h1>
            <div className="flex justify-around gap-2">
                <input type="text" name="name" value={newCustomer.name} onChange={handleInputChange} placeholder="Customer Name" className="input input-bordered" />
                <input type="number" name="age" value={newCustomer.age} onChange={handleInputChange} placeholder="Customer Age" className="input input-bordered" />
                <input type="text" name="phone" value={newCustomer.phone} onChange={handleInputChange} placeholder="Phone Number" className="input input-bordered" />
                <input type="number" name="total" value={newCustomer.total} onChange={handleInputChange} placeholder="Total Purchase ($)" className="input input-bordered" />
                {editIndex === -1 ? (
                    <button onClick={addCustomer} className="btn btn-outline btn-success">Add Customer</button>
                ) : (
                    <button onClick={updateCustomer} className="btn btn-outline btn-info">Update Customer</button>
                )}
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Total Purchase ($)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.phone}</td>
                                <td>${customer.total}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="btn btn-xs btn-outline btn-error" onClick={() => deleteCustomer(index)}>Delete</button>
                                        <button className="btn btn-xs btn-outline btn-info" onClick={() => editCustomer(index)}>Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {customers.length === 0 && <p className="text-4xl text-red-600 text-center">No Customers Found</p>}
        </div>
    );
};

export default CustomerList;