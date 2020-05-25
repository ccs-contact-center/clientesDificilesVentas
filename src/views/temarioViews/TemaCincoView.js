import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import cinco from '../../assets/img/ImgClientesDificiles/cinco.png'

class TemaCincoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Clientes Difíciles </h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>Cliente escéptico:</b>
              </h2>
            </Col>
            <Col xs="12" className="  animated fadeInDown">
              <Row className="centrado-fila">
                <Col xs="8">
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Características:</b>
                    </p>
                    <p className="text-justify">
                      negativos de los productos y a infravalorar los datos
                      positivos. Considera que puede estar siendo manipulado por
                      técnicas de venta o estrategias de marketing.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Manera de atenderle:</b>
                    </p>
                    <p className="text-justify">
                      Debemos destacar datos y hechos objetivos del producto o
                      servicio, destacando primero las desventajas y luego todas
                      las ventajas que puede ofrecer. Debemos también ser
                      pacientes ante sus dudas u objeciones, hablando con
                      seguridad.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Errores a evitar:</b>
                    </p>
                    <p className="text-justify">
                      No debemos ocultar las desventajas del producto o
                      servicio, ni discutir acerca de los aspectos negativos que
                      el cliente señala. Tampoco mostrar signos de impaciencia o
                      considerar las dudas como algo excepcional.
                    </p>
                  </div>
                </Col>
                <Col xs="4" className="centrado-fila">
                  <img
                    src={cinco}
                    style={{ width: 350 }}
                    alt="escucha-activa.jpg"
                    className="img-fluid bordeImagen  animated fadeInUpBig delay-1s  "
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
