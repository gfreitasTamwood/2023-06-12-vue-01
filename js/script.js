// const app = Vue.createApp({
//     data() {
//         return {
//             title: "Manager",
//             name: "Guilherme",
//             gender: "Male",
//             email: "mail@mail.com",
//             salary: 72000,
//             gustavo: true
//         }
//     },
//     methods: {
//         changeTitle(message) {
//             this.title = message;
//         },
//         displayData() {
//             this.gustavo = !this.gustavo;
//         }
//     }
// });

// app.mount("#app");

// const app = Vue.createApp({
//     data() {
//         return {
//             x: 0,
//             y: 0
//         }
//     },
//     methods: {
//         classEvent(e,message) {
//             console.log(message);
//             console.log(e);
//         },
//         cursorPosition(e) {
//             this.x = e.offsetX;
//             this.y = e.offsetY;
//         },
//         displayEvent(e) {
//             console.log(e);
//         }
//     }
// });
// app.mount("#app");
const app = Vue.createApp({
    data(){
        return {
            // students: [
            //     {
            //         fullName: "Guilherme Forsetto",
            //         mail: "mail@mail.com",
            //         favLanguage: "PHP",
            //         salary: 55000,
            //         img: "https://robohash.org/eligendidoloremvel.png",
            //         toggle: false
            //     },
            //     {
            //         fullName: "Joao Crescencio",
            //         mail: "jcrescencio@mail.com",
            //         favLanguage: "JavaScript",
            //         salary: 60000,
            //         img: "https://robohash.org/inciduntautemaperiam.png",
            //         toggle: false
            //     },
            //     {
            //         fullName: "Mia Lee",
            //         mail: "mlee@mail.com",
            //         favLanguage: "PHP",
            //         salary: 65000,
            //         img: "https://robohash.org/rerumametearum.png",
            //         toggle: false
            //     },
            //     {
            //         fullName: "Lim HS",
            //         mail: "hslim@mail.com",
            //         favLanguage: "Python",
            //         salary: 70000,
            //         img: "https://robohash.org/quianullalaudantium.png",
            //         toggle: false
            //     },
            //     {
            //         fullName: "Aya Iida",
            //         mail: "aiida@mail.com",
            //         favLanguage: "JavaScript",
            //         salary: 80000,
            //         img: "https://robohash.org/odiocumodit.png",
            //         toggle: false
            //     },
            //     {
            //         fullName: "Santiago Ramirez",
            //         mail: "sramirez@mail.com",
            //         favLanguage: "JavaScript",
            //         salary: 60000,
            //         img: "https://robohash.org/repudiandaeetut.png",
            //         toggle: false
            //     }, {
            //         fullName: "Duygu Efe",
            //         mail: "deye@mail.com",
            //         favLanguage: "Python",
            //         salary: 85000,
            //         img: "https://robohash.org/iustomaximefuga.png",
            //         toggle: false
            //     }
            // ]
        }
    },
    methods: {
        // userData(e){
        //     console.log(e.target.value);
        // },
        // toggled(student){
        //     student.toggle = !student.toggle;
        // }
    }
});

app.mount("#app");