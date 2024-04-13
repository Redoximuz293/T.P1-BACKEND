//Clase Persona (Fundamental para el resto de clases)

class Persona {
    nombre;
    apellido;
    dni;
    estadoCivil;
    constructor(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona) {
        this.nombre = nombre_Persona;
        this.apellido = apellido_Persona;
        this.dni = dni_Persona;
        this.estadoCivil = estadoCivil_Persona;
    }

    //Obtiene Nombre entero de Persona
    get nombre_Entero_Persona() {
        return this.nombre + ' ' + this.apellido;
    };

    //Obtiene DNI de Persona
    get dni() {
        return this.dni;
    };

    //Establece Estado Civil
    set estadoCivil(nuevo_Estado_Civil) {
        this.estadoCivil = nuevo_Estado_Civil;
    };

};


//Clase Empleado (Deriva de Persona)

class Empleado extends Persona {
    anioDeIncorporacion;
    numeroDeDespacho;
    constructor(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona, anioDeIncorporacion_Empleado, numeroDeDespacho_Empleado) {
        super(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona);
        this.anioDeIncorporacion = anioDeIncorporacion_Empleado;
        this.numeroDeDespacho = numeroDeDespacho_Empleado;
    }

    //Establece el Numero de Despacho
    set numeroDeDespacho(nuevo_Numero_de_Despacho) {
        this.numeroDeDespacho = nuevo_Numero_de_Despacho;
    };

};

//Clase Estudiante (Deriva de Persona)

class Estudiante extends Persona {
    cursoMatriculado;
    constructor(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona, cursoMatriculado_Estudiante) {
        super(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona);
        this.cursoMatriculado = cursoMatriculado_Estudiante;
    }

    //Establece el Curso Matriculado
    set cursoMatriculado(nuevo_Curso_Matriculado) {
        this.cursoMatriculado = nuevo_Curso_Matriculado;
    };
};

//Clase Profesor (Deriva de Empleado)

class Profesor extends Empleado {
    departamento;
    constructor(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona, anioDeIncorporacion_Empleado, numeroDeDespacho_Empleado, departamento_Profesor) {
        super(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona, anioDeIncorporacion_Empleado, numeroDeDespacho_Empleado);
        this.departamento = departamento_Profesor;
    }

    //Establece el nuevo Departamento del Profesor
    set departamento(nuevo_Departamento) {
        this.departamento = nuevo_Departamento;
    };
};

//Clase Personal De Servicio (Deriva de Empleado)

class PersonalDeServicio extends Empleado {
    seccionAsignada;
    constructor(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona, anioDeIncorporacion_Empleado, numeroDeDespacho_Empleado, seccionAsignada_PersonalServicio) {
        super(nombre_Persona, apellido_Persona, dni_Persona, estadoCivil_Persona, anioDeIncorporacion_Empleado, numeroDeDespacho_Empleado);
        this.seccionAsignada = seccionAsignada_PersonalServicio;

    }

    //Establece una nueva Seccion
    set seccionAsignada(nueva_Seccion) {
        this.seccionAsignada = nueva_Seccion;
    };
};

