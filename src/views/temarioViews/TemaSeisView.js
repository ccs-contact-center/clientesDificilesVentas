import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import seis from '../../assets/img/ImgClientesDificiles/seis.jpg'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Clientes Difíciles </h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated bounceInDown">
                <b>Cliente Ocupado</b>
              </h2>
            </Col>
            <Col
              xs="10"
              className="centrado-fila animated bounceInDown delay-1s"
            >
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Características:</b>
                </p>
                <p className="text-justify">
                  Este tipo de clientes no tiene tiempo para nada. A la vez que
                  realiza la compra puede estar haciendo otras operaciones de
                  forma simultánea.
                  <br />
                  Dicha intensidad de ocupación puede ser síntoma de gran
                  actividad, pero también de mala organización y desorden.
                </p>
              </div>
            </Col>
            <Col xs="10" className="mt-3 animated bounceInDown delay-2s">
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Manera de atenderle:</b>
                </p>
                <p className="text-justify">
                  Debemos de tratar que se relajen y centren su atención en la
                  conversación.
                  <br />
                  Peguntas como ¿cómo puede usted atender tantos asuntos a la
                  vez? son una buena forma de captar la atención.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-3 animated bounceInDown delay-3s">
            <Col xs="6" sm="4" md="4" className="centrado-fila">
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Errores a evitar:</b>
                </p>
                <p className="text-justify">
                  No debemos forzarlos a centrar su atención, más vale posponer
                  la venta para otro momento si vemos que el cliente no puede
                  ofrecernos atención.
                </p>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <img
                src={seis}
                style={{ width: 360 }}
                alt="Habilidades.png"
                className="img-fluid bordeImagen animated lightSpeedIn delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
