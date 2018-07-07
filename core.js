var db = [
    {
        descrizione: "Copertura non pedonabile con elemento termoisolante posto sopra elelento di tenuta",
        prodotto: "Membrana flessibile sintetica",
        materiale: [
            "poliolefine [TPO/FPO]"
        ],
        opera: 1,
        costruzione: 1,
        copertura: 0,
        pavimentazione: 0,
        supporto: 0,
        termoisolante: 0,
        pendenza: 0,
        posa: 0,
        ancoraggio_tenuta: 0,
        ancoraggio_termoisolante: 0
    },
    {
        descrizione: "Copertura non pedonabile con elemento termoisolante posto sopra elelento di tenuta",
        prodotto: "Membrana flessibile sintetica",
        materiale: [
            "polivinilcloruro [PVC]"
        ],
        opera: 1,
        costruzione: 1,
        copertura: 0,
        pavimentazione: 0,
        supporto: 0,
        termoisolante: 0,
        pendenza: 0,
        posa: 0,
        ancoraggio_tenuta: 0,
        ancoraggio_termoisolante: 0
    },
    {
        descrizione: "Copertura non pedonabile con elemento termoisolante posto sotto elelento di tenuta",
        prodotto: "Membrana flessibile bitume polimero",
        materiale: [
            "bitume polimero plastomerico [BPP]",
            "bitume polimero elastomerico [BPE]"
        ],
        opera: 1,
        costruzione: 1,
        copertura: 0,
        pavimentazione: 0,
        supporto: 0,
        termoisolante: 1,
        pendenza: 0,
        posa: 2,
        ancoraggio_tenuta: 3,
        ancoraggio_termoisolante: 0
    },
    {
        descrizione: "Copertura non pedonabile con elemento termoisolante posto sotto elelento di tenuta",
        prodotto: "Membrana flessibile sintetica",
        materiale: [
            "etilene-propilene-diene monomero [EPDM]"
        ],
        opera: 1,
        costruzione: 1,
        copertura: 0,
        pavimentazione: 0,
        supporto: 0,
        termoisolante: 1,
        pendenza: 0,
        posa: 0,
        ancoraggio_tenuta: 0,
        ancoraggio_termoisolante: 0
    },
    {
        descrizione: "Copertura non pedonabile con elemento termoisolante posto sotto elelento di tenuta",
        prodotto: "Membrana flessibile sintetica",
        materiale: [
            "poliolefine [TPO/FPO]"
        ],
        opera: 1,
        costruzione: 1,
        copertura: 0,
        pavimentazione: 0,
        supporto: 0,
        termoisolante: 1,
        pendenza: 0,
        posa: 0,
        ancoraggio_tenuta: 0,
        ancoraggio_termoisolante: 0
    }

];

var values = {
    opera: [
        "edificio interrato",
        "copertura",
        "opera idrauilca",
        "opera viaria"
    ],
    costruzione: [
        "esistente",
        "nuova"
    ],
    copertura: [
        "non pedonabile",
        "pedonabile",
        "carrabile",
        "a verde"
    ],
    pavimentazione: [
        "materiale sfuso",
        "elementi posati a secco",
        "materiale gettato in opera",
        "assente"
    ],
    supporto: [
        "cementizio continuo",
        "cementizio discontinuo",
        "metallico",
        "ligneo"
    ],
    termoisolante: [
        "sopra elemento tenuta",
        "sotto elemento tenuta",
        "assente"
    ],
    pendenza: [
        "piana (da 1,5 a 5%)",
        "inclinata (da 5 a 20%)",
        "mediamente inclinata (da 20 a 50%)",
        "fortemente inclinata (oltre 50%)"
    ],
    posa: [
        "indipendenza",
        "semi-indipendenza",
        "completa adesione"
    ],
    ancoraggio_tenuta: [
        "zavorra",
        "fissaggio meccanico",
        "saldatura/incollaggio",
        "sistemi adesivi"
    ],
    ancoraggio_termoisolante: [
        "zavorra",
        "fissaggio meccanico",
        "saldatura/incollaggio",
        "sistemi adesivi"
    ]
};

const labels = {
    prodotto: "Tipologia di prodotto",
    materiale: "Tipologia di materiale",
    opera: "Tipologia di opera",
    costruzione: "Costruzione",
    copertura: "Tipologia di copertura",
    pavimentazione: "Tipologia di pavimentazione",
    supporto: "Tipologia di supporto strutturale",
    termoisolante: "Elemento termoisolante",
    pendenza: "Pendenza",
    posa: "Modalità di posa dell'elemento di tenuta",
    ancoraggio_tenuta: "Ancoraggio dell'elemento di tenuta",
    ancoraggio_termoisolante: "Ancoraggio dell'elemento termoisolante"
}