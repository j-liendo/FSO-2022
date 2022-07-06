const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part}: {props.exercises}
      </p>
    </div>
    )
}

const Content = (props) => {
  console.log(props.info[0].part);
  return (
    <div> 
      <Part part={props.info[0].part} exercises={props.info[0].exercises}/>
      <Part part={props.info[1].part} exercises={props.info[1].exercises}/>
      <Part part={props.info[2].part} exercises={props.info[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.info[0].exercises+props.info[1].exercises+props.info[2].exercises}</p>
    </div>
  )
}

const App = () => {
  // const-definition
  const course = 'Half Stack application development'
  // I'm use an array to save the info contents
  const content = [
    {
      part: 'Half Stack application development',
      exercises: 10, 
    },
    {
      part: 'Using props to pass data',
      exercises: 7, 
    },
    {
      part: 'State of a component',
      exercises: 14, 
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content info={content} />
      <Total info={content}/>
    </div>
  )
}

export default App
