export default function Cracha(props){
    return(
        <div className="form-group">
        <p><img src={props.funcionario.UserPicture} /></p>

        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text">Nome</span>
        <input class="form-control" type="text" aria-label="Disabled input example" disabled value={props.funcionario.UserName}/>
        </div>
        
        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text">Cargo</span>
        <input class="form-control" type="text" aria-label="Disabled input example" disabled value={props.funcionario.UserOffice}/>
        </div>

        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text">Matricula</span>
        <input class="form-control" type="text" aria-label="Disabled input example" disabled value={props.funcionario.UserCode}/>
        </div>
        </div>
    )
}