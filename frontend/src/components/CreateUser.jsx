import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api/apiClient';

function Createuser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        if (!/^[a-zA-Z]+$/.test(firstName) || firstName.length > 100) {
            setError('First name must be alphabetical and less than 100 characters.');
            return;
        }

        if (!/^[a-zA-Z]+$/.test(lastName) || lastName.length > 100) {
            setError('Last name must be alphabetical and less than 100 characters.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email must be a valid email address.');
            return;
        }

        try {
            await createUser({ firstName, lastName, email });
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            setError(err.response.data.message);
        }


    };
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <h3>Create User</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary"  onClick={handleSubmit}>Create User</button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {success && <div style={{ color: 'green' }}>User created successfully!</div>}
                </form>
            </div>            
        </div>
    );
}

export default Createuser;