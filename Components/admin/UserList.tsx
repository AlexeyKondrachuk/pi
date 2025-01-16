"use client"
import React from 'react'
import { useGetUsersQuery } from '../../Redux/ApiSlice';
import { User } from './User';
import '../../styles/admin/user_list_component.scss'

export const UserList = () => {
    
    const { data: users, isLoading, isError } = useGetUsersQuery();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Failed to fetch users</p>;
    console.log(users)
  return (
    <div className='users_list-container'>
    <h2>Список пользователей</h2>
     
   
    <div className='users_list-wrapper'>
      {users?.map((user) => (
        <User key={user.id}  id={user.id} email={user.email}/>
      ))}
    </div>
  </div>
  )
}
