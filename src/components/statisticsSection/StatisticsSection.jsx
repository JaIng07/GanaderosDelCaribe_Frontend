import {stats} from '../../data/stats'
import imageStats from "../../assets/imageStats.jpeg";


function StatisticsSection() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8 rounded-2xl text-white">
      <img
        src={imageStats}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center contrast-[.3]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight">Nuestros Números Hablan por Sí Mismos</h2>
          <p className="mt-6 text-lg leading-8">
          Echa un vistazo a algunas de nuestras estadísticas clave que muestran el impacto de nuestra comunidad ganadera en la región del Caribe.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default StatisticsSection
