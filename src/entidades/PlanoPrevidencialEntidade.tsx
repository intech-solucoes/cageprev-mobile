﻿

export default class PlanoPrevidencialEntidade {
	public SQ_PLANO_PREVIDENCIAL: number;
	public CD_PESSOA_ENTID: number;
	public DS_PLANO_PREVIDENCIAL: string;
	public QT_MIN_PARCELA_RESGATE?: number;
	public QT_MAX_PARCELA_RESGATE?: number;
	public SQ_PLANO_CONTABIL?: number;
	public NR_MES_BASE_REAJUSTE?: number;
	public NR_CODIGO_CNPB: string;
	public DT_HOMOLOGACAO?: Date;
	public DS_HOMOLOGACAO: string;
	public DT_INIC_VIGENCIA?: Date;
	public DT_TERM_VIGENCIA?: Date;
	public IR_SITUACAO: string;
	public SQ_TIPO_REGIME?: number;
	public CD_INDICE_VALORIZACAO: string;
	public IR_TIPO_PLANO: string;
	public SQ_EVENTO_PORTABILIDADE?: number;
	public IR_DIFERENCA: string;
	public VL_DIFERENCA?: number;
	public SQ_ESPECIE_EMPRESTIMO?: number;
	public SQ_ESPECIE_PREVIDENCIA?: number;
	public CD_INDICE_REAJUSTE: string;
	public VL_TX_MULTA?: number;
	public VL_TX_JUROS?: number;
	public CD_MOEDA_CORR_MONET: string;
	public IR_TIPO_JUROS: string;
	public IR_TIPO_CORRECAO: string;
	public CD_INDICE_CORRECAO: string;
	public SQ_ESPECIE_ATUARIAL?: number;
	public SQ_FUNDO_DESLIG?: number;
	public SQ_FUNDO_APORTE?: number;
	public SQ_CONTA_DESLIG?: number;
	public SQ_CONTA_APORTE?: number;
	public SQ_BOLETO?: number;
	public IR_NATUREZA: string;
}