import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import consejos01 from '../../assets/img/ImgClientesDificiles/consejos01.jpg'

class TemaCuatroView extends Component {
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
                <b>Cliente Tímido:</b>
              </h2>
            </Col>
            <Col xs="12" className="  animated fadeInDown">
              <Row>
                <Col xs="8">
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Características:</b>
                    </p>
                    <p className="text-justify">
                      No se sienten cómodos mostrando sus opiniones, quejas o
                      dudas ante otros clientes.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Manera de atenderle:</b>
                    </p>
                    <p className="text-justify">
                      Debemos tratar de generar un clima de confianza,
                      ofreciéndole catálogos u otros soportes visuales que hagan
                      la conversación más relajada, sin necesidad de un contacto
                      visual continuo. Debemos aportar consejos y sugerencias,
                      pero no hacerlo en presencia de otros clientes, para que
                      ellos manifiesten también sus dudas de una forma cómoda.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Errores a evitar:</b>
                    </p>
                    <p className="text-justify">
                      No debemos forzarle a mantener la mirada, o acercarnos
                      demasiado limitando su espacio personal. Tampoco es
                      aconsejable preguntarle sobre sus opiniones o dudas,
                      especialmente en presencia de otros clientes.
                    </p>
                  </div>
                </Col>
                <Col xs="4" className="centrado-fila">
                  <img
                    src={consejos01}
                    style={{ width: 350 }}
                    alt="escucha-activa.jpg"
                    className="img-fluid bordeImagen  animated fadeInUpBig delay-2s  "
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
export default TemaCuatroView
