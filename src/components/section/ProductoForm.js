import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Button2.css";
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,} from "reactstrap";




const data = [
  {CodProducto: 1,Descripcion: "Nike air",Cantidad: 5,TallaNacional: "42",TallaUsa: 5,PrecioCosto: 15000,PrecioVenta: 68000},
  {CodProducto: 2,Descripcion: "Adidas Max",Cantidad: 7,TallaNacional: "46",TallaUsa: 8,PrecioCosto: 12000,PrecioVenta: 64000},
  {CodProducto: 3,Descripcion: "Converse",Cantidad: 7,TallaNacional: "46",TallaUsa: 8,PrecioCosto: 12000,PrecioVenta: 64000},
  {CodProducto: 4,Descripcion: "Koala",Cantidad: 7,TallaNacional: "46",TallaUsa: 8,PrecioCosto: 12000,PrecioVenta: 64000},
  {CodProducto: 5,Descripcion: "Brinca charcos",Cantidad: 7,TallaNacional: "46",TallaUsa: 8,PrecioCosto: 12000,PrecioVenta: 64000},
];

class ProductoForm extends React.Component {
  state = {
    data: data,
    form: {
      CodProducto: "",
      Descripcion: "",
      Cantidad: "",
      CodEstilo:"",
      CodMaterial:"",
      CodColor:"",
      TallaNacional: "",
      TallaUsa: "",
      PrecioCosto: "",
      PrecioVenta: "",
      UrlImagen: "",
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
    valorNuevo.CodProducto = this.state.data.length + 1;
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
      if (dato.CodProducto == registro.CodProducto) {
        arreglo[contador].Descripcion = dato.Descripcion;
        arreglo[contador].Cantidad = dato.Cantidad;
        arreglo[contador].PrecioCosto = dato.PrecioCosto;
        arreglo[contador].PrecioVenta = dato.PrecioVenta;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };


  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar el producto con el codigo "+dato.CodProducto+" ?");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.CodProducto == registro.CodProducto) {
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
            Insertar  producto
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr class="text-center">
                <th>Codigo Producto</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Talla Nacional</th>
                <th>Talla USA</th>
                <th>Precio Costo</th>
                <th>Precio Venta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr class="text-center">
                  <td>{elemento.CodProducto}</td>
                  <td>{elemento.Descripcion}</td>
                  <td>{elemento.Cantidad}</td>
                  <td>{elemento.TallaNacional}</td>
                  <td>{elemento.TallaUsa}</td>
                  <td>{elemento.PrecioCosto}</td>
                  <td>{elemento.PrecioVenta}</td>
                  
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
              <h3>Insertar Producto</h3>
            </div>
          </ModalHeader>


          



         
     
     
      
      
          <ModalBody>
            <FormGroup>
              <label>Codigo Producto:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length + 1}/>
            </FormGroup>
            <FormGroup>
              <label>Descripcion:</label>
              <input className="form-control" name="Descripcion" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Cantidad:</label>
              <input className="form-control" name="Cantidad" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Codigo Estilo:</label>
              <select className="form-control" name="CodEstilo" onChange={this.handleChange}>
                <option value="Planta Alta">Planta Alta</option>
                <option value="Planta Baja">Planta Baja</option>
                <option value="Otra">Otra</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Codigo Material:</label>
              <select className="form-control" name="CodMaterial" onChange={this.handleChange}>
                <option value="Cuero">Cuero</option>
                <option value="Seda">Seda</option>
                <option value="Otra">Otra</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Codigo Color:</label>
              <select className="form-control" name="CodColor" onChange={this.handleChange}>
                <option value="Rojo">Rojo</option>
                <option value="Amarillo">Amarillo</option>
                <option value="Otro">Otro</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Talla Nacional:</label>
              <input className="form-control" name="TallaNacional" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Talla USA:</label>
              <input className="form-control" name="TallaUsa" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Precio Costo:</label>
              <input className="form-control" name="PrecioCosto" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Precio Venta:</label>
              <input className="form-control" name="PrecioVenta" type="number" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Imagen del producto:</label>
              <br/>
              <input type="file" name="UrlImagen" accept="image/png, image/jpeg" onChange={this.handleChange}/>
              
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
              <h3>Editar Producto</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Codigo Producto:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.CodProducto}/>
            </FormGroup>

            <FormGroup>
              <label>Descripcion:</label>
              <input
                className="form-control" name="Descripcion" type="text" onChange={this.handleChange} value={this.state.form.Descripcion}/>
            </FormGroup>

            <FormGroup>
              <label>Cantidad:</label>
              <input className="form-control" name="Cantidad" type="number" onChange={this.handleChange} value={this.state.form.Cantidad}/>
            </FormGroup>
            <FormGroup>
              <label>Precio Costo:</label>
              <input className="form-control" name="PrecioCosto" type="number" onChange={this.handleChange} value={this.state.form.PrecioCosto}/>
            </FormGroup>
            <FormGroup>
              <label>Precio Venta:</label>
              <input className="form-control" name="PrecioVenta" type="number" onChange={this.handleChange} value={this.state.form.PrecioVenta}/>
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

export default ProductoForm;