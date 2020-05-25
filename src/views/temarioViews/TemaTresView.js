import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import tres from '../../assets/img/ImgClientesDificiles/tres.jpg'
class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Clientes Difíciles</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="4" className="">
              <h2
                style={{ marginBottom: '0px' }}
                className="text-center animated fadeInUpBig delay-0s"
              >
                <b> Cliente que discute</b>
              </h2>
              <br />
              <p className="animated fadeInUpBig delay-1s">
                <b>Características:</b>
                <p className="">
                  Es un cliente que presenta deseos de discutir. Tiende a
                  mostrar un aire de superioridad con el personal de ventas,
                  poniendo a prueba la paciencia del mismo.
                </p>
              </p>
              <p
                className="animated fadeInUpBig delay-2s"
                style={{ marginBottom: '0px' }}
              >
                <b>Manera de atenderle:</b>
                <p className="">
                  Debemos atenderlo con firmeza y seguridad. Emplear un estilo
                  asertivo sabiendo decir no cuando sea necesario sin ser
                  agresivo.
                </p>
              </p>

              <p
                className="animated fadeInUpBig delay-3s"
                style={{ marginBottom: '0px' }}
              >
                <b>Errores a evitar:</b>
                <p className="">
                  Trataremos de evitar las discusiones con el cliente, o
                  dejarnos impresionar por su sarcasmo. No consideraremos sus
                  críticas como ofensas personales ni mostraremos indicios de
                  temor.
                </p>
              </p>
            </Col>

            <Col xs="4" className="centrado-fila">
              <img
                src={tres}
                style={{ width: 200 }}
                alt="escucha-activa.jpg"
                className="img-fluid  animated fadeInUpBig delay-2s  "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
