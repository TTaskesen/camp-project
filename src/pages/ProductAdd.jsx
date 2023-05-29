import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { FormField } from 'semantic-ui-react';

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı girilmesi zorunludur."),
        unitPrice: Yup.number().required("ürün fiyatı zorunlu")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Form>
                    <FormField>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </FormField>
                    <FormField>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </FormField>
                </Form>

            </Formik>
        </div>
    )
}
