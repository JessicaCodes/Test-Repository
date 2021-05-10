import './Skills.css'

const skillList = [{
        skill: 'JavaScript',
        projects: 'Calculator, Fizz Buzz, Temperature Converter',
        years: '.3',
        education: 'Nebula Academy'
    },
    {
        skill: 'Canvas',
        projects: 'Bubble Pop',
        years: '.2',
        education: 'Nebula Academy'
    },
    {
        skill: 'React',
        projects: 'Hacker Stories, Hierarchy',
        years: '.1',
        education: 'Nebula Academy'
    },
]

function Skills() {
    return skillList.map(function(item, idx) {
        return (
            <div id='skills-page' key={idx}>
                <h2 id='skill'>{item.skill}</h2>
                <span>{item.projects}</span>
                <span>{item.years}</span>
                <span>{item.education}</span>
            </div>
        )
    })
  }

  export default Skills;