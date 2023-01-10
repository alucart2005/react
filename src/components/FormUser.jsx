import { useForm } from 'react-hook-form'


const FormUser = () => {

    const { register, handleSubmit, formState : { errors } } = useForm()
    //register va a tener informacion del input
    //handleSubmit es la funcion que se ejecutara en el submit

    const getFormData = ( data ) => {
      //objeto.propiedad = valor
      //objeto["propiedad"] = valor

      data.id=Date.now()
      console.log(data)
    }


    return(
        <div>
            <form onSubmit={ handleSubmit(getFormData) }>
                <div className="input-wrapper">
                    <label htmlFor="user-name">Nombre</label>
                    <input 
                    type="text" 
                    id="user-name"
                    { ...register("name", {
                        required : true
                    }) }
                    />
                    {  errors.name?.type === "required" && <span role="alert">Este input es requerido</span> }

                </div>
                <div className="input-wrapper">
                    <label htmlFor="user-email">Email</label>
                    <input 
                    type="email" 
                    id="user-email"
                    { ...register("email") }
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="user-age">Edad</label>
                    <input 
                    type="number"
                    id="user-age"
                    {...register("age")}
                    />
                </div>
                <div>
                    <label htmlFor="user-vaccinated">Vacunacion completa</label>
                    <input 
                    id="user-vaccinated"
                    type="checkbox" 
                    { ...register("isVaccinated") }
                    />
                </div>
                <div>
                    <h4>Genero</h4>
                    <label htmlFor="user-gender1">Hombre</label>
                    <input 
                    type="radio" 
                    id="user-gender1"
                    value="Male"
                    name="user-gender"
                    {...register("gender")}
                    />

                    <label htmlFor="user-gender2">Mujer</label>
                    <input 
                    type="radio" 
                    id="user-gender2"
                    value="Female"
                    name="user-gender"
                    {...register("gender")}
                    />

                    <label htmlFor="user-gender3">Otro</label>
                    <input 
                    type="radio" 
                    id="user-gender3"
                    name="user-gender"
                    value="Other"
                    {...register("gender")}
                    />
                    
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default FormUser