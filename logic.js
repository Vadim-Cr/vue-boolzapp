

const { createApp } = Vue;

createApp({
  data(){
    return{
        contacts: [
            {
                id: 1,
                name: 'Michela',
                avatar: '/img/download1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'yourMessage'
                    }
                ],
            },
            {
                id: 2,
                name: 'Sasha',
                avatar: '/img/download2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'myMessage'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'yourMessage'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'myMessage'
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '/img/download3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'yourMessage'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'myMessage'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'yourMessage'
                    }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '/img/download4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'yourMessage'
                    }
                ],
            },
            {
                id: 5,
                name: 'Alessandra L.',
                avatar: '/img/download5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la chiamo',
                        status: 'yourMessage'
                    }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '/img/download6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'yourMessage'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'myMessage'
                    }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '/img/download7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'yourMessage'
                    }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '/img/download7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'yourMessage'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'myMessage'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'yourMessage'
                    }
                ],
            }
        ]
    }
  },

  methods: {
    acquitanceConversation () {
        
        console.log("messages");
    }
  }

}).mount("#App")


