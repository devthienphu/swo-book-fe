import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Forgot= () => {
    return (
        <>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <div className="flex flex-col w-max gap-y-4">

                    <ErrorMessage className="text-red-400 font-semibold" name="email" component="div" />
                    <Field className="border bg-gray-100 rounded-full p-2 items-left pr-20 " type="email" name="email" placeholder="Địa chỉ email" />
                    <ErrorMessage className="text-red-400 font-semibold" name="password" component="div" />
                    <div className="flex flex-row justify-between bg-gray-100 rounded-full">
                        <Field className="border-none bg-gray-100 rounded-full p-2 items-left" type="password" name="password" placeholder="Nhập mã xác nhận"/>
                        <button className=" bg-orange-600 text-white px-4 rounded-full my-[3px]">Gửi mã</button>
                    </div>
                    <button className="bg-teal-300 p-1 text-white font-bold text-lg rounded-md" type="submit" disabled={isSubmitting}>
                        Xác nhận
                    </button>
                    </div>
                </Form>
            )}
        </Formik>
        </>
    );
}

export default Forgot;
