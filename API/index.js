const sql = require('mssql');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const dbConfig = {
  user: 'sa',
  password: 'antihack123',
  server: 'localhost',
  database: 'proyecto',
  port: 1433,
};
const conn = new sql.ConnectionPool(dbConfig);

app.post('/api/InsertarCliente', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('Identificacion', sql.Int, req.body.Identificacion);
      request.input('TipoIdentificacion', sql.VarChar(255), req.body.TipoIdentificacion);
      request.input('Nombre', sql.VarChar(255), req.body.Nombre);
      request.input('Apellidos', sql.VarChar(255), req.body.Apellidos);
      request.input('NumeroCelular', sql.VarChar(255), req.body.NumeroCelular);
      request.input('Correo', sql.VarChar(255), req.body.Correo);
      request.input('Direccion', sql.VarChar(255), req.body.Direccion);
      request.input('FechaNacimiento', sql.VarChar(255), req.body.FechaNacimiento);
      request
        .execute(
          'InsertarCliente'
        )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.post('/api/EditarCliente', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('CodigoCliente', sql.Int, req.body.CodigoCliente);
      request.input('NumeroCelular', sql.Int, req.body.NumeroCelular);
      request.input('Correo', sql.VarChar(255), req.body.Correo);
      request.input('Direccion', sql.VarChar(255), req.body.Direccion);

      request
      .execute(
        'EditarCliente'
      )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EliminarCliente', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('CodigoCliente', sql.Int, req.body.CodigoCliente);
  
      request
      .execute(
        'EliminarCliente'
      )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});
//---------------------------------------------------------------
app.post('/api/InsertarEmpleado', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('Identificacion', sql.Int, req.body.Identificacion);
      request.input('TipoIdentificacion', sql.VarChar(255), req.body.TipoIdentificacion);
      request.input('Nombre', sql.VarChar(255), req.body.Nombre);
      request.input('CodPuesto', sql.Int, req.body.CodPuesto);
      request.input('Telefono', sql.Int, req.body.Telefono);
      request.input('Correo', sql.VarChar(255), req.body.Correo);
      request.input('Direccion', sql.VarChar(255), req.body.Direccion);
      request
        .execute(
          'InsertarEmpleado'
        )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});


app.post('/api/EditarEmpleado', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('CodigoEmpleado', sql.Int, req.body.CodigoEmpleado);
      request.input('Telefono', sql.Int, req.body.Telefono);
      request.input('Correo', sql.VarChar(255), req.body.Correo);
      request.input('Direccion', sql.VarChar(255), req.body.Direccion);
      request
        .execute(
          'EditarEmpleado'
        )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EliminarEmpleado', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('CodigoEmpleado', sql.Int, req.body.CodigoEmpleado);
  
      request
      .execute(
        'EliminarEmpleado'
      )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/InsertarLocal', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('Ubicacion', sql.VarChar(255), req.body.Ubicacion);
      request.input('Telefono', sql.Int, req.body.Telefono);
      request.input('Correo', sql.VarChar(255), req.body.Correo);
      request.input('Direccionexacta', sql.VarChar(255), req.body.Direccionexacta);
      request.input('Apartadopostal', sql.VarChar(255), req.body.Apartadopostal);
      request.execute(
        'InsertarLocal'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EditarLocal', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('CodigoLocal', sql.Int, req.body.CodigoLocal);
      request.input('Telefono', sql.Int, req.body.Telefono);
      request.input('Correo', sql.VarChar(255), req.body.Correo);
      request.input('Direccion', sql.VarChar(255), req.body.Direccion);
      request.input('Apartadopostal', sql.VarChar(255), req.body.Apartadopostal);
      request.execute(
        'EditarLocal'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EliminarLocal', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request.input('CodigoLocal', sql.Int, req.body.CodigoLocal);
  
      request
      .execute(
        'EliminarLocal'
      )
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/InsertarProducto', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('Descripcion', sql.VarChar(255), req.body.Descripcion);
      request.input('CodEstilo', sql.Int, req.body.CodEstilo);
      request.input('CodMaterial', sql.Int, req.body.CodMaterial);
      request.input('CodColor', sql.Int, req.body.CodColor);
      request.input('TallaNacional', sql.Float, req.body.TallaNacional);
      request.input('TallaUSA', sql.Float, req.body.TallaUSA);
      request.input('PrecioCosto', sql.Float, req.body.PrecioCosto);
      request.input('PrecioVenta', sql.Float, req.body.PrecioVenta);
      request.input('cantidad', sql.Int, req.body.cantidad);

      request.execute(
        'InsertarProducto'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EditarProducto', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('CodigoProducto', sql.Int, req.body.CodigoProducto);
      request.input('Descripcion', sql.VarChar(255), req.body.Descripcion);
      request.input('CodEstilo', sql.Int, req.body.CodEstilo);
      request.input('PrecioCosto', sql.Float, req.body.PrecioCosto);
      request.input('PrecioVenta', sql.Float, req.body.PrecioVenta);

      request.execute(
        'EditarProducto'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EliminarProducto', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('CodigoProducto', sql.Int, req.body.CodigoProducto);
      request.execute(
        'EliminarProducto'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});


app.post('/api/InsertarProveedor', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('Identificacion', sql.Int, req.body.Identificacion);
      request.input('TipoIdentificacion', sql.VarChar(255), req.body.TipoIdentificacion);
      request.input('Nombre', sql. VarChar(255), req.body.Nombre);
      request.input('TelefonoFijo', sql.Int, req.body.TelefonoFijo);
      request.input('TelefonoCelular', sql.Int, req.body.TelefonoCelular);
      request.input('Correo', sql. VarChar(255), req.body.Correo);
      request.input('Direccion', sql. VarChar(255), req.body.Direccion);

      request.execute(
        'InsertarProveedor'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EditarProveedor', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('CodigoProveedor', sql.Int, req.body.CodigoProveedor);
      request.input('telefonofijo', sql.Int, req.body.telefonofijo);
      request.input('telefonocelular', sql.Int, req.body.telefonocelular);
      request.input('correo', sql. VarChar(255), req.body.correo);
      request.input('direccion', sql. VarChar(255), req.body.direccion);

      request.execute(
        'EditarProveedor'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});

app.post('/api/EliminarProveedor', (req, res) => {
  conn
    .connect()
    .then(function () {
      var request = new sql.Request(conn);
      request
      request.input('CodigoProveedor', sql.Int, req.body.CodigoProveedor);
      request.execute(
        'EliminarProveedor'
      ).then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send('Error de query');
        });
    })
    .catch(function (err) {
      res.send('No hay resultados');
    });
});


app.listen(5000, () => console.log('Server on'));
