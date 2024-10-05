import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField'; // import the InputField component

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password || !confirmPassword || !aadhaar || !pan || !currentAddress || !permanentAddress || !photo) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    alert('Signup successful!');
    setErrorMessage('');
    // Add further signup logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
          <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
          <form onSubmit={handleSignup}>
            {/* Use InputField component */}
            <InputField
              label="Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <InputField
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <InputField
              label="Confirm Password"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
            <InputField
              label="Aadhaar No."
              type="text"
              id="aadhaar"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              placeholder="Enter your Aadhaar number"
            />
            <InputField
              label="PAN No."
              type="text"
              id="pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="Enter your PAN number"
            />
            <InputField
              label="Current Address"
              type="text"
              id="current-address"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
              placeholder="Enter your current address"
            />
            <InputField
              label="Permanent Address"
              type="text"
              id="permanent-address"
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
              placeholder="Enter your permanent address"
            />
            {/* Photo Upload Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="photo">Upload Passport Size Photo</label>
              <input
                type="file"
                id="photo"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-center">
              Already have an account? <Link to="/login" className="text-green-600">Login here</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
