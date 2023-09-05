import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegisterAccount = () => {
    return (
        <>
    <Formik
       initialValues={{ fullname:'' ,email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         )
        {
           errors.email = 'Invalid email address';
        }

        if(!values.fullname){
            errors.fullname = 'Required';
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
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-row justify-between ml-2">
                    <p className="font-semibold text-sm">Tên của bạn?</p>
                    <ErrorMessage className="text-red-400 font-semibold" name="fullname" component="div" />
                </div>
                <Field className="border bg-gray-100 rounded-full p-2 items-left" type="fullname" name="fullname" placeholder="Họ và tên của bạn" />
                
                <div className="flex flex-row justify-between ml-2">
                    <p className="font-semibold text-sm">Email</p>
                    <ErrorMessage className="text-red-400 font-semibold" name="email" component="div" />
                </div>
                
                <Field className="border bg-gray-100 rounded-full p-2 items-left " type="email" name="email" placeholder="Địa chỉ email" />

                <ErrorMessage className="text-red-400 font-semibold" name="password" component="div" />
                <Field className="border bg-gray-100 rounded-full p-2 items-left pr-20 md:pr-32" type="password" name="password" placeholder="Mật khẩu"/>

                <button className="bg-teal-300 p-1 text-white font-bold text-lg rounded-md" type="submit" disabled={isSubmitting}>
                    Đăng nhập
                </button>
            </div>
         </Form>
       )}
    </Formik>
        </>
    );
}

export default RegisterAccount;
