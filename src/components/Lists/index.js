
export const ListHardSkills = () => {

  const hardSkillsSVG = [
    "https://cdn.worldvectorlogo.com/logos/styled-components-1.svg",
    "https://cdn.worldvectorlogo.com/logos/scrumorg-1.svg",
    "https://cdn.worldvectorlogo.com/logos/bem.svg",
    "https://cdn.worldvectorlogo.com/logos/prettier-1.svg",
    "https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",
    "https://avatar-prod-us-east-2.webexcontent.com/Avtr~V1~2de41b4b-c986-4d60-a0c5-3e346c98de34/V1~14363c25c4230c54e02ae7416216600b0aee35b05c257a00152830492f4d581b~c5a9036392714767b9a63e7f2d796a53?quarantineState=evaluating",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
    "https://cdn.cdnlogo.com/logos/v/78/vercel.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
  ];

  return (
    <ul className="skills__box__list">
      {hardSkillsSVG.map((skill) => (
        <li className="list__item">
          <figure>
            <img src={skill} alt={skill} />
          </figure>
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