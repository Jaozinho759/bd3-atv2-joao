const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv2';

use(database);

db.createCollection(collection);

/* db['bd3-nosql-atv2'].insertMany(
    [
    {
        "cod_aluno": 1,
        "cod_turma": 100,
        "nome": "Aluno 1",
        "cpf": "10000000000",
        "rg": "100000000",
        "telefone_aluno": "11987654321",
        "telefone_responsavel": "11987654322",
        "email": "aluno1@gmail.com",
        "data_nascimento": "2000-01-01 00:00:00"
    },
    {
        "cod_aluno": 2,
        "cod_turma": 101,
        "nome": "Aluno 2",
        "cpf": "10000000001",
        "rg": "100000001",
        "telefone_aluno": "11987654322",
        "telefone_responsavel": "11987654323",
        "email": "aluno2@gmail.com",
        "data_nascimento": "2001-02-02 00:00:00"
    },
    {
        "cod_aluno": 3,
        "cod_turma": 102,
        "nome": "Aluno 3",
        "cpf": "10000000002",
        "rg": "100000002",
        "telefone_aluno": "11987654323",
        "telefone_responsavel": "11987654324",
        "email": "aluno3@gmail.com",
        "data_nascimento": "2002-03-03 00:00:00"
    },
    {
        "cod_aluno": 4,
        "cod_turma": 103,
        "nome": "Aluno 4",
        "cpf": "10000000003",
        "rg": "100000003",
        "telefone_aluno": "11987654324",
        "telefone_responsavel": "11987654325",
        "email": "aluno4@gmail.com",
        "data_nascimento": "2003-04-04 00:00:00"
    },
    {
        "cod_aluno": 5,
        "cod_turma": 104,
        "nome": "Aluno 5",
        "cpf": "10000000004",
        "rg": "100000004",
        "telefone_aluno": "11987654325",
        "telefone_responsavel": "11987654326",
        "email": "aluno5@gmail.com",
        "data_nascimento": "2004-05-05 00:00:00"
    },
    {
        "cod_aluno": 6,
        "cod_turma": 105,
        "nome": "Aluno 6",
        "cpf": "10000000005",
        "rg": "100000005",
        "telefone_aluno": "11987654326",
        "telefone_responsavel": "11987654327",
        "email": "aluno6@gmail.com",
        "data_nascimento": "2005-06-06 00:00:00"
    },
    {
        "cod_aluno": 7,
        "cod_turma": 106,
        "nome": "Aluno 7",
        "cpf": "10000000006",
        "rg": "100000006",
        "telefone_aluno": "11987654327",
        "telefone_responsavel": "11987654328",
        "email": "aluno7@gmail.com",
        "data_nascimento": "2006-07-07 00:00:00"
    },
    {
        "cod_aluno": 8,
        "cod_turma": 107,
        "nome": "Aluno 8",
        "cpf": "10000000007",
        "rg": "100000007",
        "telefone_aluno": "11987654328",
        "telefone_responsavel": "11987654329",
        "email": "aluno8@gmail.com",
        "data_nascimento": "2007-08-08 00:00:00"
    },
    {
        "cod_aluno": 9,
        "cod_turma": 108,
        "nome": "Aluno 9",
        "cpf": "10000000008",
        "rg": "100000008",
        "telefone_aluno": "11987654329",
        "telefone_responsavel": "11987654330",
        "email": "aluno9@gmail.com",
        "data_nascimento": "2008-09-09 00:00:00"
    },
    {
        "cod_aluno": 10,
        "cod_turma": 109,
        "nome": "Aluno 10",
        "cpf": "10000000009",
        "rg": "100000009",
        "telefone_aluno": "11987654330",
        "telefone_responsavel": "11987654331",
        "email": "aluno10@gmail.com",
        "data_nascimento": "2009-10-10 00:00:00"
    },
    {
        "cod_aluno": 11,
        "cod_turma": 100,
        "nome": "Aluno 11",
        "cpf": "10000000010",
        "rg": "100000010",
        "telefone_aluno": "11987654331",
        "telefone_responsavel": "11987654332",
        "email": "aluno11@gmail.com",
        "data_nascimento": "2000-11-11 00:00:00"
    },
    {
        "cod_aluno": 12,
        "cod_turma": 101,
        "nome": "Aluno 12",
        "cpf": "10000000011",
        "rg": "100000011",
        "telefone_aluno": "11987654332",
        "telefone_responsavel": "11987654333",
        "email": "aluno12@gmail.com",
        "data_nascimento": "2001-12-12 00:00:00"
    },
    {
        "cod_aluno": 13,
        "cod_turma": 102,
        "nome": "Aluno 13",
        "cpf": "10000000012",
        "rg": "100000012",
        "telefone_aluno": "11987654333",
        "telefone_responsavel": "11987654334",
        "email": "aluno13@gmail.com",
        "data_nascimento": "2002-01-13 00:00:00"
    },
    {
        "cod_aluno": 14,
        "cod_turma": 103,
        "nome": "Aluno 14",
        "cpf": "10000000013",
        "rg": "100000013",
        "telefone_aluno": "11987654334",
        "telefone_responsavel": "11987654335",
        "email": "aluno14@gmail.com",
        "data_nascimento": "2003-02-14 00:00:00"
    },
    {
        "cod_aluno": 15,
        "cod_turma": 104,
        "nome": "Aluno 15",
        "cpf": "10000000014",
        "rg": "100000014",
        "telefone_aluno": "11987654335",
        "telefone_responsavel": "11987654336",
        "email": "aluno15@gmail.com",
        "data_nascimento": "2004-03-15 00:00:00"
    },
    {
        "cod_aluno": 16,
        "cod_turma": 105,
        "nome": "Aluno 16",
        "cpf": "10000000015",
        "rg": "100000015",
        "telefone_aluno": "11987654336",
        "telefone_responsavel": "11987654337",
        "email": "aluno16@gmail.com",
        "data_nascimento": "2005-04-16 00:00:00"
    },
    {
        "cod_aluno": 17,
        "cod_turma": 106,
        "nome": "Aluno 17",
        "cpf": "10000000016",
        "rg": "100000016",
        "telefone_aluno": "11987654337",
        "telefone_responsavel": "11987654338",
        "email": "aluno17@gmail.com",
        "data_nascimento": "2006-05-17 00:00:00"
    },
    {
        "cod_aluno": 18,
        "cod_turma": 107,
        "nome": "Aluno 18",
        "cpf": "10000000017",
        "rg": "100000017",
        "telefone_aluno": "11987654338",
        "telefone_responsavel": "11987654339",
        "email": "aluno18@gmail.com",
        "data_nascimento": "2007-06-18 00:00:00"
    },
    {
        "cod_aluno": 19,
        "cod_turma": 108,
        "nome": "Aluno 19",
        "cpf": "10000000018",
        "rg": "100000018",
        "telefone_aluno": "11987654339",
        "telefone_responsavel": "11987654340",
        "email": "aluno19@hotmail.com",
        "data_nascimento": "2008-07-19 00:00:00"
    },
    {
        "cod_aluno": 20,
        "cod_turma": 109,
        "nome": "Aluno 20",
        "cpf": "10000000019",
        "rg": "100000019",
        "telefone_aluno": "11987654340",
        "telefone_responsavel": "11987654341",
        "email": "aluno20@hotmail.com",
        "data_nascimento": "2009-08-20 00:00:00"
    },
    {
        "cod_aluno": 21,
        "cod_turma": 100,
        "nome": "Aluno 21",
        "cpf": "10000000020",
        "rg": "100000020",
        "telefone_aluno": "11987654341",
        "telefone_responsavel": "11987654342",
        "email": "aluno21@hotmail.com",
        "data_nascimento": "2000-09-21 00:00:00"
    },
    {
        "cod_aluno": 22,
        "cod_turma": 101,
        "nome": "Aluno 22",
        "cpf": "10000000021",
        "rg": "100000021",
        "telefone_aluno": "11987654342",
        "telefone_responsavel": "11987654343",
        "email": "aluno22@hotmail.com",
        "data_nascimento": "2001-10-22 00:00:00"
    },
    {
        "cod_aluno": 23,
        "cod_turma": 102,
        "nome": "Aluno 23",
        "cpf": "10000000022",
        "rg": "100000022",
        "telefone_aluno": "11987654343",
        "telefone_responsavel": "11987654344",
        "email": "aluno23@hotmail.com",
        "data_nascimento": "2002-11-23 00:00:00"
    },
    {
        "cod_aluno": 24,
        "cod_turma": 103,
        "nome": "Aluno 24",
        "cpf": "10000000023",
        "rg": "100000023",
        "telefone_aluno": "11987654344",
        "telefone_responsavel": "11987654345",
        "email": "aluno24@hotmail.com",
        "data_nascimento": "2003-12-24 00:00:00"
    },
    {
        "cod_aluno": 25,
        "cod_turma": 104,
        "nome": "Aluno 25",
        "cpf": "10000000024",
        "rg": "100000024",
        "telefone_aluno": "11987654345",
        "telefone_responsavel": "11987654346",
        "email": "aluno25@hotmail.com",
        "data_nascimento": "2004-01-25 00:00:00"
    },
    {
        "cod_aluno": 26,
        "cod_turma": 105,
        "nome": "Aluno 26",
        "cpf": "10000000025",
        "rg": "100000025",
        "telefone_aluno": "11987654346",
        "telefone_responsavel": "11987654347",
        "email": "aluno26@hotmail.com",
        "data_nascimento": "2005-02-26 00:00:00"
    },
    {
        "cod_aluno": 27,
        "cod_turma": 106,
        "nome": "Aluno 27",
        "cpf": "10000000026",
        "rg": "100000026",
        "telefone_aluno": "11987654347",
        "telefone_responsavel": "11987654348",
        "email": "aluno27@hotmail.com",
        "data_nascimento": "2006-03-27 00:00:00"
    },
    {
        "cod_aluno": 28,
        "cod_turma": 107,
        "nome": "Aluno 28",
        "cpf": "10000000027",
        "rg": "100000027",
        "telefone_aluno": "11987654348",
        "telefone_responsavel": "11987654349",
        "email": "aluno28@hotmail.com",
        "data_nascimento": "2007-04-28 00:00:00"
    },
    {
        "cod_aluno": 29,
        "cod_turma": 108,
        "nome": "Aluno 29",
        "cpf": "10000000028",
        "rg": "100000028",
        "telefone_aluno": "11987654349",
        "telefone_responsavel": "11987654350",
        "email": "aluno29@hotmail.com",
        "data_nascimento": "2008-05-01 00:00:00"
    },
    {
        "cod_aluno": 30,
        "cod_turma": 109,
        "nome": "Aluno 30",
        "cpf": "10000000029",
        "rg": "100000029",
        "telefone_aluno": "11987654350",
        "telefone_responsavel": "11987654351",
        "email": "aluno30@hotmail.com",
        "data_nascimento": "2009-06-02 00:00:00"
    },
    {
        "cod_aluno": 31,
        "cod_turma": 100,
        "nome": "Aluno 31",
        "cpf": "10000000030",
        "rg": "100000030",
        "telefone_aluno": "11987654351",
        "telefone_responsavel": "11987654352",
        "email": "aluno31@hotmail.com",
        "data_nascimento": "2000-07-03 00:00:00"
    },
    {
        "cod_aluno": 32,
        "cod_turma": 101,
        "nome": "Aluno 32",
        "cpf": "10000000031",
        "rg": "100000031",
        "telefone_aluno": "11987654352",
        "telefone_responsavel": "11987654353",
        "email": "aluno32@hotmail.com",
        "data_nascimento": "2001-08-04 00:00:00"
    },
    {
        "cod_aluno": 33,
        "cod_turma": 102,
        "nome": "Aluno 33",
        "cpf": "10000000032",
        "rg": "100000032",
        "telefone_aluno": "11987654353",
        "telefone_responsavel": "11987654354",
        "email": "aluno33@hotmail.com",
        "data_nascimento": "2002-09-05 00:00:00"
    },
    {
        "cod_aluno": 34,
        "cod_turma": 103,
        "nome": "Aluno 34",
        "cpf": "10000000033",
        "rg": "100000033",
        "telefone_aluno": "11987654354",
        "telefone_responsavel": "11987654355",
        "email": "aluno34@hotmail.com",
        "data_nascimento": "2003-10-06 00:00:00"
    },
    {
        "cod_aluno": 35,
        "cod_turma": 104,
        "nome": "Aluno 35",
        "cpf": "10000000034",
        "rg": "100000034",
        "telefone_aluno": "11987654355",
        "telefone_responsavel": "11987654356",
        "email": "aluno35@hotmail.com",
        "data_nascimento": "2004-11-07 00:00:00"
    },
    {
        "cod_aluno": 36,
        "cod_turma": 105,
        "nome": "Aluno 36",
        "cpf": "10000000035",
        "rg": "100000035",
        "telefone_aluno": "11987654356",
        "telefone_responsavel": "11987654357",
        "email": "aluno36@hotmail.com",
        "data_nascimento": "2005-12-08 00:00:00"
    },
    {
        "cod_aluno": 37,
        "cod_turma": 106,
        "nome": "Aluno 37",
        "cpf": "10000000036",
        "rg": "100000036",
        "telefone_aluno": "11987654357",
        "telefone_responsavel": "11987654358",
        "email": "aluno37@hotmail.com",
        "data_nascimento": "2006-01-09 00:00:00"
    },
    {
        "cod_aluno": 38,
        "cod_turma": 107,
        "nome": "Aluno 38",
        "cpf": "10000000037",
        "rg": "100000037",
        "telefone_aluno": "11987654358",
        "telefone_responsavel": "11987654359",
        "email": "aluno38@hotmail.com",
        "data_nascimento": "2007-02-10 00:00:00"
    },
    {
        "cod_aluno": 39,
        "cod_turma": 108,
        "nome": "Aluno 39",
        "cpf": "10000000038",
        "rg": "100000038",
        "telefone_aluno": "11987654359",
        "telefone_responsavel": "11987654360",
        "email": "aluno39@hotmail.com",
        "data_nascimento": "2008-03-11 00:00:00"
    },
    {
        "cod_aluno": 40,
        "cod_turma": 109,
        "nome": "Aluno 40",
        "cpf": "10000000039",
        "rg": "100000039",
        "telefone_aluno": "11987654360",
        "telefone_responsavel": "11987654361",
        "email": "aluno40@hotmail.com",
        "data_nascimento": "2009-04-12 00:00:00"
    },
    {
        "cod_aluno": 41,
        "cod_turma": 100,
        "nome": "Aluno 41",
        "cpf": "10000000040",
        "rg": "100000040",
        "telefone_aluno": "11987654361",
        "telefone_responsavel": "11987654362",
        "email": "aluno41@hotmail.com",
        "data_nascimento": "2000-05-13 00:00:00"
    },
    {
        "cod_aluno": 42,
        "cod_turma": 101,
        "nome": "Aluno 42",
        "cpf": "10000000041",
        "rg": "100000041",
        "telefone_aluno": "11987654362",
        "telefone_responsavel": "11987654363",
        "email": "aluno42@hotmail.com",
        "data_nascimento": "2001-06-14 00:00:00"
    },
    {
        "cod_aluno": 43,
        "cod_turma": 102,
        "nome": "Aluno 43",
        "cpf": "10000000042",
        "rg": "100000042",
        "telefone_aluno": "11987654363",
        "telefone_responsavel": "11987654364",
        "email": "aluno43@hotmail.com",
        "data_nascimento": "2002-07-15 00:00:00"
    },
    {
        "cod_aluno": 44,
        "cod_turma": 103,
        "nome": "Aluno 44",
        "cpf": "10000000043",
        "rg": "100000043",
        "telefone_aluno": "11987654364",
        "telefone_responsavel": "11987654365",
        "email": "aluno44@hotmail.com",
        "data_nascimento": "2003-08-16 00:00:00"
    },
    {
        "cod_aluno": 45,
        "cod_turma": 104,
        "nome": "Aluno 45",
        "cpf": "10000000044",
        "rg": "100000044",
        "telefone_aluno": "11987654365",
        "telefone_responsavel": "11987654366",
        "email": "aluno45@hotmail.com",
        "data_nascimento": "2004-09-17 00:00:00"
    },
    {
        "cod_aluno": 46,
        "cod_turma": 105,
        "nome": "Aluno 46",
        "cpf": "10000000045",
        "rg": "100000045",
        "telefone_aluno": "11987654366",
        "telefone_responsavel": "11987654367",
        "email": "aluno46@hotmail.com",
        "data_nascimento": "2005-10-18 00:00:00"
    },
    {
        "cod_aluno": 47,
        "cod_turma": 106,
        "nome": "Aluno 47",
        "cpf": "10000000046",
        "rg": "100000046",
        "telefone_aluno": "11987654367",
        "telefone_responsavel": "11987654368",
        "email": "aluno47@hotmail.com",
        "data_nascimento": "2006-11-19 00:00:00"
    },
    {
        "cod_aluno": 48,
        "cod_turma": 107,
        "nome": "Aluno 48",
        "cpf": "10000000047",
        "rg": "100000047",
        "telefone_aluno": "11987654368",
        "telefone_responsavel": "11987654369",
        "email": "aluno48@hotmail.com",
        "data_nascimento": "2007-12-20 00:00:00"
    },
    {
        "cod_aluno": 49,
        "cod_turma": 108,
        "nome": "Aluno 49",
        "cpf": "10000000048",
        "rg": "100000048",
        "telefone_aluno": "11987654369",
        "telefone_responsavel": "11987654370",
        "email": "aluno49@hotmail.com",
        "data_nascimento": "2008-01-21 00:00:00"
    },
    {
        "cod_aluno": 50,
        "cod_turma": 109,
        "nome": "Aluno 50",
        "cpf": "10000000049",
        "rg": "100000049",
        "telefone_aluno": "11987654370",
        "telefone_responsavel": "11987654371",
        "email": "aluno50@hotmail.com",
        "data_nascimento": "2009-02-22 00:00:00"
    }
]); */



// Atualizando um documento específico
/*db['bd3-nosql-atv2'].updateOne(
    { "cod_aluno": 2 }, // Filtro para encontrar o documento
    { 
        $set: {
            "cod_turma": 101, 
            "nome": "Aluno Atualizado", 
            "cpf": "20000000000",
            "rg": "200000000", 
            "telefone_aluno": "11912345678", 
            "telefone_responsavel": "11912345679", 
            "email": "aluno.atualizado@gmail.com", 
            "data_nascimento": "2001-01-01 00:00:00"
        } 
    }
);  */

//Comando para deletar um aluno especifico

/* db['bd3-nosql-atv2'].deleteOne(
    { "cod_aluno": 1 } // Filtro para encontrar o documento a ser excluído
);
*/

//Comando para trazer todos alunos que usam @gmail.com
//db['bd3-nosql-atv2'].find({"email":/@gmail\.com$/});
