import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/servicios/long-auditoria.jpg";
import imgBody2 from "../../assets/servicios/long-auditoria2.webp";
import imgBody3 from "../../assets/servicios/short-auditoria.jpg";

const ServAuditoria = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="flex justify-center ">
            <img
              src={imgBody}
              alt="Imagen Larga"
              className="object-cover overflow-hidden"
            />
            <img
              src={imgBody2}
              alt="Imagen Larga"
              className="object-cover overflow-hidden"
            />
            <span className="text-white text-5xl absolute left-5 top-5 drop-shadow-2xl">
              Auditoria
            </span>
          </div>
        </div>
        <h2>¿Que es una Auditoria Interna ISO?</h2>
        <div className="flex justify between py-5">
          <div>
            <p className="text-justify mr-10">
              Una auditoría interna ISO, también conocidas como auditorías de
              primera parte, es un método de verificación para proporcionar
              información acerca de si el sistema de gestión es conforme con los
              requisitos propios de la organización, con los requisitos de la
              norma ISO de referencia, y en qué grado se implementa y mantiene
              de una forma eficaz. Las auditorías internas deben planificarse, y
              tener en consideración la importancia de los procesos
              involucrados, los cambios que afecten a la organización y los
              resultados de auditorías previas. Deben definirse los criterios y
              el alcance para cada auditoría. Las auditorías internas deben
              realizarlas personas con la cualificación y experiencia adecuadas,
              y debe asegurarse la objetividad y la imparcialidad durante el
              proceso. Por este motivo, lo más habitual es que las auditorías
              internas las realicen personas ajenas a la organización,
              subcontratadas al efecto. Debe informarse a la dirección
              pertinente de los resultados de las auditorías internas y, ante
              los hallazgos de una auditoría interna, la organización debe
              realizar las correcciones y/o tomar las acciones correctivas
              adecuadas sin demora injustificada.
            </p>
          </div>
          <div>
            <img src={imgBody3} alt="" width="7000" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServAuditoria;
