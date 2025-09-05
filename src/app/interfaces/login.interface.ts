import IUsuario from './usuario.interface';

export default interface ILogin{
  user: IUsuario,
  token: string
}
