import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'
import dos from '../../assets/img/ImgClientesDificiles/dos.png'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Tipos de clientes</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col md="12" className="">
              <h2
                style={{ marginBottom: '0px' }}
                className="text-center mb-3 animated bounceInRight delay-0s "
              >
                <b>Cliente indeciso</b>
              </h2>
            </Col>

            <Col md="8" sm="7" className="">
              <Row>
                <Col xs="6">
                  <p
                    style={{ marginBottom: '0px' }}
                    className="text-justify animated bounceInRight delay-1s"
                  >
                    <b>Características:</b>
                    <br />
                    Se trata de un cliente con muchas dudas durante el proceso
                    de compra.
                  </p>
                </Col>
                <Col xs="6">
                  <p
                    style={{ marginBottom: '0px' }}
                    className="text-justify animated bounceInRight delay-2s"
                  >
                    <b>Manera de atenderle:</b>
                    <br />
                    No debemos imponernos ni impacientarnos. Trataremos de
                    ayudarle mostrándole nuestros productos o servicios,
                    resumiendo los puntos importantes en diferentes ocasiones..
                  </p>
                </Col>
                <Col xs="12" className="mt-3 centrado-fila">
                  <div style={{ width: '330px' }}>
                    <p
                      style={{ marginBottom: '0px' }}
                      className="text-justify animated bounceInRight delay-3s"
                    >
                      <b> Errores a evitar:</b>
                      <br />
                      Debemos dejarle espacio para que reflexione sobre su
                      decisión, nunca agobiarlo. Tampoco debemos presentarle un
                      número excesivo de datos e información, pues aumentará su
                      indecisión.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4" sm="5" className="centrado-fila ">
              <img
                src={dos}
                style={{ width: 260 }}
                alt="icono.png"
                className="img-fluid animated bounceInRight delay-4s "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
