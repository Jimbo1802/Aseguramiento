import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Button2.css";
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  {id: 1,Identificacion: 12,Nombre: "Gilberth",Apellidos: "Montoya Zarate",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro",Edad: 20,},
  {id: 2,Identificacion: 12,Nombre: "Gilberth",Apellidos: "Montoya Zarate",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro",Edad: 20,},
  {id: 3,Identificacion: 123,Nombre: "Gilberth",Apellidos: "Montoya Zarate",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro",Edad: 20,},
  {id: 4,Identificacion: 1234,Nombre: "Gilberth",Apellidos: "Montoya Zarate",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro",Edad: 20,},
  {id: 5,Identificacion: 1245,Nombre: "Gilberth",Apellidos: "Montoya Zarate",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro",Edad: 20,},
];

class PersoForm extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      idIdentificacion: "",
      tipoIdentificacion: "",
      Nombre: "",
      Apellidos: "",
      Numero: "",
      Correo: "",
      Direccion: "",
      Edad: "",
    },
    modalInsertar: false,
    modalActualizar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  };



  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Numero = dato.Numero;
        arreglo[contador].Correo = dato.Correo;
        arreglo[contador].Direccion = dato.Direccion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };


  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar al cliente con la cedula "+dato.Identificacion+" ?");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.Identificacion == registro.Identificacion) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };




  render() {
    return (
      <React.Fragment>
        <Container>
          <br />
          <Button
            className="button2"
            color="success"
            onClick={() => this.mostrarModalInsertar()}
          >
            Insertar nuevo cliente
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr class="text-center">
                <th>Id</th>
                <th>Identificacion</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Numero</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr class="text-center">
                  <td>{elemento.id}</td>
                  <td>{elemento.Identificacion}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.Apellidos}</td>
                  <td>{elemento.Numero}</td>
                  <td>{elemento.Correo}</td>
                  <td>{elemento.Direccion}</td>
                  <td>{elemento.Edad}</td>
                  <td>
                    <Button color="primary" onClick={()=>this.mostrarModalActualizar(elemento)}>Editar</Button> {"  "}
                    <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Cliente</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1}/>
            </FormGroup>
            <FormGroup>
              <label>Identificacion:</label>
              <input className="form-control" name="Identificacion" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Tipo Identificacion:</label>
              <select className="form-control" name="tipoIdentificacion" onChange={this.handleChange}>
                <option value="Cedula">Cedula nacional</option>
                <option value="Residencia">Residencia</option>
                <option value="otra">La otra que no me acuerdo</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="Nombre" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Apellidos:</label>
              <input className="form-control" name="Apellidos" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Numero Celular:</label>
              <input className="form-control" name="Numero" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Correo:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Direccion:</label>
              <input className="form-control" name="Direccion" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Fecha de nacimiento:</label>
              <input className="form-control" name="anime" type="date" onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>Insertar</Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Cliente</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.id}/>
            </FormGroup>

            <FormGroup>
              <label>Numero:</label>
              <input
                className="form-control" name="Numero" type="number" onChange={this.handleChange} value={this.state.form.Numero}/>
            </FormGroup>

            <FormGroup>
              <label>Correo:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handleChange} value={this.state.form.Correo}/>
            </FormGroup>
            <FormGroup>
              <label>Direccion:</label>
              <input className="form-control" name="Direccion" type="text" onChange={this.handleChange} value={this.state.form.Direccion}/>
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}> Editar</Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PersoForm;
