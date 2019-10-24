import {Checkbox} from '@react-spectrum/checkbox';
import {Form, FormItem} from '../src';
import Link from '@react/react-spectrum/Link';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {TextArea, TextField} from '@react-spectrum/textfield';


storiesOf('Form', module)
  .add(
    'Default',
    () => (
      <Form>
        <FormItem label="Company Title">
          <TextField placeholder="Company Title" />
        </FormItem>
        <FormItem label="Life Story">
          <TextArea placeholder="Life Story" />
        </FormItem>
        <FormItem>
          <Checkbox name="agreeToTerms"> 
            <span>I agree to the <Link href="#" target="_self" style={{position: 'relative', zIndex: 1}}>terms and conditions</Link>.</span>
          </Checkbox>
        </FormItem>
      </Form>
    )
  )
  .add(
    'labelAlign: end',
    () => (
      <Form>
        <FormItem label="Company Title" labelAlign="end">
          <TextField placeholder="Company Title" />
        </FormItem>
        <FormItem label="Life Story" labelAlign="end">
          <TextArea placeholder="Life Story" />
        </FormItem>
        <FormItem>
          <Checkbox name="agreeToTerms"> 
            <span>I agree to the <Link href="#" target="_self" style={{position: 'relative', zIndex: 1}}>terms and conditions</Link>.</span>
          </Checkbox>
        </FormItem>
      </Form>
    )
  )
  .add(
    'isRequired: true/false, necessityLabel: label',
    () => (
      <Form>
        <FormItem label="Company Title" isRequired necessityIndicator="label">
          <TextField placeholder="Company Title" />
        </FormItem>
        <FormItem label="Life Story" necessityIndicator="label">
          <TextArea placeholder="Life Story" />
        </FormItem>
        <FormItem>
          <Checkbox name="agreeToTerms"> 
            <span>I agree to the <Link href="#" target="_self" style={{position: 'relative', zIndex: 1}}>terms and conditions</Link>.</span>
          </Checkbox>
        </FormItem>
      </Form>
    )
  )
  .add(
    'isRequired: true/false, necessityLabel: icon',
    () => (
      <Form>
        <FormItem label="Company Title" isRequired necessityIndicator="icon">
          <TextField placeholder="Company Title" />
        </FormItem>
        <FormItem label="Life Story" necessityIndicator="icon">
          <TextArea placeholder="Life Story" />
        </FormItem>
        <FormItem>
          <Checkbox name="agreeToTerms"> 
            <span>I agree to the <Link href="#" target="_self" style={{position: 'relative', zIndex: 1}}>terms and conditions</Link>.</span>
          </Checkbox>
        </FormItem>
      </Form>
    )
  );