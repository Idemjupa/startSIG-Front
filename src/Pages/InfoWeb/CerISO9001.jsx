import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/normas/sedapar.jpg";
import imgBody2 from "../../assets/normas/sunass.webp";
import imgBody3 from "../../assets/normas/calidad.jpg";
import imgBody4 from "../../assets/normas/ambiente.jpg";
import imgBody5 from "../../assets/normas/sst.png";

const CerISO9001 = () => {
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
            <span className="text-white text-5xl absolute left-5 bottom-10 drop-shadow-2xl">
              SEDAPAR
            </span>
            <span className="text-white text-5xl absolute right-5 bottom-10 drop-shadow-2xl">
              SUNNASS
            </span>
          </div>
        </div>
        <h2>Nuestras Certificaciones</h2>
        <div className="flex flex-col py-5 gap-10">
          <div className="flex">
            <p className="text-justify mr-10">
              <h3>ISO 9001</h3>
              En la actualidad, aquella empresa que realmente desea mantenerse
              La norma ISO 9001 es la única norma certificable dentro de la
              familia de normas 9000. Se trata de una norma internacional que
              especifica requisitos orientados, principalmente a dar confianza
              en los productos y servicios proporcionados por una organización
              y, por lo tanto, a la mejora de la satisfacción del cliente. La
              implantación de un sistema de gestión de la calidad es una
              decisión estratégica que ayuda a mejorar el desempeño global de
              una organización, aunque también traerá otras ventajas como la
              mejora de la comunicación interna, mejor comprensión y control de
              los procesos de la organización y reducción de los defectos y los
              residuos.
              <br />
              <br />
              La Norma ISO 9001:2015 elaborada por la Organización Internacional
              para la Estandarización (International Standarization Organization
              o ISO por sus siglas en inglés), determina los requisitos para un
              Sistema de Gestión de la Calidad, que pueden utilizarse para su
              aplicación interna por las organizaciones, sin importar si el
              producto y/o servicio lo brinda una organización pública o empresa
              privada, cualquiera que sea su rama, para su certificación o con
              fines contractuales . La Organización Internacional de
              Estandarización es un organismo independiente, no gubernamental
              que actualmente reúne a más de un millón de empresas y
              organizaciones en más de 170 países miembros alrededor del mundo.
              Esta organización se creó luego de la Segunda Guerra Mundial tras
              la reunión en Inglaterra de delegados de 25 países para coordinar
              y unificar estándares mundiales en febrero de 1947.
            </p>
            <img src={imgBody3} alt="" width="620" />
          </div>
          <div className="flex">
            <img src={imgBody4} alt="" width="2000" />
            <p className="text-justify mr-10 ml-5">
              <h3>ISO 14001</h3>
              La norma ISO 14001 es la única norma certificable dentro de la
              familia de normas 14000. Se trata de una norma internacional que
              establece “un marco de referencia para proteger el medio ambiente
              y responder a las condiciones ambientales cambiantes, en
              equilibrio con las necesidades socioeconómicas”. La Norma busca un
              equilibrio entre tres pilares fundamentales: medio ambiente,
              sociedad y economía; proponiendo a las organizaciones un marco de
              referencia para proteger el medio ambiente y responder a las
              condiciones ambientales cambiantes, en equilibrio con las
              necesidades socioeconómicas.
              <br />
              <br />
              El surgimiento de la serie de normas ISO 14000 es consecuencia
              directa de la ronda de negociaciones del GATT en Uruguay y la
              cumbre de Río de Janeiro de las Naciones Unidas sobre el ambiente,
              que se realizaron en 1992.1​ Debido a la rápida aceptación de la
              Serie de Normas ISO 9000 y al surgimiento de una gran cantidad de
              normas ambientales alrededor del mundo, ISO reconoce la necesidad
              de crear estándares administrativos en el área ambiental. En 1991,
              se había creado el Grupo Estratégico de Consultas en el Ambiente
              (SAGE) y en 1992 debido a las recomendaciones de este grupo se
              crea el comité ISO/TC 207 quien agruparía representantes de la
              industria, organismos de normas, el gobierno y organismos
              ambientales.2​
            </p>
          </div>
          <div className="flex">
            <p className="text-justify mr-10">
              <h3>ISO 45001</h3>
              La norma ISO 45001 es la única norma certificable dentro de la
              familia de normas 45000. Se trata de una norma internacional que
              establece “un marco de referencia para gestionar los riesgos y
              oportunidades para Seguridad y Salud en el Trabajo (SST).
              <br />
              <br />
              es una norma internacional que especifica los requisitos para un
              sistema de gestión de salud y seguridad ocupacional (en inglés:
              OHS, en español SST) y proporciona indicaciones para su uso, para
              permitir a las organizaciones proporcionar trabajos seguros y
              saludables, prevenir accidentes en el trabajo y problemas de
              salud, además de mejorar SST de manera proactiva. Es aplicable a
              cualquier organización que desee establecer, implementar y
              mantener un sistema de gestión para mejorar la salud y la
              seguridad en el trabajo, eliminar los riesgos y minimizar los
              riesgos (incluidas las fallas del sistema), aprovechar las
              oportunidades de SST. Ayuda a una organización a alcanzar los
              resultados esperados de su sistema de gestión.
            </p>
            <img src={imgBody5} alt="" width="620" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CerISO9001;
