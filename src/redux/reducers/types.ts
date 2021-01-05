export type Ticket = {
        tik_id: Number,
        tik_fechacreacion: Date,
        tik_fechamodif: Date,
        tik_cliente: String,
        tik_clientecod: String,
        tik_abonado: String,
        tik_contacto: String,
        tik_tel: String,
        tik_email: String,
        tik_estado: String,
        tik_usu: String,
        tik_tipo: String,
        tik_modulo: String,
        tik_tema: String,
        tik_notes: String,
        tik_ven_cod: String
}

export type SystemAction = {
    type: String
    payload: {
        tickets: Object
        error:String
    }
}