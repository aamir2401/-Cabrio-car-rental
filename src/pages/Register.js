import React from 'react'
import {Row, Col, Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
const Register = () => {
  const dispatch = useDispatch()
  function onFinish(values)
  {
    dispatch(userRegister(values))
    console.log(values)
  }
  return (
    <div className='login'>
        <Row gutter={16} className='d-flex align-items-center'>
            

            <Col lg={16} style={{position:'relative'}}>
            <img alt=''
                    className='w-100 car-bg'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                    <h1 className='login-logo'>/CABRIO</h1>
            </Col>
            <Col lg={8} className='text-left p-5'>
              <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                  <h1>Register</h1>
                  <hr/>
                  <Form.Item name='username' label='Username' rules={[{required:true}]}>
                    <Input/>
                  </Form.Item>
                  <Form.Item name='password' label='Password' rules={[{required:true}]}>
                    <Input/>
                  </Form.Item>
                  <Form.Item name='confirm-password' label='Confirm Password' rules={[{required:true}]}>
                    <Input/>
                  </Form.Item>
                  <button className='btn1 mt-1 mb-2'>Register</button>
                  <br></br>
                  <Link to='/login' className='here-login'>Click Here to Login</Link>
              </Form>
            </Col>
        </Row>
    </div>
  )
}

export default Register