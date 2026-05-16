import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from '../components/FeatureCard';
import './ServicesPage.css';

const services = [
  {
    title: 'Service 1',
    description: 'This is service 1',
    icon: 'https://via.placeholder.com/50'
  },
  {
    title: 'Service 2',
    description: 'This is service 2',
    icon: 'https://via.placeholder.com/50'
  },
  {
    title: 'Service 3',
    description: 'This is service 3',
    icon: 'https://via.placeholder.com/50'
  }
];

const ServicesPage = () => {
  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col key={index} xl={4} lg={4} md={6} sm={12}>
            <FeatureCard title={service.title} description={service.description} icon={service.icon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;