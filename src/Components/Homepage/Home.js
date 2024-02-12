import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const Home = () => {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    address: {
      address: '',
      city: ''
    },
    company: {
      name: ''
    }
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      case 'email':
        return a.email.localeCompare(b.email);
      case 'company':
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value
      }
    }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      company: {
        ...prevUser.company,
        [name]: value
      }
    }));
  };

  const handleAddUser = () => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then((data) => setUsers((prevUsers) => [...prevUsers, data]));

    // Clear the form after adding the new user
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      address: {
        address: '',
        city: ''
      },
      company: {
        name: ''
      }
    });
  };

  return (
    <div>
      <div className="allusers">
        <div class="mb-16">
          <dh-component>
            <div class="container flex justify-center mx-auto pt-16">
              <div>
                <p class="text-gray-500 text-lg text-center font-normal pb-3">
                </p>
                <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6  mx-auto">
                  All Users
                </h1>
              </div>
            </div>

            <div class="w-full bg-gray-100 px-10 pt-10">
              <div className="lg:pb-[100px]">
                <input
                  className='h-[60px] w-[300px] pl-[10px] border-2 border-gray'
                  type="search"
                  placeholder='Search by Name'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  className='h-[60px] w-[200px] pl-[10px] border-2 border-gray ml-4'
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="name">Sort by Name</option>
                  <option value="email">Sort by Email</option>
                  <option value="company">Sort by Company Name</option>
                </select>
              </div>

              {/* Add User Form */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Add New User</h2>
                <form>
                  <label className='flex'>
                  <p className='w-[130px]'>  First Name:</p>
                    <input
                      type="text"
                      name="firstName"
                      value={newUser.firstName}
                      onChange={handleInputChange}
                      className='border-[1px] border-gray-500 p-1 mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <label className='flex items-center'>
                    <p className='w-[130px]'>Last Name:</p>
                    
                    <input
                      type="text"
                      name="lastName"
                      value={newUser.lastName}
                      onChange={handleInputChange}
                      className='border-[1px] border-gray-500 p-1 mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <label className='flex items-center'>
                    <p className='w-[130px]'>                    Email:
</p>
                    <input
                      type="text"
                      name="email"
                      value={newUser.email}
                      onChange={handleInputChange}
                      className='border-[1px] border-gray-500 p-1 mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <label className='flex items-center'>
                    <p className='w-[130px]'> Image Link:</p>
                    <input
                      type="text"
                      name="image"
                      value={newUser.image}
                      onChange={handleInputChange}
                      className='border-[1px] border-gray-500 p-1 mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <label className='flex items-center mt-5'>
                    <p className='w-[130px]'>Address:</p>
                    <input
                      type="text"
                      name="address"
                      value={newUser.address.address}
                      onChange={handleAddressChange}
                      className='border-[1px] border-gray-500 p-1  mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <label className='flex items-center '>
                    <p className='w-[130px]'>                    City:
</p>
                    <input
                      type="text"
                      name="city"
                      value={newUser.address.city}
                      onChange={handleAddressChange}
                      className='border-[1px] border-gray-500 p-1 mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <label className='flex items-center '>
                    <p className='w-[130px]'>Company Name:</p>
                    <input
                      type="text"
                      name="name"
                      value={newUser.company.name}
                      onChange={handleCompanyChange}
                      className='border-[1px] border-gray-500 p-1 mb-2 focus:outline-none'
                    />
                  </label>
                  <br />
                  <button className='px-5 py-1.5 text-white mt-5 bg-red-500' type="button" onClick={handleAddUser}>
                    Add User
                  </button>
                </form>
              </div>

              <div className="flex justify-center gap-[20px] items-center">
                <div class=" mx-auto">
                  <div
                    role="list"
                    aria-label="Behind the scenes People "
                    class="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around"
                  >
                    {sortedUsers?.map((value) => (
                      <SingleUser key={value?.id} value={value} ></SingleUser>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </dh-component>
        </div>
      </div>
    </div>
  );
};

export default Home;