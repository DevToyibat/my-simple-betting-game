// FIRST you import
import React, {Fragment, useState, useEffect} from 'react'
import Styled from "styled-components"
// the Styled strting with caps should tally with the css styling

// SECOND you declare and initialize your functions and variables
// make sure GameSreen and export GameScree starts with capital letter
const GameScreen = () => {

    const[userInput,setUserInput] = useState(0)
    const[compInput, setCompInput] = useState(0)

    const compRandom = ()=>{
        setCompInput((Math.floor(Math.random() * 5)))
        // math.random shows lengthy random in decimals but here nos between 1 to 5
        // math.floor rounds down to a whole number
        // math.ceil rounds up to a whole number
    }

    useEffect(()=>{
        // you always call back useEffect  (()=>{})
        // useEffect helps with continuation e.g, timer, intervals
        setInterval(()=>{
            compRandom();
        },5000)
        // setInterval to select randomly within every 5 secs
        compRandom()
    },[])

    // THIRD you return how you want it to be displayed on the screen
    return (
        <Fragment>
            <Container>
                <ContainerWrapper>
                    <WrapperName>
                        TOYEEBAH'S GAME
                    </WrapperName>
                    <WrapperRow>
                        <WrapperRowMe>
                            <BoxMe>{userInput}</BoxMe>
                            <NumberBox>
                                <Number onClick = {()=>setUserInput(1)}>1</Number>
                                <Number onClick = {()=>setUserInput(2)}>2</Number>
                                <Number onClick = {()=>setUserInput(3)}>3</Number>
                                <Number onClick = {()=>setUserInput(4)}>4</Number>
                                <Number onClick = {()=>setUserInput(5)}>5</Number>
                            </NumberBox>
                            <BoxMeText>Taibat</BoxMeText>
                        </WrapperRowMe>
                        <WrapperRowComp>
                            <BoxComp>{compInput}</BoxComp>
                            {/* the first const should be put in return to be displayed on */}
                            <BoxCompText>Computer</BoxCompText>
                        </WrapperRowComp>
                    </WrapperRow>
                    <Result>{ userInput === compInput ? <span> You Win! </span>: <span> You Lose</span>}</Result>
                    {/* the tenary condition inplace of if/else condition */}
                </ContainerWrapper>
            </Container>
            {/* you dont need put in div because of styled component */}
            {/* your classname Container should start with capital letter */}
        </Fragment>
    )
}

//  if(userInput === compInput){
//     return(
//         <span>You win</span>
//     )
// }

// else{
//     return(
//         <span> you lose</span>
//     )
// }

// FOURTH you export
export default GameScreen

// FIFTH you style the variable names
// whatever to be styled should be inside backtick simialr to css
// tge Styled starting with cap should tally with its import
const Container = Styled.div`


width: 100%;
height: 100%;
min-height: 100vh;
background-color: powderblue;
`

const ContainerWrapper = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;

`
const WrapperName = Styled.div`
padding: 30px 0;
font-size: 50px;
font-weight: bold;
margin-bottom: 20px;
`
const WrapperRow = Styled.div`
display: flex;
justify-content: space-between;
width: 50%;
flex-wrap: wrap;

`
const WrapperRowMe = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;

`
const WrapperRowComp = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
`

const BoxMe = Styled.div`
width: 250px;
height: 200px;
background-color: teal;
display: flex;
justify-content: center;
align-items: center;
font-size: 19px;
border-radius: 7px;
cursor: pointer;
`

const BoxMeText = Styled.div`
font-size: 20px;
padding: 10px 0;
`

const BoxComp = Styled.div`
width: 250px;
height: 200px;
background-color: teal;
justify-content: center;
align-items: center;
display: flex;
font-size: 19px;
border-radius: 7px;
cursor: pointer;
`

const BoxCompText = Styled.div`
font-size: 20px;
padding: 10px 0;

`

const Result = Styled.div`
width: 200px;
padding: 15px;
background-color: white;
text-align: center;
font-size: 19px;
border-radius: 7px;
cursor: pointer;

`
const NumberBox = Styled.div`
display: flex;

`

const Number = Styled.div`
font-size: 19px;
padding: 4px 10px;
background: white;
margin: 8px 4px;
border-radius: 50px;
cursor: pointer;
`