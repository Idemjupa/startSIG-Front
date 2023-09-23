import Header from "../../Components/InfoWeb/Header";
import Footer from "../../Components/InfoWeb/Footer";
import imgBody from "../../assets/servicios/SW-Mejora.png";
// import imgBody2 from "../../assets/servicios/long-auditoria2.webp";
import imgBody3 from "../../assets/servicios/short-Mejora.png";
const ServSwMejora = () => {
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
            {/* <img
              src={imgBody2}
              alt="Imagen Larga"
              className="object-cover overflow-hidden"
            /> */}
            <span className="text-white text-5xl absolute left-5 top-5 drop-shadow-2xl"></span>
          </div>
        </div>
        <h2>Software para la Gestion de Mejora Continua </h2>
        <div className="flex justify between py-5">
          <div>
            <h3 className="text-left">¿Qué es la mejora continua?</h3>
            <p className="text-justify mr-10">
              La mejora continua de los procesos es una búsqueda constante e
              interminable para identificar oportunidades de corrección, ajustes
              y mejoras en los procesos de negocio, los productos y los
              servicios. ¿Conoces esa idea de que cada vez que un escritor
              revisa su libro lo hace un poco mejor? Esta es la lógica aplicada
              al día a día de las empresas. La intención es encontrar siempre
              los puntos en los que el funcionamiento de la empresa tiene
              cuellos de botella, como fallos, errores humanos, retrasos,
              desperdicio de recursos, sobre los que se puede actuar. Al
              mejorar, poco a poco, el rendimiento de la empresa se vuelve
              siempre mejor y más centrado en la satisfacción del cliente.
            </p>
            <br />
            <h3 className="text-left">
              ¿Cuál es el origen de la mejora continua?
            </h3>
            <p className="text-justify mr-10">
              Todo empezó a finales del siglo XIX, durante la segunda Revolución
              Industrial, cuando las grandes empresas vieron la necesidad de
              sistematizar la producción en masa. El fordismo, símbolo de la
              época, estaba marcado por el concepto de la cadena de montaje, en
              la que cada profesional era responsable de un proceso de
              fabricación, ganando así tiempo y productividad. La necesidad de
              mejorar siempre sus procesos para incrementar la calidad de las
              entregas (y, por supuesto, aumentar la rentabilidad) llevó a las
              empresas a encontrar técnicas para ello, que han ido evolucionando
              y sofisticándose con los años. El enfoque en el producto ha ido
              dejando paso a empresas centradas en el interés del cliente, la
              experiencia y la diferenciación en el mercado. Por ello, la mejora
              continua se valora cada vez más y exige rapidez.
            </p>

            <br />
            <h3 className="text-left">Nuestra Solucion</h3>
            <p className="text-justify mr-10">
              Software que permite planificar las Auditorias, realizar los
              Planes y ejecución de los mismos, Cuenta con un modulo de Gestion
              de Hallazgos provenientes de Auditorias Internas, Externas, entre
              otros
            </p>
            <p>
              Tambien cuenta con un modulo para la gestion 
            </p>
          </div>
          <div>
            <img src={imgBody3} alt="" width="4000" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServSwMejora;
