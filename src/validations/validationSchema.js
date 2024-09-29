import * as Yup from "yup"
export const userSchemaSignUp = Yup.object().shape({
    name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
    password: Yup.string()
        .required("Required")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
            "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
    contact: Yup.string()
        .required("Required")
        .test(
            'is-valid-contact',
            'Must be a valid email or phone number',
            value => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
                return emailRegex.test(value) || phoneRegex.test(value);
            }
        ),


})

export const userSchemaSignUpLogin = Yup.object().shape({
    password: Yup.string()
        .required("Required")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
            "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
    contact: Yup.string()
        .required("Required")
        .test(
            'is-valid-contact',
            'Must be a valid email or phone number',
            value => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
                return emailRegex.test(value) || phoneRegex.test(value);
            }
        ),

})

export const userSchemaChangePassword = Yup.object().shape({
    password: Yup.string()
        .required("Required"),
    newPassword: Yup.string()
        .required("Required")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
            "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
    confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("newPassword"), null], "Password must match")
})

export const userSchemaRename = Yup.object().shape({
    name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),

    phone: Yup.string()
        .required("Required")
        .matches(
            //   /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            "Must be a valid phone number"
        ),
    address: Yup.string()
        .required("City is required")
        .min(2, "City must be at least 2 characters")
})

export const userSchemaSignIn = Yup.object().shape({

    password: Yup.string()
        .required("Required")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
            "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
    phone: Yup.string()
        .required("Required")
        .matches(
            //   /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            "Must be a valid phone number"
        ),
})

export const validationPayCard = Yup.object({
    numberCard: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be 16 digits'),
    nameCard: Yup.string()
        .required('Card holder name is required'),
    date: Yup.string()
        .required('Expiry date is required')
        .matches(/^\d{2}\/\d{2}$/, 'Expiry date must be in MM/YY format'),
    numberCVV: Yup.string()
        .required('CVV is required')
        .matches(/^\d{3}$/, 'CVV must be 3 digits')
});