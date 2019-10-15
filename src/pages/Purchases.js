import React from 'react'
import { Header } from 'semantic-ui-react'
import { Form, Input, Label, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'

export default function Purchases() {
  return (
    <>
      <Header>Purchases</Header>
      <p>Fill out this form to submit a purchase request.</p>
      <Form style={{ marginTop: 20 }}>
        <Form.Group>
          <Form.Input label="Your Name" type="text" width={6} />
          <Form.Input label="Email Address" type="email" width={6} />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="Total Cost" width={3}>
            <Input
              icon="dollar"
              iconPosition="left"
              type="number"
              placeholder="Amount"
            >
              <Icon name="dollar" />
              <input />
            </Input>
          </Form.Input>
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="Total Cost" width={3}>
            <Input
              icon="dollar"
              iconPosition="left"
              type="number"
              placeholder="Amount"
            >
              <Icon name="dollar" />
              <input />
            </Input>
          </Form.Input>
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="Total Cost" width={3}>
            <Input
              icon="dollar"
              iconPosition="left"
              type="number"
              placeholder="Amount"
            >
              <Icon name="dollar" />
              <input />
            </Input>
          </Form.Input>
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="Total Cost" width={3}>
            <Input
              icon="dollar"
              iconPosition="left"
              type="number"
              placeholder="Amount"
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
          onClick={handleSubmit}
        >
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name="paper plane" />
          </Button.Content>
        </Button>
      </Form>
    </>
  )
}

function handleSubmit() {
  axios
    .post('http://0.0.0.0:3001/api/sendmail')
    .then(function(res) {
      console.log(res)
    })
    .catch(function(err) {
      console.log(err)
    })
}
