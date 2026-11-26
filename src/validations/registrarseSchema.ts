import { regex, z } from "zod";

export const registrarSchema = z.object({

    // DNI
    dni: z
        .string()
        .trim()
        .max(8, {
            message: "El DNI dete tener 8 digitos",
        })
        .regex(/^\d{8}$/, { message: "El DNI solo debe tener numeros." }),

    // Validacion Nombres
    nombres: z
        .string()
        .trim()
        .min(3, {
            message: "El monbre debe tener almenos 3 caracteres."
        })
        .max(200, {
            message: "El nombre debe ser menor a 200 caracteres."
        })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/, {
            message: "El nombre solo debe tener letras."
        }),

    // Validacion Apellidos
    apellidos: z
        .string()
        .trim()
        .min(3,
            {
                message: "El apellido debe tener almenos 3 caracteres."
            }
        )
        .max(200,
            {
                message: "El apellido debe ser menor de 200 caracteres."
            }
        )
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/, {
            message: "El apellido solo debe tener letras."
        }),

    // Validacion correo
    correo: z
        .string()
        .trim()
        .email({
            message: "Por favor ingrese un correo valico"
        })
    ,

    clave: z
        .string()
        .trim()
        .min(4, {
            message: "La contraseña debe tener almenos 5 caracteres"
        })
})