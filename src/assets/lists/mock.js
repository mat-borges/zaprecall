const recallJS = [
	{
		question: 'O que é JSX?',
		answer: 'Uma extensão de linguagem do JavaScript',
	},
	{
		question: 'O React é __',
		answer: 'uma biblioteca JavaScript para construção de interfaces',
	},
	{
		question: 'Componentes devem iniciar com __',
		answer: 'letra maiúscula',
	},
	{
		question: 'Podemos colocar __ dentro do JSX',
		answer: 'expressões',
	},
	{
		question: 'O ReactDOM nos ajuda __',
		answer: 'interagindo com a DOM para colocar componentes React na mesma',
	},
	{
		question: 'Usamos o npm para __',
		answer: 'gerenciar os pacotes necessários e suas dependências',
	},
	{
		question: 'Usamos props para __',
		answer: 'passar diferentes informações para componentes',
	},
	{
		question: 'Usamos estado (state) para __',
		answer:
			'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
	},
];

const recallRandom = [
	{
		question: 'Biscoito ou bolacha?',
		answer: 'Bolacha... obviamente',
	},
	{
		question: 'Começar a coxinha pela parte maior ou menor?',
		answer: 'De novo, menor, obviamente...',
	},
	{
		question: 'Toddy ou nescau?',
		answer: 'Toddy!',
	},
	{
		question: 'BK ou Mc',
		answer: 'BK pela batata',
	},
	{
		question: 'Ketchup na pizza?',
		answer: 'NÃO, porém de vez em quando sim',
	},
	{
		question: 'Batata frita com sorvete?',
		answer: 'Tem gosto pra tudo na vida',
	},
	{
		question: 'Acabaram as ideias',
		answer: 'Boa sorte',
	},
	{
		question: 'Ainda sem ideias',
		answer: 'Fim!',
	},
];

const testDeck = [
	{
		question: 'Isso é um flashcard?',
		answer: 'Sim',
	},
	{
		question: 'E isso? é Um flashcard?',
		answer: 'Talvez',
	},
	{
		question: 'Esse é o último flashcard?',
		answer: 'Sim, e eu claramente errei o conceito de recall, acontece',
	},
];

const decks = [[''], recallJS, recallRandom, testDeck];
export const options = [
	{ label: '' },
	{ label: 'recallJS' },
	{ label: 'recallRandom' },
	{ label: 'testDeck' },
];

export default decks;
