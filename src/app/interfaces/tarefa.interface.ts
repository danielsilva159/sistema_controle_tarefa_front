export interface ITarefa {
  id?: number;
  titulo: string;
  descricao: string;
  status: string;
  responsavel: string;
  vencimento: string;
  anexos?: string[];
}
