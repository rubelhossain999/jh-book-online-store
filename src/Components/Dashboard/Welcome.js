import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import admin from '../../assets/admin.svg'
import { AuthContextAPI } from '../../ContextAPI/AuthContext';

const Welcome = () => {
    const { user } = useContext(AuthContextAPI);

    const { data: adminUser } = useQuery({
        queryKey: ["adminUser"],
        queryFn: async () => {
            const res = await fetch(`https://book-resale-server-site.vercel.app/regisusers?email=${user?.email}`);
            const data = res.json();
            return (data);
        }
    });



    return (
        <div>
            {
                adminUser?.map(adminUser => <>
                    {adminUser.admin ?
                        <>
                            <h1 className='text-3xl text-black font-bold'>Are you: {adminUser.admin}</h1>
                        </>
                        :
                        <>
                        <h1 className='text-3xl text-black font-bold'>Are you: {adminUser.role}</h1>

                        </>}
                    <img className='mt-10' src={admin} alt='admin'></img>
                </>)
            }

        </div>
    );
};

export default Welcome;