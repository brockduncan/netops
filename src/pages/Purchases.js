import React from 'react'
import { Header } from 'semantic-ui-react'
import { Form, Button } from 'semantic-ui-react'

export default function Purchases() {
  return (
    <>
      <Header>Purchases</Header>
      <p>Fill out this form to submit a purchase request.</p>
      <Form>
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
          <Form.Input label="$ Purchase Price" type="number" width={3} />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="$ Purchase Price" type="number" width={3} />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="$ Purchase Price" type="number" width={3} />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchase Item"
            type="text"
            placeholder="Product Name or URL"
            width={9}
          />
          <Form.Input label="$ Purchase Price" type="number" width={3} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}
