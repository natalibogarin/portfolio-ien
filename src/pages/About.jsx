import {useState} from 'React'

function About() {
  const [mostrarMas,setMostrarMas] = useState(false);

  return(
    <section>
      <h2 className="text-2xl font-bold">Sobre mí</h2>
      <p>Spy Desarrollador Web con interés en PHP, Laravel, Python</p>
      {mostrarMas && (
        <p className="mt-3 text-gray-600">
          Me interesa crear soluciones digitales claras, accesibles y
          orientadas a las personas.
        </p>
      )}
      <button onClick={()=>setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );

}
export default About;