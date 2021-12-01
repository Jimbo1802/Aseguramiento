import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Button2.css";
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  {NumEmpleado: 1,Identificacion: 12,Nombre: "Gilberth",CodigoPuesto: "V2",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro"},
  {NumEmpleado: 2,Identificacion: 12,Nombre: "Gilberth",CodigoPuesto: "V1",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro"},
  {NumEmpleado: 3,Identificacion: 12,Nombre: "Gilberth",CodigoPuesto: "V1",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro"},
  {NumEmpleado: 4,Identificacion: 12,Nombre: "Gilberth",CodigoPuesto: "V3",Numero: 84826713,Correo: "jimontoya1802@gmail.com",Direccion: "Limón Centro"},
];

class VendedorForm extends React.Component {
  state = {
    data: data,
    form: {
      NumEmpleado: "",
      Identificacion: "",
      tipoIdentificacion: "",
      Nombre: "",
      CodigoPuesto: "",
      Numero: "",
      Correo: "",
      Direccion: "",
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
    valorNuevo.NumEmpleado = this.state.data.length + 1;
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
      if (dato.NumEmpleado == registro.NumEmpleado) {
        arreglo[contador].Numero = dato.Numero;
        arreglo[contador].Correo = dato.Correo;
        arreglo[contador].Direccion = dato.Direccion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };


  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar al empleado con el código "+dato.NumEmpleado+" ?");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.NumEmpleado == registro.NumEmpleado) {
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
            Insertar vendedor
          </Button>
          <br />
          <br />
          <Table>
            <thead>
            
              <tr class="text-center">
                <th>Numero Empleado</th>
                <th>Identificacion</th>
                <th>Nombre</th>
                <th>Código de puesto</th>
                <th>Número</th>
                <th>Correo electrónico</th>
                <th>Direccion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr class="text-center">
                  <td>{elemento.NumEmpleado}</td>
                  <td>{elemento.Identificacion}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.CodigoPuesto}</td>
                  <td>{elemento.Numero}</td>
                  <td>{elemento.Correo}</td>
                  <td>{elemento.Direccion}</td>
                  
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
              <h3>Insertar Empleado</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Número de empleado:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1}/>
            </FormGroup>
            <FormGroup>
              <label>Identificacion:</label>
              <input className="form-control" name="Identificacion" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Tipo Identificacion:</label>
              <select className="form-control" name="tipoIdentificacion" onChange={this.handleChange}>
                <option value="Cedula" selected="selected">Cedula nacional</option>
                <option value="Residencia">Residencia</option>
                <option value="otra">La otra que no me acuerdo</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="Nombre" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Código de puesto:</label>
              <select className="form-control" name="CodigoPuesto" onChange={this.handleChange}>
                <option value="V1" selected="selected">V1</option>
                <option value="V2">V2</option>
                <option value="V3">V3</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Número Celular:</label>
              <input className="form-control" name="Numero" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Correo electrónico:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Direccion:</label>
              <input className="form-control" name="Direccion" type="text" onChange={this.handleChange}/>
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
              <h3>Editar Vendedor</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Número empleado:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.NumEmpleado}/>
            </FormGroup>

            <FormGroup>
              <label>Número:</label>
              <input
                className="form-control" name="Numero" type="number" onChange={this.handleChange} value={this.state.form.Numero}/>
            </FormGroup>

            <FormGroup>
              <label>Correo electrónico:</label>
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

export default VendedorForm;
