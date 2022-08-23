import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // produtos 
  
  foodDetails = [
    {
      id:1,
      foodName:"PC Gamer I9",
      foodDetails:"I9 - RTX3090 - 32GB ",
      foodPrice:20000,
      foodImg:"https://media.istockphoto.com/photos/topend-system-unit-for-gaming-computer-close-up-picture-id1314343964?k=20&m=1314343964&s=612x612&w=0&h=kYE8ZVpNqJsO4ZA4fFDqy7Xw5NZ4OBM08rhTPX3K1Ps="
    },
    {
      id:2,
      foodName:"Playstation 5",
      foodDetails:"2 controles, sem leitor digital, 2 jogos",
      foodPrice:5000,
      foodImg:"https://media.istockphoto.com/photos/sony-playstation-5-console-and-games-picture-id1287493854?k=20&m=1287493854&s=612x612&w=0&h=6Kj1yXGX_akOYSLdbNM2DzsAA9eQAUOpDmAGMgzWSWY="
    },
    {
      id:3,
      foodName:"PC Gamer I7",
      foodDetails:"I7 - RTX3070 - 16GB",
      foodPrice:149,
      foodImg:"https://media.istockphoto.com/photos/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-in-picture-id1170073827?k=20&m=1170073827&s=612x612&w=0&h=70RO-FkDfAArnoxCBZ9AQ1ZPNIZ8rN9g68NryEENJvM="
    },
    {
      id:4,
      foodName:"Playstation 4",
      foodDetails:"2 controles, 4 jogos, headset",
      foodPrice:2500,
      foodImg:"https://media.istockphoto.com/photos/russia-oktober-24-2019-ps4-console-background-playstation-4-sony-picture-id1192050906?k=20&m=1192050906&s=612x612&w=0&h=pS91ji36UtyysTXWha76p4_z5430h8qW5NSLu4rNFkA="
    },
    {
      id:5,
      foodName:"Acessórios",
      foodDetails:"Mouse - Teclado - HeadSet",
      foodPrice: 3000,
      foodImg:"https://media.istockphoto.com/photos/gamer-workspace-concept-top-view-a-gaming-gear-mouse-keyboard-with-picture-id1051243766?k=20&m=1051243766&s=612x612&w=0&h=v6aMMmgOkuvvqwkhCN_LGo8bsrYw3MxHHThPDPPNdu4="
    },
    {
      id:6,
      foodName:"Monitores",
      foodDetails:"144hz - 240hz - curvo",
      foodPrice:2500,
      foodImg:"https://media.istockphoto.com/photos/back-view-shot-of-professional-gamer-playing-in-firstperson-shooter-picture-id1010650992?k=20&m=1010650992&s=612x612&w=0&h=x2yDgY0y9SDiZqryA7PmqBRLn4JdqpK0vHIqiy80eq4="
    }
  ]


  

}
