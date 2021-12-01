import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Button2.css";
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  {CodLocal: 1,Ubicacion: "Limón",Telefono: 27564135,Correo: "zapateria@gmail.com",DireccionExacta: "20 metros oeste iglesia Limón",ApartadoPostal: 70101},
  {CodLocal: 2,Ubicacion: "Limón",Telefono: 27564135,Correo: "zapateria@gmail.com",DireccionExacta: "20 metros oeste iglesia Limón",ApartadoPostal: 70101},
  {CodLocal: 3,Ubicacion: "Limón",Telefono: 27564135,Correo: "zapateria@gmail.com",DireccionExacta: "20 metros oeste iglesia Limón",ApartadoPostal: 70101},
  {CodLocal: 4,Ubicacion: "Limón",Telefono: 27564135,Correo: "zapateria@gmail.com",DireccionExacta: "20 metros oeste iglesia Limón",ApartadoPostal: 70101},
  {CodLocal: 5,Ubicacion: "Limón",Telefono: 27564135,Correo: "zapateria@gmail.com",DireccionExacta: "20 metros oeste iglesia Limón",ApartadoPostal: 70101},
  {CodLocal: 6,Ubicacion: "Limón",Telefono: 27564135,Correo: "zapateria@gmail.com",DireccionExacta: "20 metros oeste iglesia Limón",ApartadoPostal: 70101},

];

class LocalForm extends React.Component {
  state = {
    data: data,
    form: {
      CodLocal: "",
      Ubicacion: "",
      Telefono: "",
      Correo: "",
      DireccionExacta: "",
      ApartadoPostal: "",
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
    valorNuevo.CodLocal = this.state.data.length + 1;
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
      if (dato.CodLocal == registro.CodLocal) {
        arreglo[contador].Ubicacion = dato.Ubicacion;
        arreglo[contador].Telefono = dato.Telefono;
        arreglo[contador].Correo = dato.Correo;
        arreglo[contador].DireccionExacta = dato.DireccionExacta;
        arreglo[contador].ApartadoPostal = dato.ApartadoPostal;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };


  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el local con el código "+dato.CodLocal+"?");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.CodLocal == registro.CodLocal) {
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
            Insertar Local
          </Button>
          <br />
          <br />
          <Table>
            <thead>
            
              <tr class="text-center">
                <th>Código Local</th>
                <th>Ubicación</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
                <th>Dirección Exacta</th>
                <th>Apartado Postal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr class="text-center">
                  <td>{elemento.CodLocal}</td>
                  <td>{elemento.Ubicacion}</td>
                  <td>{elemento.Telefono}</td>
                  <td>{elemento.Correo}</td>
                  <td>{elemento.DireccionExacta}</td>
                  <td>{elemento.ApartadoPostal}</td>
                  
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
              <h3>Insertar Local</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Código de local:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1}/>
            </FormGroup>
            <FormGroup>
              <label>Ubicación:</label>
              <input className="form-control" name="Ubicacion" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label>Teléfono local:</label>
              <input className="form-control" name="Telefono" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Correo electrónico:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Direccion Exacta:</label>
              <input className="form-control" name="DireccionExacta" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Apartado postal:</label>
              <input className="form-control" name="ApartadoPostal" type="number" onChange={this.handleChange} />
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
              <h3>Editar Local</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Código local:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.CodLocal}/>
            </FormGroup>

            <FormGroup>
              <label>Teléfono:</label>
              <input
                className="form-control" name="Telefono" type="number" onChange={this.handleChange} value={this.state.form.Telefono}/>
            </FormGroup>

            <FormGroup>
              <label>Correo electrónico:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handleChange} value={this.state.form.Correo}/>
            </FormGroup>
            <FormGroup>
              <label>Direccion exacta:</label>
              <input className="form-control" name="DireccionExacta" type="text" onChange={this.handleChange} value={this.state.form.DireccionExacta}/>
            </FormGroup>
            <FormGroup>
              <label>Aparatado Postal:</label>
              <input className="form-control" name="Direccion" type="text" onChange={this.handleChange} value={this.state.form.ApartadoPostal}/>
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

export default LocalForm;