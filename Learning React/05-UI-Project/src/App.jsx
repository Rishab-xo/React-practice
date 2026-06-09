import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
  {
    img: "https://i.pinimg.com/736x/67/49/7b/67497b1987cb155ee9fed8bd7ce12158.jpg",
    intro: '',
    tag: 'Satisfied'
  },
  {
    img: "https://i.pinimg.com/1200x/51/fe/49/51fe4985b301e6667b5dbc455d278147.jpg",
    intro: '',
    tag: 'Underserved'
  },
  {
    img: "https://i.pinimg.com/1200x/5b/43/6e/5b436e3016885ea2df3cd2440dcb9139.jpg",
    intro: '',
    tag: 'Underbanked'
  },
];
  return (
    
    <div>
    <Section1 users={users}/>
    <Section2/>
    
    </div>
  )
}

export default App