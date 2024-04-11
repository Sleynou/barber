import React from 'react';
import { Container, Form, Icon, Input, Button, Header, Label } from 'semantic-ui-react';

const RegisterForm = () => {
  return (
    <div className="register-page" style={{ backgroundImage: `url('/img/Default_a_image_for_a_backgorund_barber_shop_website_2.jpg')`, backgroundSize: 'cover', height: '100vh' }}>
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', height: '100%',width: '100%' }}>
      <div className="register-container" style={{ display: 'flex',width: '48.5%' , padding: '2em', borderRadius: '10px', backgroundColor: 'rgb(242 245 249)', flexGrow: 1 }}>
        <div className="register-form" style={{ flex: 1 }}>
          <Form>
            <Header as="h1" style={{ color: '#333', fontSize: '8em', marginBottom: '0.5em', marginTop: '0.5em' }}>El Barber</Header>
            <Header as="h2" style={{ fontSize: '3.5em', marginBottom: '1em'}}>Inscription Client</Header>
            <Form.Field style={{ marginLeft:'28%', width: '400px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Input
                    iconPosition='left'
                    placeholder='Nom'
                    type='text'
                    icon={<Icon name='user' />}
                    required
                />
            </Form.Field>
            <Form.Field style={{ marginLeft:'28%', width: '400px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Input
                    iconPosition='left'
                    placeholder='Prenom'
                    type='text'
                    icon={<Icon name='user' />}
                    required
                />
            </Form.Field>
            <Form.Field inline style={{ marginLeft:'28%', width: '400px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Label style={{ fontSize: '1em' }}>Photo: </Label>
                <Input type="file" id="image" name="image" accept="image/*" required />
            </Form.Field>
            <Form.Field style={{ marginLeft:'28%', width: '400px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Input
                    iconPosition='left'
                    placeholder='Email'
                    type='email'
                    icon={<Icon name='envelope' />}
                />
            </Form.Field>
            <Form.Field style={{ marginLeft:'28%', width: '400px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Input
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    icon={<Icon name='lock' />}
                    required
                />
            </Form.Field>
            <Form.Field>
                <Button type="submit" color='blue' style={{ marginTop: '15px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>S'INSCRIRE</Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    </Container>
  </div>
  );
};

export default RegisterForm;
