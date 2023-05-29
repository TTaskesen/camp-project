import {   Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import TaskesenTextInput from '../utilities/customFormControls/TaskesenTextInput';

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı girilmesi zorunludur."),
        unitPrice: Yup.number().required("ürün fiyatı zorunlu")
    })
    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <TaskesenTextInput name="productName" placeholder="Ürün Adı"/>
                    <TaskesenTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    
                    {/* <FormField>
                        <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                        <ErrorMessage name='unitPrice' render={error=>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color='green' type='submit'>E  K  L  E</Button>
                </Form>
            </Formik>
    )
}
