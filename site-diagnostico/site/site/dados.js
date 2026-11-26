// Cada exame: sistema, título, imagem e respostas (a, b, c, d).
// Planos: coronal -> eixo ântero-posterior | sagital -> eixo látero-lateral | transversal -> eixo longitudinal
const exames = [
 {n:1, sis:"Esquelético", t:"RX PA da mão e punho", img:"image1.png", a:"Coronal (frontal)", b:"Ântero-posterior (sagital)", c:"Membro superior – região do punho (carpo)", d:"Extremidade distal do rádio (osso, região radiocarpal)"},
 {n:2, sis:"Esquelético", t:"RM T2 da coluna lombar", img:"image2.png", a:"Sagital", b:"Látero-lateral (transversal)", c:"Coluna vertebral – região lombar", d:"Corpo vertebral lombar (tecido ósseo)"},
 {n:3, sis:"Muscular", t:"RM T1 da coxa direita", img:"image3.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Membro inferior – região femoral anterior (coxa)", d:"Músculo quadríceps femoral (compartimento anterior da coxa)"},
 {n:4, sis:"Muscular", t:"RM do ombro esquerdo", img:"image4.png", a:"Coronal (frontal)", b:"Ântero-posterior (sagital)", c:"Cíngulo do membro superior – região deltóidea (ombro)", d:"Músculo deltoide"},
 {n:5, sis:"Nervoso", t:"RM T2 do encéfalo", img:"image5.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Cabeça – região craniana (cérebro, lobo frontal)", d:"Corno anterior do ventrículo lateral (preenchido por líquor)"},
 {n:6, sis:"Nervoso", t:"RM T1 do encéfalo", img:"image6.png", a:"Sagital (mediano)", b:"Látero-lateral (transversal)", c:"Cabeça – fossa posterior do crânio", d:"Cerebelo"},
 {n:7, sis:"Nervoso", t:"TC sem contraste do crânio", img:"image7.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Cabeça – região craniana, linha média do cérebro", d:"Corno anterior dos ventrículos laterais / septo pelúcido"},
 {n:8, sis:"Cardiovascular", t:"RX PA do tórax", img:"image8.png", a:"Coronal (frontal)", b:"Ântero-posterior (sagital)", c:"Tórax – mediastino médio, à esquerda da linha mediana", d:"Coração (ventrículo esquerdo)"},
 {n:9, sis:"Cardiovascular", t:"Angio-TC do tórax", img:"image9.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Tórax – mediastino médio", d:"Aorta ascendente"},
 {n:10, sis:"Respiratório", t:"TC do tórax (janela pulmonar)", img:"image10.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Tórax – hilo do pulmão direito", d:"Brônquio / hilo pulmonar direito"},
 {n:11, sis:"Respiratório", t:"RX de perfil do tórax", img:"image11.png", a:"Sagital", b:"Látero-lateral (transversal)", c:"Tórax – região posterior (cavidade pleural)", d:"Parênquima pulmonar (região posterior)"},
 {n:12, sis:"Digestório", t:"TC do abdome superior", img:"image12.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Abdome – hipocôndrio direito", d:"Fígado (lobo direito)"},
 {n:13, sis:"Digestório", t:"TC multiplanar do abdome", img:"image13.png", a:"Coronal (frontal)", b:"Ântero-posterior (sagital)", c:"Abdome – hipocôndrio esquerdo", d:"Estômago"},
 {n:14, sis:"Urinário", t:"TC do abdome e retroperitônio", img:"image14.png", a:"Coronal (frontal)", b:"Ântero-posterior (sagital)", c:"Retroperitônio – região lombar esquerda", d:"Rim esquerdo"},
 {n:15, sis:"Urinário", t:"RM T2 da pelve feminina", img:"image15.png", a:"Sagital (mediano)", b:"Látero-lateral (transversal)", c:"Pelve – região hipogástrica (suprapúbica)", d:"Bexiga urinária"},
 {n:16, sis:"Reprodutor", t:"RM T2 da pelve feminina", img:"image16.png", a:"Sagital (mediano)", b:"Látero-lateral (transversal)", c:"Pelve – cavidade pélvica, posterior à bexiga", d:"Útero"},
 {n:17, sis:"Tecidos fundamentais", t:"TC sem contraste do abdome", img:"image17.png", a:"Transversal (axial)", b:"Longitudinal (vertical)", c:"Parede torácica/abdominal lateral direita", d:"Costela (tecido ósseo)"},
 {n:18, sis:"Tecidos fundamentais", t:"RM T2 da coluna lombar", img:"image18.png", a:"Sagital", b:"Látero-lateral (transversal)", c:"Coluna vertebral – região lombar", d:"Disco intervertebral (tecido conjuntivo fibrocartilaginoso)"}
];
