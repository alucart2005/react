
const UsersList = ({users}) => {


    return(
        <ul>
            {
                users?.map( (userElement, index) => (
                    <li key={`user-${index}`}>
                        <h4><span>Nombre:</span> {userElement.name}</h4>
                        <h4><span>Email:</span> {userElement.email}</h4>
                        <h4><span>Edad:</span> {userElement.age}</h4>
                        <h4><span>Vacunacion:</span> {userElement.isVaccinated.toString()}</h4>
                        <h4><span>Genero:</span> {userElement.gender}</h4>
                    </li>
                ) )
            }
        </ul>
    )

}

export default UsersList
