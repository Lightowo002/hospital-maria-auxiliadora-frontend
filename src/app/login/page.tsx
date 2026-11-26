"use client"
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/loginSchema";

type Inputs = {
    dni: string;
    clave: string;
}

const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
}
const page = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    return (
        <div className="min-h-screen flex justify-center items-start pt-16 bg-[#eef6f8] px-4">
            <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8 text-center">
                <h1 className="text-2xl font-bold text-[#0a5a7a]">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col mt-4 gap-3 text-left">

                    {/* DNI */}
                    <label htmlFor="dni" className="text-sm font-semibold">DNI:</label>
                    <input
                        type="text"
                        id="dni"
                        inputMode="numeric"
                        maxLength={8}
                        placeholder="Ingrese su DNI"
                        {...register("dni")}
                        className={`w-full border rounded-lg px-4 py-3 outline-none`} />
                    {
                        errors.dni?.message && <p>{errors.dni.message}</p>
                    }

                    {/*clave */}
                    <label htmlFor="clave" className="text-sm font-semibold">Contraseña:</label>
                    <input
                        type="password"
                        id="clave"
                        placeholder="••••••••"
                        {...register("clave")}
                        className={`w-full border rounded-lg px-4 py-3 outline-none`} />
                    {
                        errors.clave?.message && <p>{errors.clave.message}</p>
                    }


                    <button className="w-full bg-[#0a5a7a] text-white font-semibold rounded-lg py-3 mt-2 hover:bg-[#084a64]">
                        INGRESAR
                    </button>
                </form>

                <div className="contenedor">
                    <div>
                        <Link
                            href={"/recuperar-contraseña"}
                            className="text-link prosa"
                        ><p>¿Olvidaste tu contraseña?</p></Link>
                    </div>
                    <div>
                        <p className="">¿No tienes cuenta? <Link
                            href={"/registrarse"}
                            className="prosa text-link "
                        >Regístrate</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page