"use client";



import { UserList } from '../../../Components/admin/UserList';
import '../../../styles/admin/users_list_page.scss'

export default function Page() {
  return (

    <div className='users-container'>
    
      <UserList />
    </div>
   
  );
}
