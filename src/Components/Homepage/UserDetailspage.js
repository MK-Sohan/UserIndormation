import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleUser from './SingleUser';

const UserDetailspage = () => {

	const { userId } = useParams();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true)
		fetch("https://dummyjson.com/users")
			.then((res) => res.json())
			.then((data) => {
				const particulerUser = data?.users?.find(u => u.id === parseInt(userId))
				setUser(particulerUser)
				setLoading(false)
			});
	}, []);

	return (
		<div className='flex justify-center mt-10'>
			{loading ? <span>Loading...</span> : <SingleUser value={user} />}
		</div>
	);
};

export default UserDetailspage;