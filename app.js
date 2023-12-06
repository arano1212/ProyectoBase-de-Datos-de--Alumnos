


let usuario = "docente";
let passwordCorrecto = "1234";
let ingresar = document.getElementById("interaccion")
ingresar.addEventListener("click", function () {
    let enter = document.getElementById("usuarioDocente").value;
    let enter1 = document.getElementById("contraseña1").value;

    if (enter === usuario && enter1 === passwordCorrecto) {
        ingresar.style.display = "none";
        document.getElementById("contenedor").style.display = "none";
        document.getElementById("logoEntrada").style.display = "none";
        document.getElementById("entran").style.display = "none";
        document.getElementById("usuarioDocente").style.display = "none";
        document.getElementById("contraseña1").style.display = "none";
        document.getElementById("barra").style.display = "flex";
        document.getElementById("logo2").style.display = "flex";
        document.getElementById("busqueda1").style.display = "flex";
        document.getElementById("cerrarS").style.display = "flex";
        document.getElementById("botondeBusqueda1").style.display = "flex";
        document.getElementById("Gheroes").style.display = "flex";
        document.getElementById("Gvillanos").style.display = "flex";
        document.getElementById("Gantiheroes").style.display = "flex";
    } else {
        alert("Contraseña o Usuario Incorrecto(a)");
        document.getElementById("usuarioDocente").value = "";
        document.getElementById("contraseña1").value = "";
    }
});

// grupo heroes
let heroes = document.getElementById("Gheroes");
heroes.addEventListener("click", function () {
    document.getElementById("Gvillanos").style.display = "none";
    document.getElementById("Gantiheroes").style.display = "none";
    heroes.style.fontSize = "15px";
    heroes.style.width = "75px";
    heroes.style.height = "75px";
    heroes.style.marginTop = "-500px";
    document.getElementById("back").style.display = "flex";
    document.getElementById("back").style.marginTop = "-500px";
    document.getElementById("listHero").style.display = "flex";
    document.getElementById("newHero").style.display = "flex";
    setTimeout(() => {
        alert('Agrega un Alumno Heroe')
    }, 100);


});

class GrupoHeroes {
    constructor(nombre, apellido, alumno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.alumno = alumno;

    }
}

class alumnoHeroes {
    constructor(nombre, apellido, calificacion, habilidad, fuerza, poder, alias) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacion = calificacion;
        this.habilidad = habilidad;
        this.fuerza = fuerza;
        this.poder = poder;
        this.alias = alias
    }

}

let alumnoHeroe1 = new alumnoHeroes("Peter", "Parker", 7, 8, 7, "Telarañas", "Spiderman");
let alumnoHeroe2 = new alumnoHeroes("Norrin", "Radd", 9, 9, 9, "Poderes Cosmicos", "Silver Surfer");
let alumnoHeroe3 = new alumnoHeroes("Natasha", "Romanova", 8, 9, 6, "Habilidad Tactica", "Viuda Negra");
let alumnoHeroe4 = new alumnoHeroes("Tony", "Stark", 7, 9, 8, "Tecnologia", "IronMan");
let alumnoHeroe5 = new alumnoHeroes("Kara", "Zor-El", 6, 8, 10, "Super Fuerza", "SuperGirl");
let alumnoHeroe6 = new alumnoHeroes("Dick", "Grayson", 6, 6, 6, "Habilidad Tactica", "Robin");
let alumnoHeroe7 = new alumnoHeroes("Diana", "Prince", 7, 9, 8, "Divinos", "Wonder Woman");
let alumnoHeroe8 = new alumnoHeroes("Jay", "Garrick", 6, 9, 6, "Super Felocidad", "Flash");
let alumnoHeroe9 = new alumnoHeroes("Hal", "Jordan", 8, 7, 7, "Espaciales", "Linterna Verde");
var alumnosHeroes = [alumnoHeroe1, alumnoHeroe2, alumnoHeroe3, alumnoHeroe4,alumnoHeroe5, alumnoHeroe6, alumnoHeroe7, alumnoHeroe8, alumnoHeroe9];


let grupoHeroes = new GrupoHeroes("Grupo de Heroes", alumnosHeroes);


function agregarAlumno() {
    let nombreHeroe = document.getElementById("nombre").value;
    let apellidoHeroe = document.getElementById("apellido").value;

    if (nombreHeroe === "" || apellidoHeroe === "") {
        alert("Los campos de nombre y apellido son obligatorios.");
        return;
    }

    let calificacionHeroe = document.getElementById("calificacion").value;
    let habilidadHeroe = document.getElementById("habilidad").value;
    let fuerzaHeroe = document.getElementById("fuerza").value;
    let poderHeroe = document.getElementById("poder").value;
    let aliasHeroe = document.getElementById("alias").value;
    let nuevoAlumnoHeroe = new alumnoHeroes(nombreHeroe, apellidoHeroe, calificacionHeroe, habilidadHeroe, fuerzaHeroe, poderHeroe, aliasHeroe)
    alumnosHeroes.push(nuevoAlumnoHeroe)



    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("calificacion").value = "";
    document.getElementById("habilidad").value = "";
    document.getElementById("fuerza").value = "";
    document.getElementById("poder").value = "";
    document.getElementById("alias").value = "";

    alumnoAgregadoHeroe();
    mostrarAlumnosHeroes();


}

function mostrarAlumnosHeroes() {
    limpiarTabla();
    ordenarAlumnos();
    alumnosHeroes.forEach((item, index) => {
        let tBody = document.getElementById("students");

        let sumaCalificacionH = parseFloat(item.calificacion);
        let sumaHabilidadH = parseFloat(item.habilidad);
        let sumaFuerzaH = parseFloat(item.fuerza);
        let promedioH = Math.floor((sumaCalificacionH + sumaHabilidadH + sumaFuerzaH) / 3);

        let elemento = `
        <tr>
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.calificacion}</td>
            <td>${item.habilidad}</td>
            <td>${item.fuerza}</td>
            <td>${item.poder}</td>
            <td>${item.alias}</td>
            <td>${promedioH}</td>
            <td><button onclick="eliminarAlumnoHeroe(${index})">X</button></td>
        </tr>
        `;
        tBody.innerHTML += elemento;
    })
}

function promedioH() {
    let sumaPromediosH = 0;

    alumnosHeroes.forEach((item) => {
        let sumaCalificacionH = parseFloat(item.calificacion);
        let sumaHabilidadH = parseFloat(item.habilidad);
        let sumaFuerzaH = parseFloat(item.fuerza);
        let promedioAlumnoH = (sumaCalificacionH + sumaHabilidadH + sumaFuerzaH) / 3;
        sumaPromediosH += promedioAlumnoH;
    });

    let promedioGrupoH = sumaPromediosH / alumnosHeroes.length;
    alert(`El promedio del grupo de Heroes es: ${promedioGrupoH.toFixed(2)}`);
}



function limpiarTabla() {
    let tBody = document.getElementById("students")
    tBody.innerHTML = " ";

}

function ordenarAlumnos() {
    alumnosHeroes.sort((a, b) => a.nombre.localeCompare(b.nombre));

}

function alumnoAgregadoHeroe() {
    alert('Agrego un Alumno Heroe')

}
function eliminarAlumnoHeroe(index) {
    if (confirm("¿Estás seguro de que deseas eliminar a este Alumno Heroe?")) {
        alumnosHeroes.splice(index, 1);
        mostrarAlumnosHeroes();
    }
}




//regresar 3 grupos 
let back = document.getElementById("back");
back.addEventListener("click", function () {
    heroes.style.fontSize = "20px";
    heroes.style.width = "150px";
    heroes.style.height = "150px";
    heroes.style.marginTop = "0px"
    document.getElementById("Gvillanos").style.display = "flex";
    document.getElementById("Gantiheroes").style.display = "flex";
    document.getElementById("back").style.display = "none";
    document.getElementById("listHero").style.display = "none";
    document.getElementById("newHero").style.display = "none";

    mostrarAlumnosHeroes();


})

//grupo Villanos
let villanos = document.getElementById("Gvillanos");
villanos.addEventListener("click", function () {
    document.getElementById("Gheroes").style.display = "none";
    document.getElementById("Gantiheroes").style.display = "none";
    villanos.style.fontSize = "15px";
    villanos.style.width = "75px";
    villanos.style.height = "75px";
    villanos.style.marginTop = "-500px";
    document.getElementById("back").style.display = "flex";
    document.getElementById("back").style.marginTop = "-500px";
    document.getElementById("listVillian").style.display = "flex";
    document.getElementById("newVillian").style.display = "flex";
    setTimeout(() => {
        alert('Agrega un Alumno Villano')
    }, 100)
});

class GrupoVillanos {
    constructor(nombre, apellido, alumno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.alumno = alumno;

    }
}

class AlumnoVillanos {
    constructor(nombre, apellido, calificacion, habilidad, fuerza, poder, alias) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacion = calificacion;
        this.habilidad = habilidad;
        this.fuerza = fuerza;
        this.poder = poder;
        this.alias = alias;

    }
}

let alumnoVillano1 = new AlumnoVillanos("Arthur", "Fleck", 8, 9, 4, "Inteligencia", "Joker");
let alumnoVillano2 = new AlumnoVillanos("Victor", "Domm", 10, 10, 9, "Tecnopata", "Dr.Domm");
let alumnoVillano3 = new AlumnoVillanos("Vincent", "D'Onofrio", 7, 9, 9, "Super Fuerza", "Kingpin");
let alumnoVillano4 = new AlumnoVillanos("Erik", "Magnus", 10, 10, 9, "Magnetismo", "Magneto");
let alumnoVillano5 = new AlumnoVillanos("Norman", "Osborn", 6, 9, 6, "Armamento", "Duende Verde");
let alumnoVillano6 = new AlumnoVillanos("En Sabah", "Nur", 10, 10, 10, "Divinos", "Apocalipsis");

var alumnosVillanos = [alumnoVillano1, alumnoVillano2, alumnoHeroe3,alumnoVillano4, alumnoVillano5, alumnoVillano6];

let grupoVillanos = new GrupoVillanos("Grupo de Villanos", alumnosVillanos);


function agregarAlumnoV() {
    let nombreVillano = document.getElementById("nombreV").value;
    let apellidoVillano = document.getElementById("apellidoV").value;

    if (nombreVillano === "" || apellidoVillano === "") {
        alert("Los campos de nombre y apellido son obligatorios.");
        return;
    }

    let calificacionVillano = document.getElementById("calificacionV").value
    let habilidadVillano = document.getElementById("habilidadV").value
    let fuerzaVillano = document.getElementById("fuerzaV").value
    let poderVillano = document.getElementById("poderV").value
    let aliasVillano = document.getElementById("aliasV").value
    let nuevoAlumnoVillano = new AlumnoVillanos(nombreVillano, apellidoVillano, calificacionVillano, habilidadVillano, fuerzaVillano, poderVillano, aliasVillano)
    alumnosVillanos.push(nuevoAlumnoVillano)



    document.getElementById("nombreV").value = "";
    document.getElementById("apellidoV").value = "";
    document.getElementById("calificacionV").value = "";
    document.getElementById("habilidadV").value = "";
    document.getElementById("fuerzaV").value = "";
    document.getElementById("poderV").value = "";
    document.getElementById("aliasV").value = "";

    alumnoAgregadoVillano();
    verVillanos();

}

//regresar 3 grupos desde villanos
let back1 = document.getElementById("back");
back1.addEventListener("click", function () {
    villanos.style.fontSize = "20px";
    villanos.style.width = "150px";
    villanos.style.height = "150px";
    villanos.style.marginTop = "0px"
    document.getElementById("Gheroes").style.display = "flex";
    document.getElementById("Gantiheroes").style.display = "flex";
    document.getElementById("back").style.display = "none";
    document.getElementById("listVillian").style.display = "none";
    document.getElementById("newVillian").style.display = "none";

    verVillanos();
});


function verVillanos() {
    limpiarTablaV();
    ordenarAlumnosVillanos();
    alumnosVillanos.forEach((item, index) => {
        let tBody = document.getElementById("studentsV");

        let sumaCalificacionV = parseFloat(item.calificacion);
        let sumaHabilidadV = parseFloat(item.habilidad);
        let sumaFuerzaV = parseFloat(item.fuerza);
        let promedioV = Math.floor((sumaCalificacionV + sumaHabilidadV + sumaFuerzaV) / 3);

        let elementoV = `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.apellido}</td>
                <td>${item.calificacion}</td>
                <td>${item.habilidad}</td>
                <td>${item.fuerza}</td>
                <td>${item.poder}</td>
                <td>${item.alias}</td>
                <td>${promedioV}</td>
                <td><button onclick="eliminarAlumnoVillano(${index})">X</button></td>
            </tr>
            `;
        tBody.innerHTML += elementoV;
    })

}

function promedioVillano() {
    let sumaPromediosV = 0;


    alumnosVillanos.forEach((item) => {
        let sumaCalificacionV = parseFloat(item.calificacion);
        let sumaHabilidadV = parseFloat(item.habilidad);
        let sumaFuerzaV = parseFloat(item.fuerza);
        let promedioAlumnoV = Math.floor((sumaCalificacionV + sumaHabilidadV + sumaFuerzaV) / 3);
        sumaPromediosV += promedioAlumnoV;
    });

    let promedioGrupoV = Math.floor(sumaPromediosV / alumnosVillanos.length);
    alert(`El promedio del grupo de Villanos es: ${promedioGrupoV}`);
}

function limpiarTablaV() {
    let tBody = document.getElementById("studentsV")
    tBody.innerHTML = " ";

}

function ordenarAlumnosVillanos() {
    alumnosVillanos.sort((a, b) => a.nombre.localeCompare(b.nombre));

}

function alumnoAgregadoVillano() {
    alert('Agrego un Alumno Villano');

}
function eliminarAlumnoVillano(index) {
    if (confirm("¿Estás seguro de que deseas eliminar a este Alumno Villano?")) {
        alumnosVillanos.splice(index, 1);
        verVillanos();
    }
}

//grupo antiheroes
let antiHeroes = document.getElementById("Gantiheroes");
antiHeroes.addEventListener("click", function () {
    document.getElementById("Gvillanos").style.display = "none";
    document.getElementById("Gheroes").style.display = "none";
    antiHeroes.style.fontSize = "15px";
    antiHeroes.style.width = "99px";
    antiHeroes.style.height = "75px";
    antiHeroes.style.marginTop = "-500px";
    document.getElementById("back").style.display = "flex";
    document.getElementById("back").style.marginTop = "-500px";
    document.getElementById("newAntiHeroe").style.display = "flex";
    document.getElementById("listAntiHeroe").style.display = "flex";
    setTimeout(() => {
        alert('Agrega un Alumno AntiHeroe')
    }, 100);
});




class GrupoAntiheroe {
    constructor(nombre, apellido, alumno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.alumno = alumno;

    }
}

class AlumnoAntiHeroe {
    constructor(nombre, apellido, calificacion, habilidad, fuerza, poder, alias) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacion = calificacion;
        this.habilidad = habilidad;
        this.fuerza = fuerza;
        this.poder = poder;
        this.alias = alias;

    }
}

let alumnoAntiHeroe1 = new AlumnoAntiHeroe("Eddie", "Brock", 6, 9, 9, "Simbiote", "Venom");
let alumnoAntiHeroe2 = new AlumnoAntiHeroe("Wade", "Wilson", 5, 7, 7, "Regeneracion", "DeadPool");
let alumnoAntiHeroe3 = new AlumnoAntiHeroe("Frank", "Castle", 7, 9, 7, "Habilidad Tactica", "The Punisher");
let alumnoAntiHeroe4 = new AlumnoAntiHeroe("Jason", "Todd", 5, 7, 7, "Resistencia", "Red Hood");
let alumnoAntiHeroe5 = new AlumnoAntiHeroe("Mindy", "McCready", 9, 9, 6, "Habilidad Tactica", "HitGirl");
let alumnoAntiHeroe6 = new AlumnoAntiHeroe("Walter", "Kovacs", 8, 7, 7, "Resitencia", "Rorschach");

var alumnosAntiHeroes = [alumnoAntiHeroe1, alumnoAntiHeroe2, alumnoAntiHeroe3,alumnoAntiHeroe4, alumnoAntiHeroe5, alumnoAntiHeroe6]

let grupoAntiHeroes = new GrupoAntiheroe("Grupo de AntiHeroe", alumnosAntiHeroes);

function agregarAlumnoAntiHeroe() {
    let nombreAnti = document.getElementById("nombreA").value
    let apellidoAnti = document.getElementById("apellidoA").value

    if (nombreAnti === "" || apellidoAnti === "") {
        alert("Los Campos de Nombre Apellido son obligatorios.");
        return;
    }

    let calificacionAnti = document.getElementById("calificacionA").value
    let habilidadAnti = document.getElementById("habilidadA").value
    let fuerzaAnti = document.getElementById("fuerzaA").value
    let poderAnti = document.getElementById("poderA").value
    let aliasAnti = document.getElementById("aliasA").value
    let nuevoAlumnoAntiHeroe = new AlumnoAntiHeroe(nombreAnti, apellidoAnti, calificacionAnti, habilidadAnti, fuerzaAnti, poderAnti, aliasAnti)
    alumnosAntiHeroes.push(nuevoAlumnoAntiHeroe)



    document.getElementById("nombreA").value = "";
    document.getElementById("apellidoA").value = "";
    document.getElementById("calificacionA").value = "";
    document.getElementById("habilidadA").value = "";
    document.getElementById("fuerzaA").value = "";
    document.getElementById("poderA").value = "";
    document.getElementById("aliasA").value = "";

    alumnoAgregadoAntiHeroe();
    verAntiHeroes();

}


function verAntiHeroes() {
    limpiarTablaA()
    ordenarAlumnosAntiHeroes();
    alumnosAntiHeroes.forEach((item, index) => {
        let tBody = document.getElementById("studentsAnti");

        let sumaCalificacionA = parseFloat(item.calificacion);
        let sumaHabilidadA = parseFloat(item.habilidad);
        let sumaFuerzaA = parseFloat(item.fuerza);
        let promedioA = Math.floor((sumaCalificacionA + sumaHabilidadA + sumaFuerzaA) / 3);

        let elementoA = `
        <tr>
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.calificacion}</td>
            <td>${item.habilidad}</td>
            <td>${item.fuerza}</td>
            <td>${item.poder}</td>
            <td>${item.alias}</td>
            <td>${promedioA}</td>
            <td><button onclick="eliminarAlumnoAntiHeroe(${index})">X</button></td> 

        </tr>
        `;
        tBody.innerHTML += elementoA;
    })


}

function promedioAntiH() {
    let sumaPromediosA = 0;


    alumnosAntiHeroes.forEach((item) => {
        let sumaCalificacionA = parseFloat(item.calificacion);
        let sumaHabilidadA = parseFloat(item.habilidad);
        let sumaFuerzaA = parseFloat(item.fuerza);
        let promedioAlumno = Math.floor((sumaCalificacionA + sumaHabilidadA + sumaFuerzaA) / 3);
        sumaPromediosA += promedioAlumno;
    });

    let promedioGrupoAntiH = Math.floor(sumaPromediosA / alumnosAntiHeroes.length);
    alert(`El promedio del grupo de Antiheroes es: ${promedioGrupoAntiH}`);
}


function limpiarTablaA() {
    let tBody = document.getElementById("studentsAnti")
    tBody.innerHTML = " ";

}

function ordenarAlumnosAntiHeroes() {
    alumnosAntiHeroes.sort((a, b) => a.nombre.localeCompare(b.nombre));

}

function alumnoAgregadoAntiHeroe() {
    alert('Agrego un Alumno AntiHeroe');
}

function eliminarAlumnoAntiHeroe(index) {
    if (confirm("¿Estás seguro de que deseas eliminar a este Alumno AntiHeore?")) {
        alumnosAntiHeroes.splice(index, 1);
        verAntiHeroes();
    }
}





let back2 = document.getElementById("back");
back2.addEventListener("click", function () {
    antiHeroes.style.fontSize = "20px";
    antiHeroes.style.width = "150px";
    antiHeroes.style.height = "150px";
    antiHeroes.style.marginTop = "0px";
    document.getElementById("Gheroes").style.display = "flex";
    document.getElementById("Gvillanos").style.display = "flex";
    document.getElementById("back").style.display = "none";
    document.getElementById("newAntiHeroe").style.display = "none";
    document.getElementById("listAntiHeroe").style.display = "none";

    verAntiHeroes();
});


let closeSesion = document.getElementById("cerrarS");
closeSesion.addEventListener("click", function () {
    document.getElementById("contenedor").style.display = "flex";
    document.getElementById("logoEntrada").style.display = "flex";
    document.getElementById("entran").style.display = "flex";
    document.getElementById("usuarioDocente").style.display = "flex";
    document.getElementById("contraseña1").style.display = "flex";
    document.getElementById("interaccion").style.display = "flex"
    document.getElementById("barra").style.display = "none";
    document.getElementById("logo2").style.display = "none";
    document.getElementById("busqueda1").style.display = "none";
    document.getElementById("cerrarS").style.display = "none";
    document.getElementById("botondeBusqueda1").style.display = "none";
    document.getElementById("Gheroes").style.display = "none";
    document.getElementById("Gvillanos").style.display = "none";
    document.getElementById("Gantiheroes").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("listHero").style.display = "none";
    document.getElementById("newHero").style.display = "none";
    document.getElementById("listVillian").style.display = "none";
    document.getElementById("newVillian").style.display = "none";
    document.getElementById("newAntiHeroe").style.display = "none";
    document.getElementById("listAntiHeroe").style.display = "none";
    document.getElementById("usuarioDocente").value = "";
    document.getElementById("contraseña1").value = "";
});


function buscarAlumno() {
    let busqueda = document.getElementById('busqueda1').value.toLowerCase();

    let alumnoEncontrado = buscarEnGrupo(alumnosHeroes, busqueda);
    if (alumnoEncontrado) {
        mostrarInformacionAlumno(alumnoEncontrado, "Grupo de Heroes");
        return;
    }

    alumnoEncontrado = buscarEnGrupo(alumnosVillanos, busqueda);
    if (alumnoEncontrado) {
        mostrarInformacionAlumno(alumnoEncontrado, "Grupo de Villanos");
        return;
    }

    alumnoEncontrado = buscarEnGrupo(alumnosAntiHeroes, busqueda);
    if (alumnoEncontrado) {
        mostrarInformacionAlumno(alumnoEncontrado, "Grupo de AntiHeroes");
        return;
    }

    alert("Alumno no Encontrado");
}

function buscarEnGrupo(grupo, busqueda) {
    return grupo.find(alumno => {
        return alumno.nombre.toLowerCase().includes(busqueda) ||
            alumno.apellido.toLowerCase().includes(busqueda) ||
            alumno.alias.toLowerCase().includes(busqueda)
    });

}

function mostrarInformacionAlumno(alumno, grupo) {
    let mensaje = `Nombre: ${alumno.nombre} ${alumno.apellido}\nAlias: ${alumno.alias}\nCalificacion: ${alumno.calificacion}\nHabilidad: ${alumno.habilidad}\nFuerza: ${alumno.fuerza}`;
    alert(`Informacion del Alumno en el ${grupo}:\n\n${mensaje}`);
}

