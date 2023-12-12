import React, {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/UI/InputError.jsx';
import TextInput from '@/Components/UI/TextInput.jsx';
import {Head, Link, useForm} from '@inertiajs/react';
import Breadcrumb from "@/Components/FrontEnd/Breadcrumb/index.jsx";
import {Col, Container, Row} from "react-bootstrap";

import Style from "./Login.module.css"

export default function Login({status, page, title}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>
            <Breadcrumb/>
            <div className="section login-register-section section-padding">
                <Container>
                    <div className="login-register-wrap"
                         style={{
                             display: "flex",
                             flexDirection: "row",
                             justifyContent: "center",
                             alignItems: "center"
                         }}>
                        <Col lg={5}>
                            <div className="login-register-box">
                                <div className="section-title">
                                    <h2 className="title">{title}</h2>
                                </div>

                                <div className="login-register-form">
                                    <form onSubmit={submit}>
                                        <div className="single-form">
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className={`form-control ${Style.input}`}
                                                autoComplete="username"
                                                placeholder="Email"
                                                isFocused={true}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            <InputError message={errors.email} className="mt-2 text-danger"/>
                                        </div>
                                        <div className="single-form">
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className={`form-control ${Style.input}`}
                                                autoComplete="current-password"
                                                placeholder="Password"
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <InputError message={errors.password} className="mt-2 text-danger"/>
                                        </div>
                                        <div className="single-form form-check">
                                            <label className="form-check-label">
                                                <Checkbox
                                                    name="remember"
                                                    checked={data.remember}
                                                    onChange={(e) => setData('remember', e.target.checked)}
                                                />
                                                <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="form-btn">
                                            <button
                                                className={Style.btn}
                                                type={"submit"}
                                                disabled={processing}
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="single-form">
                                            <p>
                                                <Link
                                                    href={route('password.request')}
                                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Container>
            </div>
        </GuestLayout>
    );
}
