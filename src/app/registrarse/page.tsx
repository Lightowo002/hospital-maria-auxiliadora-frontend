"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { registrarSchema } from "@/validations/registrarseSchema";

type Inputs = {
  dni: string;
  nombres: string;
  apellidos: string;
  correo: string;
  clave: string;
}

const onSubmit: SubmitHandler<Inputs> = data => {
  console.log(data)
}

function page() {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(registrarSchema)

  });
  return (
    <div className="min-h-screen flex justify-center items-start pt-16 bg-[#eef6f8] px-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8 text-center">
        <h1>Registrate</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 text-left">

          {/* DNI */}
          <label htmlFor="dni" className="text-sm font-semibold">DNI:</label>
          <input
            type="text"
            id="dni"
            placeholder="12345678"
            inputMode="numeric"
            maxLength={8}
            {...register("dni")}
            className="w-full border rounded-lg px-4 py-3 outline-none" />
          {
            errors.dni?.message && <p>{errors.dni.message}</p>
          }

          {/* Nombres */}
          <label htmlFor="nombres" className="text-sm font-semibold">Nombres:</label>
          <input
            type="text"
            id="nombres"
            placeholder="David"
            {...register("nombres")}
            className="w-full border rounded-lg px-4 py-3 outline-none" />
          {
            errors.nombres?.message && <p>{errors.nombres.message}</p>
          }

          {/* Apellidos */}
          <label htmlFor="apellidos" className="text-sm font-semibold">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            placeholder="Rabanal Torres"
            {...register("apellidos")}
            className="w-full border rounded-lg px-4 py-3 outline-none" />
          {
            errors.apellidos?.message && <p>{errors.apellidos.message}</p>
          }

          {/* Correo*/}
          <label htmlFor="correo" className="text-sm font-semibold">Correo:</label>
          <input
            type="email"
            id="correo"
            placeholder="Ej. davidRabanal@hotmail.com"
            {...register("correo")}
            className="w-full border rounded-lg px-4 py-3 outline-none" />
          {
            errors.correo?.message && <p>{errors.correo.message}</p>
          }

          {/* Contraseña */}
          <label htmlFor="clave" className="text-sm font-semibold">Contraseña:</label>
          <input
            type="password"
            id="clave"
            placeholder="••••••••"
            {...register("clave")}
            className="w-full border rounded-lg px-4 py-3 outline-none" />
          {
            errors.clave?.message && <p>{errors.clave.message}</p>
          }

          <button
            className="w-full bg-[#0a5a7a] text-white font-semibold rounded-lg py-3 mt-2 hover:bg-[#084a64]">Crear</button>
        </form>
      </div >
    </div >
  )
}

export default page
