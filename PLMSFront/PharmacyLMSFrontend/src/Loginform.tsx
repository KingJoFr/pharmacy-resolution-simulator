import { useState } from 'react'
import {axios} from 'axios';
import './App.css'

interface   LoginFormProps {
  username: string;
  password: string;
}
function LoginForm({username, password}: LoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  }
    console.log('Username:', username);
    console.log('Password:', password);
  const [formData, setFormData] = useState({ username: '', password: '' });

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username"></label>
    <input 
        id='username' 
        name='username' 
        type="text" 
        value={form.username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username" />
    </form>
    </>
  )
}

export default LoginForm;
