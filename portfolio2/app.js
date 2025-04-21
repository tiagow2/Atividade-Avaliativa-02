const express = require("express");
const app = express();
const path = require("path");
const { title } = require("process");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Meu Portfólio",
    navItems: [
      { name: "INTRO", link: "#Intro" },
      { name: "ABOUT", link: "#About" },
      { name: "SKILLS", link: "#Skills" },
      { name: "MY PROJECTS", link: "#My Projects" },
      { name: "CONTACTS", link: "#Contacts" }
    ],
    header: {
      image: "/img/Tiago.jpeg",
      title: "Tiago dos Santos Freitas",
      subtitle: "Systems Development Technician passionate about technology",
      cvLink: "/Currículo-Tiago-Freitas.pdf"
    },
    about: {
      text: "Sou um profissional formado como Técnico em Desenvolvimento de Sistemas, movido pela paixão por tecnologia e inovação. Atualmente, estou cursando <strong>Desenvolvimento de Software Multiplataformas</strong> na <strong>Fatec de São José dos Campos</strong>, uma das instituições mais renomadas da área, onde estou aprimorando minhas habilidades e aprofundando meus conhecimentos em soluções tecnológicas modernas." +
"Minha formação técnica me proporcionou uma base sólida em desenvolvimento de sistemas, com foco em lógica de programação, banco de dados e infraestrutura. Com a graduação, estou expandindo minha expertise para incluir o desenvolvimento de aplicativos multiplataformas, adaptados às     crescentes demandas do mercado digital. Isso me capacita a criar soluções eficientes e escaláveis para diferentes plataformas, sejam elas móveis, web ou desktop." +
"Ao longo da minha trajetória acadêmica e profissional, tenho me dedicado a estar sempre  atualizado com as novas tecnologias e práticas do mercado, como metodologias ágeis, desenvolvimento em cloud, frameworks modernos e boas práticas de desenvolvimento. Estou constantemente explorando linguagens de programação, novas ferramentas e padrões emergentes, com o objetivo de aprimorar a qualidade dos projetos em que atuo e entregar soluções robustas e inovadoras. " +
"Além disso, valorizo muito a capacidade de aprender e me adaptar rapidamente às novas tendências e exigências tecnológicas, buscando sempre desafios que me impulsionem a crescer tanto tecnicamente quanto pessoalmente. Acredito que o constante aprendizado e a curiosidade são os  principais motores para o sucesso em um ambiente de tecnologia em constante transformação."
    },
    project1: {
      tittle: " Bom do Vale",
      challenge: " Criar um e-commerce 'funcional'.",
      technologiesUsed: " Python, Flask, HTML/CSS, JavaScript e Jira.",
      result: " Conseguimos construir um site para um comércio de mel.",
      videoLink: "/Mídia1.mp4"
    },
    project2: {
      descrition: " Esse projeto colhe os dados fornecidos pelo site da prefeitura a respeito das proposições, assiduidade, participação em comissões de cada vereador de forma interativa e fácil de se entender.",
      technologiesUsed: " Python, Flask, HTML/CSS, JavaScript, MYSQL e Jira.",
      challenge: " Fazer um site interativo que facilite a busca de informações sobre os vereadores da cidade de São José dos Campos.",
      solution: " Fizemos um site usando html, css, python e banco de dados para colher as informações e transformar a expêriencia de pesquisa sobre vereadores muito mais prática e dinâmica.",
      videoLink: "/videoplayback.mp4"
    },
  skills: [
  { id: "python", name: "Python" },
  { id: "mysql", name: "MySQL" },
  { id: "flask", name: "Flask" },
  { id: "github", name: "GitHub" },
  { id: "git", name: "Git" },
  { id: "bootstrap", name: "Bootstrap" },
  { id: "javascript", name: "JavaScript"},
  { id: "typescript", name: "TypeScript"}
],
contacts: [
  {
    nome: "LinkedIn",
    link: "https://www.linkedin.com/in/tiago-freitas-74730b2a9/",
    platform: "linkedin"
  },
  {
    nome: "Email",
    link: "mailto:tiago.bala02@gmail.com",
    platform: "email"
  },
  {
    nome: "GitHub",
    link: "https://github.com/tiagow2",
    platform: "github"
  }
]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
