import { z } from "zod";

export const loginSchema = z.object({
    // DNI
    dni: z
        .string()
        .trim()
        .max(8, {
            message: "El DNI dete tener 8 digitos",
        })
        .regex(/^\d{8}$/, { message: "El DNI solo debe tener numeros." }),

    clave: z
        .string()
        .min(1, {
            message: "Ingresa tu contraseña"
        })
})