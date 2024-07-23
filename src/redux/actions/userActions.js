// import axios from "axios";
// import {message} from 'antd'

// export const userLogin=(reqObj)=>async dispatch=>{
    
//     dispatch({type: 'LOADING' , payload:true})

//     try {
//         const response = await axios.post('/api/users/login' , reqObj)
//         localStorage.setItem('user' , JSON.stringify(response.data))
//         message.success('Logged In')
//         dispatch({type: 'LOADING' , payload:false})
//         // setTimeout(() => {
//         //     window.location.href='/'
         
//         // }, 500);
//     } catch (error) {
//         console.log('Error', error)
//         message.error('Something went wrong')
//         dispatch({type: 'LOADING' , payload:false})
//     }
// }

// export const userRegister=(reqObj)=>async dispatch=>{
    
//     dispatch({type: 'LOADING' , payload:true})

//     try {
//         const response = await axios.post('/api/users/register' , reqObj)
//         message.success('Registration successfull')
//         // setTimeout(() => {
//         //     window.location.href='/login'
         
//         // }, 500);
       
//         dispatch({type: 'LOADING' , payload:false})
        
//     } catch (error) {
//         console.log(error)
//         message.error('Something went wrong')
//         dispatch({type: 'LOADING' , payload:false})
//     }
// }

// import axios from "axios";
// import { message } from 'antd';

// const LOADING = 'LOADING';

// export const userLogin = (reqObj) => async (dispatch) => {
//     dispatch({ type: LOADING, payload: true });

//     try {
//         const response = await axios.post('/api/users/login', reqObj);
//         localStorage.setItem('user', JSON.stringify(response.data));
//         message.success('Logged In');
//         dispatch({ type: LOADING, payload: false });
//         // Navigate to a different route using React Router if needed
//         // history.push('/');
//     } catch (error) {
//         console.error('Error:', error);

//         if (error.response) {
//             console.log('Server responded with status code:', error.response.status);

//             if (error.response.status === 400) {
//                 message.error('Bad Request: Please check your input.');
//             } else if (error.response.status === 401) {
//                 message.error('Unauthorized: Please log in.');
//             } else {
//                 message.error('An error occurred on the server.');
//             }
//         } else if (error.request) {
//             console.error('No response received:', error.request);
//             message.error('No response from the server.');
//         } else {
//             console.error('Error:', error.message);
//             message.error('An error occurred: ' + error.message);
//         }

//         dispatch({ type: LOADING, payload: false });
//     }
// }

// export const userRegister = (reqObj) => async (dispatch) => {
//     dispatch({ type: LOADING, payload: true });

//     try {
//         const response = await axios.post('/api/users/register', reqObj);
//         message.success('Registration successful');
//         // Navigate to a different route using React Router if needed
//         // history.push('/login');
//         dispatch({ type: LOADING, payload: false });
//     } catch (error) {
//         console.error('Error:', error);
          
//         if (error.response) {
//             console.log('Server responded with status code:', error.response.status);

//             if (error.response.status === 400) {
//                 message.error('Bad Request: Please check your input.');
//             } else {
//                 message.error('An error occurred on the server.');
//             }
//         } else if (error.request) {
//             console.error('No response received:', error.request);
//             message.error('No response from the server.');
//         } else {
//             console.error('Error:', error.message);
//             message.error('An error occurred: ' + error.message);
//         }

//         dispatch({ type: LOADING, payload: false });
//     }
// }




import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/register' , reqObj)
        message.success('Registration successfull')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}