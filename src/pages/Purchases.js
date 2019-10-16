import React, { useState } from 'react'
import { Header } from 'semantic-ui-react'
import { Form, Input, Label, Button, Icon, Message } from 'semantic-ui-react'
import emailjs from 'emailjs-com'

import validate from '../utils/validation'

export default function Purchases() {
  const [form, setFormValues] = useState({
    name: {
      value: '',
      error: false,
    },
    email: {
      value: '',
      error: false,
    },
    purchase_item: {
      value: '',
      error: false,
    },
    cost: {
      value: '',
      error: false,
    },
    loading: false,
    success: null,
  })
  function updateField(e) {
    setFormValues({
      ...form,
      [e.target.name]: {
        // set values of nested state
        value:
          e.target.name === 'cost'
            ? parseFloat(e.target.value).toFixed(2)
            : e.target.value,
        error: validate(e.target),
      },
    })
  }
  function handleSubmit(e) {
    // const inputs = Array.from(
    //   e.target.closest('form').getElementsByTagName('input')
    // )

    // TOOD: make this work
    // inputs.forEach(input => {
    //   console.log(validate(input))
    //   setFormValues({
    //     ...form,
    //     [input.name]: {
    //       value: '',
    //       error: validate(input),
    //     },
    //   })
    // })
    setFormValues({
      ...form,
      loading: true,
    })
    emailjs
      .send('mailjet', 'purchase_request', form, 'user_BTnvr9DFbzZgQ1JBj1hCQ')
      .then(res => {
        setFormValues({
          ...form,
          loading: false,
          success: true,
        })
        console.log('success!', res.status, res.text)
      })
      .catch(err => {
        setFormValues({
          ...form,
          loading: false,
          success: false,
        })
        console.log('failed!', err)
      })
  }
  return (
    <>
      <Header>Purchases</Header>
      <p>Fill out this form to submit a purchase request.</p>
      <Form style={{ marginTop: 20 }} className="validate">
        <Form.Group>
          <Form.Input
            label="Your Name"
            type="text"
            width={6}
            name="name"
            onChange={updateField}
            required
            error={
              form.name.error ? { content: 'Please enter your name' } : null
            }
          />
          <Form.Input
            label="Email Address"
            type="email"
            width={6}
            name="email"
            onChange={updateField}
            required
            error={
              form.email.error ? { content: 'Please enter your email' } : null
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
            name="purchase_item"
            onChange={updateField}
            required
            error={
              form.purchase_item.error
                ? { content: 'Please enter the purchase item' }
                : null
            }
          />
          <Form.Input label="Total Cost" width={3}>
            <Input
              iconPosition="left"
              type="number"
              placeholder="Amount"
              step=".01"
              name="cost"
              placeholder="0.00"
              onChange={updateField}
              value={form.cost}
              required
              error={form.cost.error ? true : null}
            >
              <Icon name="dollar" />
              <input />
            </Input>
          </Form.Input>
        </Form.Group>
        <Button
          primary
          animated="fade"
          type="submit"
          style={{ marginTop: 20 }}
          loading={form.loading}
          onClick={handleSubmit}
        >
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name="paper plane" />
          </Button.Content>
        </Button>
      </Form>
      <Message
        hidden={form.success === null}
        success={form.success}
        negative={form.success === false}
        header={
          form.success
            ? 'Purchase request received!'
            : 'Crap! Something went wrong...'
        }
        content={form.success ? "We'll be in touch." : 'Try it again.'}
      />
    </>
  )
}
