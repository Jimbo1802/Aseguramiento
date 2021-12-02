import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Button2.css";
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  {CodProveedor: 1,Identificacion: 128730961,TipoIdentificacion: "Cedula",Nombre: "Gilberth",TelefonoFijo: 27412864,TelefonoCelular: 84826713,Correo: "jimmy@gmail.com",Direccion: "Limón Centro",},
  {CodProveedor: 2,Identificacion: 128730961,TipoIdentificacion: "Cedula",Nombre: "Gilberth",TelefonoFijo: 27412864,TelefonoCelular: 84826713,Correo: "jimmy@gmail.com",Direccion: "Limón Centro",},
  {CodProveedor: 3,Identificacion: 128730961,TipoIdentificacion: "Cedula",Nombre: "Gilberth",TelefonoFijo: 27412864,TelefonoCelular: 84826713,Correo: "jimmy@gmail.com",Direccion: "Limón Centro",},
  {CodProveedor: 4,Identificacion: 128730961,TipoIdentificacion: "Cedula",Nombre: "Gilberth",TelefonoFijo: 27412864,TelefonoCelular: 84826713,Correo: "jimmy@gmail.com",Direccion: "Limón Centro",},

];




class PersoForm extends React.Component {
  state = {
    data: data,
    form: {
      CodProveedor: "",
      Identificacion: "",
      TipoIdentificacion: "",
      Nombre: "",
      TelefonoFijo: "",
      TelefonoCelular: "",
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
    valorNuevo.CodProveedor = this.state.data.length + 1;
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
      if (dato.CodProveedor == registro.CodProveedor) {
        arreglo[contador].TelefonoFijo = dato.TelefonoFijo;
        arreglo[contador].TelefonoCelular = dato.TelefonoCelular;
        arreglo[contador].Correo = dato.Correo;
        arreglo[contador].Direccion = dato.Direccion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };


  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar al proveedor con el codigo "+dato.CodProveedor+"?");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.CodProveedor == registro.CodProveedor) {
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
            Insertar Proveedor
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr class="text-center">
                <th>Codigo Proveedor</th>
                <th>Identificacion</th>
                <th>Nombre</th>
                <th>Telefono Fijo</th>
                <th>Telefono Celular</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr class="text-center">
                  <td>{elemento.CodProveedor}</td>
                  <td>{elemento.Identificacion}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.TelefonoFijo}</td>
                  <td>{elemento.TelefonoCelular}</td>
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
              <h3>Insertar Proveedor</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Codigo Proveedor:</label>
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
              <label>Telefono Fijo:</label>
              <input className="form-control" name="TelefonoFijo" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Telefono Celular:</label>
              <input className="form-control" name="TelefonoCelular" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Correo Electronico:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handleChange}/>
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
              <h3>Editar Proveedor</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Codigo Proveedor:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.CodProveedor}/>
            </FormGroup>

            <FormGroup>
              <label>Telefono Fijo:</label>
              <input
                className="form-control" name="TelefonoFijo" type="number" onChange={this.handleChange} value={this.state.form.TelefonoFijo}/>
            </FormGroup>
            <FormGroup>
              <label>Telefono Celular:</label>
              <input
                className="form-control" name="TelefonoCelular" type="number" onChange={this.handleChange} value={this.state.form.TelefonoCelular}/>
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