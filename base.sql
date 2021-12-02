--drop database proyecto
create database proyecto
go
use proyecto 
go

create table Local(
	CodLocal int primary key identity not null,
	Ubicacion varchar(255) not null,
	Telefono int not null,
	Correo varchar(255) not null,
	Direccionexacta varchar(255) not null,
	Apartadopostal  varchar(255) not null,

)
go

create table TipoIdentificacion(
	CodTipoIdentificacion varchar(255) not null  primary key ,
	TipoIdentificacion int  not null,
)
go

create table Estilo(
	CodEstilo int primary key not null,
	Estilo  varchar(255) not null,
)
go

create table Material(
	CodMaterial int primary key not null,
	Material  varchar(255) not null,
)
go

create table Color(
	CodColor int primary key not null,
	Color  varchar(255) not null,
)
go


create table Puesto(
	CodPuesto int primary key not null,
	Puesto  varchar(255) not null,
)
go

create table TipoPago(
	CodTipoPago int primary key not null,
	TipoPago  varchar(255) not null,
)
go

create table Producto(
	CodProducto int primary key identity not null,
	Descripcion  varchar(255) not null,
	CodEstilo int  not null FOREIGN  key references  Estilo(CodEstilo),
	CodMaterial int  not null FOREIGN  key references Material(CodMaterial),
	CodColor  int   not null FOREIGN  key references Material(CodMaterial),
	TallaNacional float  not null ,
	TallaUSA float not null,
	PrecioCosto float not null,
	PrecioVenta float not null,
	cantidad int not null
)
go

create table Empleado(
	NumEmpleado int primary key identity not null,
	Identificacion int not null,
	idTipoidentificacion  varchar(255)  not null FOREIGN  key references TipoIdentificacion(CodTipoIdentificacion),
	Nombre  varchar(255)  not null ,
	CodPuesto int not null foreign key references Puesto(CodPuesto),
	Telefono int  not null,
	Correo  varchar(255)  not null ,
	Direccion  varchar(255)  not null 


)
go


create table Proveedor(
	CodProveedor int primary key identity not null,
	CodTipoIdentificacion  varchar(255)  not null FOREIGN  key references TipoIdentificacion(CodTipoIdentificacion),
	Identificacion int not null,
	Nombre  varchar(255)  not null ,
	TelefonoFijo int  not null,
	TelefonoCelular int  not null,
	Correo  varchar(255)  not null ,
	Direccion  varchar(255)  not null 


)
go

create table Cliente(
	CodCliente int primary key identity not null,
	Identificacion int not null,
	IdTipoIdentificacion  varchar(255)  not null FOREIGN  key references TipoIdentificacion(CodTipoIdentificacion),
	Nombre  varchar(255)  not null ,
	Apellidos  varchar(255)  not null ,
	NumeroCelular int  not null,
	Correo  varchar(255)  not null ,
	Direccion  varchar(255)  not null ,
	FechaNacimiento date not null


)
go

create table MaestroPedido(
	idPedido int primary key identity  not null,
	Fecha date not null,
	CodProveedor int not null foreign key references Proveedor(CodProveedor),
	CodLocal int not null foreign key references Local(CodLocal),
	NumEmpleado int not null foreign key references Empleado(NumEmpleado),
	SubTotal float not null,
	Total float not null,
)
go

create table DetallePedido(
	idDetallePedido int primary key identity  not null,
	idPedido int foreign key references MaestroPedido(idPedido)  not null,
	CodProducto int not null foreign key references Producto(CodProducto),
	Cantidad int not null,
	Precio float not null,
	Subtotal float not null
)
go

create table MaestroFactura(
	idFactura int primary key identity  not null,
	Fecha date not null,
	CodTipoPago int not null foreign key references TipoPago(CodTipoPago),
	CodCliente int not null foreign key references Cliente(CodCliente),
	CodLocal int not null foreign key references Local(CodLocal),
	NumEmpleado int not null foreign key references Empleado(NumEmpleado),
	SubTotal float not null,
	Total float not null,
	Descuento int not null,
	Impuesto float not null
)
go


create table DetalleFactura(
	idDetalleFactura int primary key identity  not null,
	idFactura int foreign key references MaestroFactura(idFactura)  not null,
	CodProducto int not null foreign key references Producto(CodProducto),
	Cantidad int not null,
	Precio float not null,
	Subtotal float not null
)
go




CREATE PROCEDURE InsertarCliente(@Identificacion int  , @TipoIdentificacion varchar(255),@Nombre  varchar(255), @Apellidos  varchar(255),@NumeroCelular int,@Correo  varchar(255),@Direccion  varchar(255),@FechaNacimiento date )
AS
	insert into Cliente(Identificacion,IdTipoIdentificacion,Nombre,Apellidos,NumeroCelular,Correo,Direccion,FechaNacimiento) values(@Identificacion   , @TipoIdentificacion ,@Nombre , @Apellidos  ,@NumeroCelular ,@Correo  ,@Direccion , @FechaNacimiento  )
GO



CREATE PROCEDURE EditarCliente(@CodigoCliente int,@NumeroCelular int ,@Correo  varchar(255),@Direccion  varchar(255) )
AS

			UPDATE Cliente
			SET NumeroCelular = @NumeroCelular,
			Correo  = @Correo,
			Direccion	=  @Direccion 
			WHERE CodCliente = @CodigoCliente;
GO



CREATE PROCEDURE EliminarCliente(@CodigoCliente int )
AS

			delete from Cliente
			where CodCliente  = @CodigoCliente
GO


CREATE PROCEDURE InsertarEmpleado(@Identificacion int , @TipoIdentificacion varchar(255) ,@Nombre varchar(255) , @CodPuesto int  ,@Telefono  int ,@Correo varchar(255) ,@Direccion varchar(255) )
AS
	insert into Empleado(Identificacion,idTipoidentificacion,Nombre,CodPuesto,Telefono,Correo,Direccion) 
	values(@Identificacion, @TipoIdentificacion ,@Nombre , @CodPuesto  ,@Telefono ,@Correo  ,@Direccion  )
GO


CREATE PROCEDURE EditarEmpleado(@CodigoEmpleado int,@Telefono int ,@Correo  varchar(255),@Direccion  varchar(255) )
AS

			UPDATE Empleado
			SET Telefono = @Telefono,
			Correo  = @Correo,
			Direccion	=  @Direccion 
			WHERE NumEmpleado = @CodigoEmpleado;
GO



CREATE PROCEDURE EliminarEmpleado(@CodigoEmpleado int )
AS

			delete from Empleado
			where NumEmpleado  = @CodigoEmpleado
GO



CREATE PROCEDURE InsertarLocal(@Ubicacion varchar(255),@Telefono int,@Correo varchar(255),@Direccionexacta varchar(255),@Apartadopostal varchar(255)  )
AS
	insert into Local(Ubicacion,Telefono,Correo,Direccionexacta,Apartadopostal) 
	values(@Ubicacion, @Telefono ,@Correo , @Direccionexacta  ,@Apartadopostal  )
GO


CREATE PROCEDURE EditarLocal(@CodigoLocal int,@Telefono int ,@Correo  varchar(255),@Direccion  varchar(255),@Apartadopostal varchar(255) )
AS

			UPDATE Local
			SET Telefono = @Telefono,
			Correo  = @Correo,
			Direccionexacta	=  @Direccion,
			Apartadopostal = @Apartadopostal
			WHERE CodLocal = @CodigoLocal;
GO



CREATE PROCEDURE EliminarLocal(@CodigoLocal int )
AS
			delete from Local
			where CodLocal  = @CodigoLocal
GO


CREATE PROCEDURE InsertarProducto(@Descripcion varchar(255),@CodEstilo int,@CodMaterial int ,@CodColor int ,@TallaNacional  float, @TallaUSA float, @PrecioCosto float, @PrecioVenta float, @cantidad int )
AS
	insert into Producto(Descripcion,CodEstilo,CodMaterial,CodColor,TallaNacional,TallaUSA,PrecioCosto,PrecioVenta,cantidad) 
	values(@Descripcion ,@CodEstilo ,@CodMaterial  ,@CodColor  ,@TallaNacional  , @TallaUSA , @PrecioCosto , @PrecioVenta , @cantidad  )
GO



CREATE PROCEDURE EditarProducto(@CodigoProducto int,@Descripcion varchar(255), @CodEstilo int, @PrecioCosto float, @PrecioVenta float )
AS

			UPDATE Producto
			SET Descripcion = @Descripcion,
			CodEstilo	=  @CodEstilo,
			PrecioCosto = @PrecioCosto,
			PrecioVenta = @PrecioVenta
			WHERE CodProducto = @CodigoProducto;
GO

CREATE PROCEDURE EliminarProducto(@CodigoProducto int )
AS
			delete from Producto
			where CodProducto  = @CodigoProducto
GO

CREATE PROCEDURE InsertarProveedor(@Identificacion int , @TipoIdentificacion varchar(255) ,@Nombre varchar(255), @TelefonoFijo int, @TelefonoCelular int , @Correo varchar(255), @Direccion  varchar(255)  )
AS
	insert into Proveedor(CodTipoIdentificacion,Identificacion,Nombre,TelefonoFijo,TelefonoCelular,Correo,Direccion) 
	values(@TipoIdentificacion,@Identificacion,@Nombre,@TelefonoFijo , @TelefonoCelular , @Correo , @Direccion   )
GO




CREATE PROCEDURE EditarProveedor(@CodigoProveedor int, @telefonofijo int ,  @telefonocelular int , @correo varchar(255), @direccion varchar(255))
AS

			UPDATE Proveedor
			SET TelefonoCelular = @telefonocelular,
			TelefonoFijo	=  @telefonofijo,
			Correo = @correo,
			Direccion = @direccion
			WHERE CodProveedor = @CodigoProveedor;
GO

CREATE PROCEDURE EliminarProveedor(@CodigoProveedor int )
AS
			delete from Proveedor
			where CodProveedor  = @CodigoProveedor
GO


insert into TipoIdentificacion(CodTipoIdentificacion,TipoIdentificacion) values ('cedula nacional',1)
insert into Puesto(CodPuesto,Puesto) values (1,'Cajero')
insert into Puesto(CodPuesto,Puesto) values (2,'Gerente')

insert into Estilo(CodEstilo,Estilo) values (1,'Zapato deportivo')
insert into Color(CodColor,Color) values (1,'Azul')
insert into Material(CodMaterial,Material) values (1,'Cuero')


/*

select * from cliente
select * from Empleado
select * from Local
select * from Producto
delete  from cliente
CREATE PROCEDURE EditarLocal(@CodigoLocal int,@Telefono int ,@Correo  varchar(255),@Direccion  varchar(255),@Apartadopostal varchar(255) )
CREATE PROCEDURE EditarProducto(@CodigoProducto int,@Descripcion varchar(255), @CodEstilo int, @PrecioCosto float, @PrecioVenta float )
CREATE PROCEDURE InsertarProveedor(@Identificacion int , @TipoIdentificacion varchar(255) ,@Nombre varchar(255), @TelefonoFijo int, @TelefonoCelular int , @Correo varchar(255), @Direccion  varchar(255)  )

)
go
*/