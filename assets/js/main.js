import Header from "./components/Header.js";
import LateralMenu from "./components/LateralMenu.js";
import Post from "./components/Post.js";

function loadFavicon() {
	const link = document.createElement("link");
	link.rel = "icon";
	link.type = "image/png";
	link.href = "/assets/images/global/favicon.png";
	document.head.appendChild(link);
}

function loadHeader() {
	const header = new Header();
	header.createHeader();
}

function loadLateralMenu() {
	const lateralMenu = new LateralMenu();
	lateralMenu.createLateralMenu();
}

function loadPosts() {
	const post = new Post();
	post.createPosts();
	post.createPost(
		"18h27 • 18 Set 2024",
		"John Doe",
		"@john_doe99",
		"Cara, tempo de eleição é uma loucura!",
		"/assets/images/posts/receba-na-caixa.jpg"
	);
	post.createPost(
		"20h00 • 20 Set 2024",
		"Carla Dias",
		"@carla_dias",
		"Hoje tive uma experiência muito enriquecedora. Fui voluntária em um evento de arrecadação de fundos para uma ONG local que apoia crianças em situação de vulnerabilidade. Foi maravilhoso ver tantas pessoas se unindo por uma causa tão nobre. Além de ajudar na organização, tive a oportunidade de interagir com as crianças e ouvir suas histórias. Foi um lembrete importante de como pequenas ações podem fazer uma grande diferença na vida de alguém.",
		""
	);
	post.createPost(
		"08h45 • 18 Set 2024",
		"Maria Silva",
		"@maria_silva",
		"Acordei cedo para correr hoje, dia lindo!",
		""
	);
	post.createPost(
		"12h30 • 19 Set 2024",
		"Carlos Pereira",
		"@carlos_pereira",
		"Almoço em família é sempre uma boa ideia.",
		""
	);
	post.createPost(
		"17h15 • 19 Set 2024",
		"Ana Costa",
		"@ana_costa",
		"Terminando de ler um livro incrível!",
		"/assets/images/posts/terminando-livro.jpg"
	);
	post.createPost(
		"14h00 • 20 Set 2024",
		"Luiz Souza",
		"@luiz_souza",
		"Trabalhando em um novo projeto, animado para compartilhar em breve!",
		""
	);
	post.createPost(
		"09h10 • 20 Set 2024",
		"Fernanda Lima",
		"@fernanda_lima",
		"Dia de café com amigos, nada melhor.",
		"/assets/images/posts/cafe-com-amigos.jpg"
	);
	post.createPost(
		"10h30 • 19 Set 2024",
		"Bruno Fernandes",
		"@bruno_fernandes",
		"Decidi compartilhar algo mais pessoal hoje. Recentemente, comecei a aprender a tocar violão. Sempre foi um sonho meu, mas nunca tive tempo para me dedicar de verdade. Agora, com um pouco mais de organização, estou conseguindo tirar algumas horas por semana para praticar. Ainda estou no início, mas já consigo tocar algumas músicas básicas. Estou realmente animado para ver até onde posso chegar com isso.",
		""
	);
	post.createPost(
		"11h20 • 21 Set 2024",
		"João Martins",
		"@joao_martins",
		"Consegui um novo recorde na academia hoje!",
		"/assets/images/posts/academia.jpg"
	);
	post.createPost(
		"16h45 • 18 Set 2024",
		"Alice Moreira",
		"@alice_moreira",
		"Hoje foi um dia incrível! Participei de uma palestra sobre inovação tecnológica e foi extremamente inspirador. Os palestrantes compartilharam suas experiências e visões sobre o futuro da tecnologia, e me fez pensar em como posso aplicar algumas dessas ideias no meu próprio trabalho. Mal posso esperar para começar a implementar algumas mudanças!",
		""
	);
	post.createPost(
		"15h35 • 21 Set 2024",
		"Clara Mendes",
		"@clara_mendes",
		"Adotei um cachorrinho, ele é tão fofo!",
		""
	);
}

document.addEventListener("DOMContentLoaded", () => {
	loadFavicon();
	loadHeader();
	loadLateralMenu();
	loadPosts();
});
