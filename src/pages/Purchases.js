import React, { useState } from 'react'
import { Header } from 'semantic-ui-react'
import { Form, Input, Label, Button, Icon, Message } from 'semantic-ui-react'

import emailjs from 'emailjs-com'

export default function Purchases() {
  const [form, setFormValues] = useState({
    name: '',
    email: '',
    purchase_item: '',
    cost: '',
    loading: false,
    success: null,
  })
  function updateField(e) {
    setFormValues({
      ...form,
      [e.target.name]:
        e.target.name === 'cost'
          ? parseFloat(e.target.value).toFixed(2)
          : e.target.value,
    })
  }
  function handleSubmit() {
    console.log('submit')
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
      <Form style={{ marginTop: 20 }}>
        <Form.Group>
          <Form.Input
            label="Your Name"
            type="text"
            width={6}
            name="name"
            onChange={updateField}
          />
          <Form.Input
            label="Email Address"
            type="email"
            width={6}
            name="email"
            onChange={updateField}
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
