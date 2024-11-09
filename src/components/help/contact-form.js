import { Container, Col, Form, Row, Button } from "react-bootstrap";
import "./contact-form.scss";

export default function ContactForm() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>CONTACT US</h2>
          <div className="text-muted">- get connected with us -</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Fullname" />
            </Col>
            <Col sm={6}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Leave a message" />
            </Col>
          </Row>
          <Row>
            <div className="btn-holder">
              <Button type="submit">Submit</Button>
            </div>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
