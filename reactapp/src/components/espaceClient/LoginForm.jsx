import React from 'react';
import { Container, Form, Icon, Input, Button, Header } from 'semantic-ui-react';

const LoginForm = () => {
  return (
    <div className="login-page" style={{ backgroundImage: `url('/img/Default_a_image_for_a_backgorund_barber_shop_website_2.jpg')`, backgroundSize: 'cover', height: '100vh' }}>
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', height: '100%',width: '100%' }}>
      <div className="login-container" style={{ display: 'flex',width: '48.5%' , padding: '2em', borderRadius: '10px', backgroundColor: 'rgb(242 245 249)', flexGrow: 1 }}>
        <div className="login-form" style={{ flex: 1 }}>
          <Form>
            <Header as="h1" style={{ color: '#333', fontSize: '8em', marginBottom: '0.5em', marginTop: '0.5em' }}>El Barber</Header>
            <Header as="h2" style={{ fontSize: '4em', marginBottom: '1em'}}>Connexion</Header>
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
                />
            </Form.Field>
            <Form.Field>
                <Button type="submit" color='blue' style={{ marginTop: '15px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>SE CONNECTER</Button>
            </Form.Field>
            <div className="pasInscrit">
              <p>Pas encore inscrit ? <a href="inscriptionClient.html">inscription</a></p>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  </div>
  );
};

export default LoginForm;
