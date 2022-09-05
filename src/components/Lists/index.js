
export const ListHardSkills = () => {

  const hardSkillsSVG = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML5",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS3",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/bem.svg",
      title: "CSS BEM",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      title: "SASS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      title: "JavaScript ES6+",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/styled-components-1.svg",
      title: "Styled Components",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      title: "Material UI",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
      title: "PostgreSQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      title: "Express.JS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.JS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      title: "Firebase",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      title: "TypeScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      title: "Linux Ubuntu",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",
      title: "Microsoft Windows",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
      title: "VS Code",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      title: "GitHub",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
      title: "Yarn",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/prettier-1.svg",
      title: "Prettier",
    },
    {
      icon:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
      title: "ESLint",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
      title: "LATEX",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
      title: "Markdown",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/scrumorg-1.svg",
      title: "SCRUM",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      title: "Slack",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      title: "Trello",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
      title: "Jira Software",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
      title: "Heroku",
    },
    {
      icon: "https://cdn.cdnlogo.com/logos/v/78/vercel.svg",
      title: "Vercel",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-plain.svg",
      title: "Behance",
    },
    {
      icon: "https://avatar-prod-us-east-2.webexcontent.com/Avtr~V1~2de41b4b-c986-4d60-a0c5-3e346c98de34/V1~14363c25c4230c54e02ae7416216600b0aee35b05c257a00152830492f4d581b~c5a9036392714767b9a63e7f2d796a53?quarantineState=evaluating",
      title: "Excalidraw",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      title: "Figma",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      title: "Canva",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      title: "PhotoShop CS6",
    },
  ];

  return (
    <ul className="skills__box__list">
      {hardSkillsSVG.map((skill) => (
        <li className="list__item">
          <figure>
            <img src={skill.icon} alt={skill.title} />
          </figure>
          <span>{skill.title}</span>
        </li>
      ))}
    </ul>
  )
}

export const ListSoftSkills = () => {

  const softSkills = [
    {
      icon: "https://img.icons8.com/office/344/comments.png",
      title: "Comunicação eficaz",
    },
    {
      icon: "https://img.icons8.com/office/344/rebalance-portfolio.png",
      title: "Gestão de tempo",
    },
    {
      icon: "https://img.icons8.com/office/344/goal--v1.png",
      title: "Solução de problemas",
    },
    {
      icon: "https://img.icons8.com/office/452/group-task.png",
      title: "Trabalho em equipe",
    },
    {
      icon: "https://img.icons8.com/office/344/handshake.png",
      title: "Flexiblidade e adaptabilidade",
    },
    {
      icon: "https://img.icons8.com/office/344/planner.png",
      title: "Organização e planejamento",
    },
    {
      icon: "https://img.icons8.com/office/344/trust.png",
      title: "Autoconfiança",
    },
    {
      icon: "https://img.icons8.com/office/344/ratings.png",
      title: "Atitude positiva",
    },
    {
      icon: "https://img.icons8.com/office/344/pencil--v1.png",
      title: "Escrita",
    },
    {
      icon: "https://img.icons8.com/office/344/manager.png",
      title: "Empatia",
    },
    {
      icon: "https://img.icons8.com/office/344/collaboration.png",
      title: "Resiliência",
    },
    {
      icon: "https://img.icons8.com/office/344/meeting.png",
      title: "Colaboração",
    },
    {
      icon: "https://img.icons8.com/office/344/school-director-male-skin-type-4.png",
      title: "Liderança",
    },
    {
      icon: "https://img.icons8.com/office/344/project-setup.png",
      title: "Visão geral",
    },
  ];

  return (
    <ul className="skills__box__list">
    {softSkills.map((skill) => (
      <li className="list__item item--soft__skills">
        <figure>
          <img src={skill.icon} alt={skill.title} />
        </figure>
        <span>{skill.title}</span>
      </li>
    ))}
  </ul>
  )
}