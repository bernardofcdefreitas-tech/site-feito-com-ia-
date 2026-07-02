import { Motorcycle } from "../types";

export const motorcyclesData: Motorcycle[] = [
  {
    id: "honda-africa-twin",
    name: "Honda Africa Twin CRF 1100L",
    brand: "Honda",
    year: 2024,
    mileage: "0 KM",
    price: 109900,
    category: "adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFffLazTlGdGjWAn2nbuL-O_9pK6zAVuCxqFpdugaqXmv5tSp7bp_LQgP_CHuSAMlvZVa3waGW3lOlsJCUTKUAdr_TxdSxW109E4nQEuwCJMmU2EOk4UivP_pme8woT8GnpfM2NdnW0CPv62_SE7wSjHk-8WtjE3FP_b5TwJkbWqtwkzmZwdnPWd4JE0Xsz-2T02QcOcaIpVqi5cU6cCUn9WRhvws3VGDlF9BVwsHDGPAe-o7BGQNjCw",
    badge: "LIMITED EDITION",
    color: "Glittering White / Pearl White",
    description: "Referência absoluta em aventura, unindo a força do off-road ao máximo conforto de viagem.",
    longDescription: "A CRF 1100L Africa Twin é a epítome do luxo em aventura. Equipada com painel TFT touchscreen de 6,5 polegadas totalmente conectável, piloto automático, suspensão eletrônica Showa EERA e modos de pilotagem avançados. Seu motor de 1.084 cc oferece uma curva de torque soberba para vencer qualquer topografia com suavidade.",
    specs: [
      { label: "Motor", value: "Bicilíndrico paralelo, 4 tempos, 1084 cc" },
      { label: "Potência", value: "101 cv a 7.500 rpm" },
      { label: "Torque", value: "10,7 kgfm a 6.250 rpm" },
      { label: "Transmissão", value: "Manual de 6 marchas ou DCT" },
      { label: "Tanque", value: "18,8 Litros" },
      { label: "Peso Seco", value: "216 kg" }
    ]
  },
  {
    id: "bmw-r1250-gs",
    name: "BMW R 1250 GS Trophy",
    brand: "BMW",
    year: 2023,
    mileage: "1.200 KM",
    price: 124900,
    category: "adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwXDsKx7W7s4cai1g-5KqomMJgsJDTl1-ZIch5Yqc4sa3BQRtD4aZ-lExOGAxmbxmO3utz2Cv1CrDphJ6P6482xQaAYx7IjDWUZ2oS_zNBIiqe42uXN0-EvNzMobbH0f7y49p41aTep7km08zpVy4B90ux15lfue39I9fBEpGatiVf1eU1QWG8aUYP_ZvHnefDZyGArT4ZL6GGcW-GUNKme0wZJ1yidVnAxpkgs2D2Iy16iKfMHP9usw",
    color: "Trophy Edition Blue/White",
    description: "A lendária rainha das estradas com a inovadora tecnologia de motor ShiftCam da BMW.",
    longDescription: "A BMW R 1250 GS Trophy traz a excelência da engenharia alemã com o clássico motor boxer. Seu sistema ShiftCam oferece controle variável das válvulas de admissão, resultando em torque extraordinário em qualquer rotação. Ideal para longas distâncias com dinâmica de curvas de alta precisão.",
    specs: [
      { label: "Motor", value: "Boxer bicilíndrico de 1254 cc, ShiftCam" },
      { label: "Potência", value: "136 cv a 7.750 rpm" },
      { label: "Torque", value: "14,5 kgfm a 6.250 rpm" },
      { label: "Transmissão", value: "Eixo cardã de 6 marchas" },
      { label: "Tanque", value: "20 Litros" },
      { label: "Peso em Ordem", value: "249 kg" }
    ]
  },
  {
    id: "ducati-multistrada-v4s",
    name: "Ducati Multistrada V4 S",
    brand: "Ducati",
    year: 2024,
    mileage: "0 KM",
    price: 152000,
    category: "adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmQr8UWEHrNu4lw1vLfuK7MpyZlJMr-R5KfUt8spES2iG_XXZk15XOjAwPGBuvGMPef0LvoeUgkAPMmHL9O286JAkynWoyzGlrjcjtqI1xTEvbEsdg0CRkcEy2mulO1jOFahKkjDjvNPk0_sxxiMs6_7awCb8RpsaXh5MCvFA7zNJSrvYUJbUlQNGU6f5FnTas5rfonRudTey8WY13IMIXhnsNhyU-LDwrNyL29bwx5I_vfUGodui1NQ",
    badge: "FEATURED",
    color: "Aviator Grey / Rosso Ducati",
    description: "Tecnologia aeroespacial, radar de proximidade e o coração esportivo V4 Granturismo.",
    longDescription: "A Ducati Multistrada V4 S redefine a categoria de luxo utilitário com radares dianteiro e traseiro para piloto automático adaptativo e detecção de ponto cego. O motor V4 Granturismo é compacto, leve e tem intervalos de manutenção líderes na categoria (60.000 km para folga de válvulas).",
    specs: [
      { label: "Motor", value: "V4 Granturismo, 1158 cc" },
      { label: "Potência", value: "170 cv a 10.500 rpm" },
      { label: "Torque", value: "12,7 kgfm a 8.750 rpm" },
      { label: "Radar", value: "Equipada com Radar Frontal e Traseiro" },
      { label: "Suspensão", value: "Eletrônica Ducati Skyhook Suspension" },
      { label: "Peso Seco", value: "215 kg" }
    ]
  },
  {
    id: "triumph-tiger-1200",
    name: "Triumph Tiger 1200 Rally Pro",
    brand: "Triumph",
    year: 2024,
    mileage: "0 KM",
    price: 112500,
    category: "adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ZeBkhHvbl_GJtACRoPorzx1TpnzpBrjJzvAVDH4t_S3srmmZOsIpB8WyLz1qS12xN14Uu0jwzn0ytvC13lOs_pHbQ2C9MrAtSBQrinMhm54rkEhuvpJkxhEfW0Au3feV3WElX2T9Rnb0NX9dsZLymCSNiFpF8x6g_MhSY0nRn_wRu_JPRszWhsrbYmVgZqWumOGwjOZlraBslvSHrBF5VfciOtoicm0GcovN1VT1bfQzREJeUPtp4g",
    color: "Matt Khaki Green",
    description: "O revolucionário motor triplo T-Plane em uma máquina projetada para o off-road supremo.",
    longDescription: "O topo da linha Tiger traz o exclusivo motor triplo com ordem de ignição T-Plane, garantindo a tração de um bicilíndrico em baixa com o torque vigoroso de um tricilíndrico em alta. Equipada com tanque de alumínio, transmissão por cardã, pinças Brembo Stylema e suspensão semiativa Showa.",
    specs: [
      { label: "Motor", value: "Tricilíndrico em linha, 1160 cc, T-Plane" },
      { label: "Potência", value: "150 cv a 9.000 rpm" },
      { label: "Torque", value: "13,2 kgfm a 7.000 rpm" },
      { label: "Transmissão", value: "Cardã de 6 marchas com Quickshifter" },
      { label: "Tanque", value: "20 Litros" },
      { label: "Peso em Ordem", value: "249 kg" }
    ]
  },
  {
    id: "ktm-1290-adventure",
    name: "KTM 1290 Super Adventure R",
    brand: "KTM",
    year: 2023,
    mileage: "500 KM",
    price: 118900,
    category: "adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQImXAcFZ3vjYTrIt9tRXt6ZyOBl5Ix0E1MK9dvqT6jRKlg6PrvMlYrHkkAcB3w5L5U43-gsw1Vp-PGdJyGtiYxGzqbsQYuZwx2tbdZ2yUgPr0inIus_UhYINrUct3y5plLFtWNsauFtpaJ_q5yiJFOWteDFe0vQgFurBZMOFmzQD5pM-CDSLfUjJLZgoqODp65LN_vwT0eyOY62rtjFzD0s1y9aoUm49N2lJ9svTcJNQuVp1bRo4sUw",
    color: "Orange / White Rally Style",
    description: "A máquina de rally de alta cilindrada mais agressiva do mundo com chassi ultra leve.",
    longDescription: "Projetada para os terrenos mais difíceis, a KTM 1290 Super Adventure R traz um motor LC8 V-Twin de 1.301 cc retrabalhado que entrega pura força bruta. Possui eletrônica sofisticada com unidade inercial (IMU) de 6 eixos de última geração, suspensão WP XPLOR ajustável e chassi de treliça de cromo-molibdênio.",
    specs: [
      { label: "Motor", value: "V-Twin a 75º, 4 tempos, 1301 cc, LC8" },
      { label: "Potência", value: "160 cv a 9.000 rpm" },
      { label: "Torque", value: "14,0 kgfm a 6.500 rpm" },
      { label: "Suspensão", value: "WP XPLOR totalmente ajustável, 220 mm" },
      { label: "Tanque", value: "23 Litros com bocal elétrico" },
      { label: "Peso Seco", value: "221 kg" }
    ]
  },
  {
    id: "yamaha-tenere-700",
    name: "Yamaha Ténéré 700 World Raid",
    brand: "Yamaha",
    year: 2024,
    mileage: "0 KM",
    price: 78900,
    category: "adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYpnIJGwjF_Bp0622goSWi0T0VXfJSoOcu-y9O2q1ICBtrdBN4Lo7vZM0GnLOEVtNGlH1TOKNvt09jrdn1JCd4TzkjF8enIaEdrDe1-L_3xpKTNwnLDUJHp5ZP3RZ_cqOxoenyki6KdB0y5SYigDQpP4peId7CawwI8JWaoI5lilpe2-itZ69C9ud9w5FNfGgdHm_PwgFDwFOfKD1qJtjiLbtyVFVA-ZX93_iRspHo7ySqIVWgKwRRrw",
    color: "Icon Blue / Desert Rally",
    description: "Inspirada no Dakar, com dois tanques de combustível e foco absoluto em durabilidade mecânica.",
    longDescription: "A Ténéré 700 World Raid é a escolha definitiva para quem valoriza a simplicidade mecânica e a capacidade extrema em terrenos remotos. Equipada com o incrivelmente confiável motor CP2 de 689 cc da Yamaha, suspensão KYB de longo curso e duplo tanque de combustível de 23 litros.",
    specs: [
      { label: "Motor", value: "Bicilíndrico CP2 de 689 cc, Crossplane" },
      { label: "Potência", value: "73,4 cv a 9.000 rpm" },
      { label: "Torque", value: "6,9 kgfm a 6.500 rpm" },
      { label: "Tanque", value: "23 Litros (Duplo reservatório lateral)" },
      { label: "Painel", value: "TFT Colorido de 5 polegadas vertical" },
      { label: "Peso em Ordem", value: "220 kg" }
    ]
  },
  {
    id: "ducati-panigale-v4r",
    name: "Ducati Panigale V4 R",
    brand: "Ducati",
    year: 2024,
    mileage: "0 KM",
    price: 250000,
    category: "sport",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
    badge: "EXCLUSIVE R-SPEC",
    color: "Rosso Corsa GP Style",
    description: "A mais pura expressão de uma moto de corrida do WorldSBK homologada para a rua.",
    longDescription: "A Ducati Panigale V4 R é a joia máxima da engenharia esportiva italiana. O motor Desmosedici Stradale R de 998 cc atinge incríveis 16.500 rpm e entrega números absurdos com escapamento de corrida. Conta com asas aerodinâmicas de fibra de carbono e suspensão Öhlins pressurizada.",
    specs: [
      { label: "Motor", value: "Desmosedici Stradale R V4 a 90º, 998 cc" },
      { label: "Potência", value: "218 cv a 15.500 rpm (237 cv com escape Akrapovič)" },
      { label: "Torque", value: "11,4 kgfm a 12.000 rpm" },
      { label: "Chassi", value: "Front Frame de alumínio ultra-leve" },
      { label: "Suspensão", value: "Öhlins NPX 25/30 pressurizada dianteira" },
      { label: "Peso Seco", value: "167 kg" }
    ]
  },
  {
    id: "kawasaki-ninja-h2r",
    name: "Kawasaki Ninja H2 Carbon",
    brand: "Kawasaki",
    year: 2024,
    mileage: "0 KM",
    price: 320000,
    category: "sport",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    badge: "SUPERCHARGED",
    color: "Mirror Coated Matte Spark Black",
    description: "Motor supercharger de fábrica com pintura autorregenerativa e aerodinâmica aeroespacial.",
    longDescription: "A Ninja H2 Carbon é uma lenda viva da engenharia, com o exclusivo motor supercharged de quatro cilindros de 998 cc. Sua aceleração é brutal e incomparável, auxiliada por aletas aerodinâmicas de fibra de carbono. A pintura exclusiva possui propriedades de cicatrização automática para pequenos riscos.",
    specs: [
      { label: "Motor", value: "4 cilindros em linha com Supercharger, 998 cc" },
      { label: "Potência", value: "231 cv a 11.500 rpm (242 cv com Ram Air)" },
      { label: "Torque", value: "14,4 kgfm a 11.000 rpm" },
      { label: "Indução", value: "Supercharger centrífugo Kawasaki" },
      { label: "Freios", value: "Duplo disco Brembo Stylema de 330 mm" },
      { label: "Peso Seco", value: "215 kg" }
    ]
  },
  {
    id: "bmw-s1000rr",
    name: "BMW S 1000 RR",
    brand: "BMW",
    year: 2024,
    mileage: "0 KM",
    price: 118000,
    category: "sport",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1200&auto=format&fit=crop",
    color: "M Motorsport Motorsport Livery",
    description: "Velocidade pura refinada pela tecnologia ShiftCam e pacote aerodinâmico M.",
    longDescription: "A lendária superbike alemã vem equipada com o pacote dinâmico M Motorsport, incluindo rodas de fibra de carbono, asas integradas que geram até 17,1 kg de downforce e sistema eletrônico de controle de tração preditivo. O motor com tecnologia ShiftCam entrega excelente torque em baixas e potência avassaladora em altas.",
    specs: [
      { label: "Motor", value: "4 cilindros em linha, ShiftCam, 999 cc" },
      { label: "Potência", value: "210 cv a 13.750 rpm" },
      { label: "Torque", value: "11,5 kgfm a 11.000 rpm" },
      { label: "Eletrônica", value: "MSR, ABS Pro com Slide Control" },
      { label: "Rodas", value: "M Carbon (Opcional incluso no pacote)" },
      { label: "Peso em Ordem", value: "193,5 kg" }
    ]
  },
  {
    id: "ducati-streetfighter-v4s",
    name: "Ducati Streetfighter V4 S",
    brand: "Ducati",
    year: 2023,
    mileage: "1.500 KM",
    price: 139900,
    category: "naked",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    color: "Grey Nero / Ducati Red",
    description: "A atitude de uma naked agressiva combinada com a potência pura do motor de Superbike.",
    longDescription: "A Streetfighter V4 S é uma Panigale despida de suas carenagens, com guidão alto e largo. Seu motor Desmosedici Stradale de 1.103 cc produz uma sinfonia mecânica fantástica. Apresenta o visual agressivo inspirado no sorriso do Coringa, suspensão Öhlins Smart EC 2.0 semiativa e asas biplano.",
    specs: [
      { label: "Motor", value: "Desmosedici Stradale V4 a 90º, 1103 cc" },
      { label: "Potência", value: "208 cv a 13.000 rpm" },
      { label: "Torque", value: "12,5 kgfm a 9.500 rpm" },
      { label: "Suspensão", value: "Öhlins NIX30 semiativa eletrônica" },
      { label: "Aerodinâmica", value: "Asas biplano que geram 34kg de downforce" },
      { label: "Peso Seco", value: "178 kg" }
    ]
  },
  {
    id: "yamaha-mt09-sp",
    name: "Yamaha MT-09 SP",
    brand: "Yamaha",
    year: 2024,
    mileage: "0 KM",
    price: 69900,
    category: "naked",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=1200&auto=format&fit=crop",
    badge: "HYPER NAKED MASTER",
    color: "Liquid Metal / Raven Black",
    description: "A lendária 'Master of Torque' em sua versão máxima de pista com suspensão Öhlins.",
    longDescription: "A MT-09 SP eleva o nível da aclamada hyper-naked com suspensão dianteira KYB dourada totalmente ajustável e amortecedor traseiro Öhlins. Seu motor de três cilindros CP3 de 890 cc é famoso pela entrega instantânea de torque e ronco inconfundível. Oferece controle de cruzeiro e modos de pilotagem exclusivos de pista.",
    specs: [
      { label: "Motor", value: "Tricilíndrico CP3 de 890 cc, Crossplane" },
      { label: "Potência", value: "119 cv a 10.000 rpm" },
      { label: "Torque", value: "9,5 kgfm a 7.000 rpm" },
      { label: "Suspensão Traseira", value: "Amortecedor Öhlins com regulagem remota" },
      { label: "Quickshifter", value: "Bidirecional de 3ª geração" },
      { label: "Peso em Ordem", value: "190 kg" }
    ]
  },
  {
    id: "honda-cb1000r",
    name: "Honda CB 1000R Black Edition",
    brand: "Honda",
    year: 2023,
    mileage: "800 KM",
    price: 82900,
    category: "naked",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    color: "Graphite Black / Deep Obsidian",
    description: "Estilo Neo Sports Café minimalista com acabamento inteiramente preto.",
    longDescription: "A CB 1000R Black Edition é uma obra de arte industrial. Cada componente visível - desde os garfos dianteiros, protetores do radiador, até os detalhes do escapamento - é tratado com acabamento preto profundo anodizado ou pintado. Equipado com câmbio de engate rápido Quickshifter e motor herdado da lendária Fireblade.",
    specs: [
      { label: "Motor", value: "4 cilindros em linha, 4 tempos, 998 cc" },
      { label: "Potência", value: "141,4 cv a 10.500 rpm" },
      { label: "Torque", value: "10,6 kgfm a 8.250 rpm" },
      { label: "Visual", value: "Neo Sports Café com detalhes pretos profundos" },
      { label: "Quickshifter", value: "Ajustável em 3 níveis de sensibilidade" },
      { label: "Peso Seco", value: "201 kg" }
    ]
  }
];
