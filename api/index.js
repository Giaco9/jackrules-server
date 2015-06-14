'use strict';
module.exports = function() {
  let init = {
    public_e: {
      0: {
        title: 'H-ACK Beverage',
        city: 'Roncade',
        description: 'H-ACK is the hackathon designed by H-FARM for industries. It is a 24-hour marathon of pure creative energy, where designers, developers and marketing specialists develop innovative projects mixing the unique know how of traditional Made in Italy excellences with the digital world.',
        data: '14/06/2015',
        time: '9:00',
        photo: 'img/e1.jpg'
      },
      1: {
        title: 'Marilyn Manson – “The Pale Emperor tour”',
        city: 'Milano',
        description: 'In concomitanza con l’uscita del nuovo album “The Pale Emperor” (Cooking Vinyl), il “reverendo” Marilyn Manson17.06.2015  annuncia e conferma il tour europeo che lo porterà anche in Italia per un’unica data programmata il 17 giugno prossimo all’Alcatraz di Milano. Un’occasione da non perdere, per rivedere dal vivo uno dei personaggi più controversi della scena rock americana. Sarà presente uno special guest che annunceremo appena possibile.',
        data: '17/06/2015',
        time: '19:00',
        photo: 'img/e2.jpg'
      },
      2: {
        title: '',
        description: 'La passione per la musica, i colori e le atmosfere tipiche del blues..... ...la voglia di proporre un progetto in cui mescolare i gusti e le influenze ed allo stesso tempo riscoprire e rielaborare sonorità old style ... da qui nasce la MEG BLUEZ BAND!',
        city: 'Milano',
        data: '19/06/2015',
        time: '23:00',
        photo: 'img/e3.jpg'
      }
    },
    private_e: {
      0: {
        title: 'Alcoliche Alchimie - Milano',
        data: '15/06/2015',
        time: '22:00'
      },
      1: {
        title: 'Alter Ego Caffè - Milano',
        data: '18/06/2015',
        time: '20:00'
      },
      2: {
        title: 'Arci Ohibò - Milano',
        data: '22/06/2015',
        time: '21:00'
      }
    }
  };
  let users = [
    {
      name: 'Stefano Sacco',
      photo: 'img/p1.png'
    },
    {
      name: 'Sasha DiGiulian',
      photo: 'img/p3.png'
    },
    {
      name: 'Luca Casartelli',
      photo: 'img/p2.png'
    }
  ];
  let _init = function(req, res) {
    init.user = users[req.params.user];
    res.json(init);
  };

  return {
    init: _init
  };
};
