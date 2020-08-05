import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";
import Nota from "./notasReferencia";
import { Row, Col, Button } from "reactstrap";
import AuthService from "../../../services/AuthService";
import API_CCS from "../../../services/API_CCS";
const API = new API_CCS();

class ActividadDrag2 extends Component {
  this.Auth = new AuthService();
  constructor(props) {
   
    super(props);
    this.state = {
      list: [
        {
          id: "1",
          name: "a) Indeciso",
        },
      ],
      list2: [
        {
          id: "2",
          name: "b) Siempre discute",
        },
      ],
      list3: [
        {
          id: "3",
          name: "c) Tímido",
        },
      ],
      list4: [
        {
          id: "4",
          name: "d) Escéptico",
        },
      ],
      list5: [
        {
          id: "4",
          name: "e) Ocupado",
        },
      ],
      list6: [],
      list7: [],
      list8: [],
      list9: [],
      list10: [],
      id_ccs: this.Auth.getProfile().id_ccs,
      form: "clientesDificilesVentas-2",
    };
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);
      alert("Se guardo la actividad 1, con id: " + respuesta[0].id);
    } catch (err) {
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <Row className="  centrado-fila ">
        <Col xs="12">
          <div className="card bg-fondo-btn2">
            <div className="centrado-fila bgImgTabla font-weight-bold">
              <div>
                <ReactSortable
                  list={this.state.list}
                  setList={(newState) => this.setState({ list: newState })}
                  group="shared-group-name"
                  style={{ cursor: "pointer" }}
                >
                  {this.state.list.map((item) => (
                    <div key={item.id} style={{ marginBottom: "0px" }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>

              <div>
                <ReactSortable
                  list={this.state.list2}
                  setList={(newState) => this.setState({ list2: newState })}
                  group="shared-group-name"
                  style={{ cursor: "pointer" }}
                >
                  {this.state.list2.map((item) => (
                    <div key={item.id} style={{ marginBottom: "0px" }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <ReactSortable
                  list={this.state.list3}
                  setList={(newState) => this.setState({ list3: newState })}
                  group="shared-group-name"
                  style={{ cursor: "pointer" }}
                >
                  {this.state.list3.map((item) => (
                    <div key={item.id} style={{ marginBottom: "0px" }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <ReactSortable
                  list={this.state.list4}
                  setList={(newState) => this.setState({ list4: newState })}
                  group="shared-group-name"
                  style={{ cursor: "pointer" }}
                >
                  {this.state.list4.map((item) => (
                    <div key={item.id} style={{ marginBottom: "0px" }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <ReactSortable
                  list={this.state.list5}
                  setList={(newState) => this.setState({ list5: newState })}
                  group="shared-group-name"
                  style={{ cursor: "pointer" }}
                >
                  {this.state.list5.map((item) => (
                    <div key={item.id} style={{ marginBottom: "0px" }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12">
          <div className="card   pl-4 pr-4">
            <h6 className=" mt-2">¡Arrastra aqui!</h6>

            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: "10px" }}
              >
                <ReactSortable
                  list={this.state.list6}
                  setList={(newState) => this.setState({ list6: newState })}
                  group="shared-group-name"
                >
                  {this.state.list6.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: "0px" }}>
                  No debemos ocultar las desventajas del producto o servicio, ni
                  discutir acerca de los aspectos negativos que el cliente
                  señala. Tampoco mostrar signos de impaciencia o considerar las
                  dudas como algo excepcional.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: "10px" }}
              >
                <ReactSortable
                  list={this.state.list7}
                  setList={(newState) => this.setState({ list7: newState })}
                  group="shared-group-name"
                >
                  {this.state.list7.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: "0px" }}>
                  No debemos forzarlos a centrar su atención, más vale posponer
                  la venta para otro momento si vemos que el cliente no puede
                  ofrecernos atención.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: "10px" }}
              >
                <ReactSortable
                  list={this.state.list8}
                  setList={(newState) => this.setState({ list8: newState })}
                  group="shared-group-name"
                >
                  {this.state.list8.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: "0px" }}>
                  No debemos forzarle a mantener la mirada, o acercarnos
                  demasiado limitando su espacio personal. Tampoco es
                  aconsejable preguntarle sobre sus opiniones o dudas,
                  especialmente en presencia de otros clientes.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: "10px" }}
              >
                <ReactSortable
                  list={this.state.list9}
                  setList={(newState) => this.setState({ list9: newState })}
                  group="shared-group-name"
                >
                  {this.state.list9.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: "0px" }}>
                  Trataremos de evitar las discusiones con el cliente, o
                  dejarnos impresionar por su sarcasmo. No consideraremos sus
                  críticas como ofensas personales ni mostraremos indicios de
                  temor.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: "10px" }}
              >
                <ReactSortable
                  list={this.state.list10}
                  setList={(newState) => this.setState({ list10: newState })}
                  group="shared-group-name"
                >
                  {this.state.list10.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: "0px" }}>
                  Debemos dejarle espacio para que reflexione sobre su decisión,
                  nunca agobiarlo. Tampoco debemos presentarle un número
                  excesivo de datos e información, pues aumentará su indecisión
                </p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs="12" className=" mt-3  centrado-fila">
          <Button color="primary" onClick={this.onSave.bind(this)}>
            Enviar
          </Button>
        </Col>
        <Col xs="12" className=" mt-3 centrado-fila ">
          <Nota
            title1="Instrucción:"
            content1="Arrastre  las Palabras correctas al recuadro."
          />
        </Col>
      </Row>
    );
  }
}

export default ActividadDrag2;
