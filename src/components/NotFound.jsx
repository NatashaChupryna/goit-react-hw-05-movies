import notFoundPage from '../images/notFoundPage.png'
import styled from '@emotion/styled'

export const NotFound = () =>{
    return(
        <Div>
            <h1>Page does not exist, go back to Home page</h1>
            <img src={notFoundPage} alt="" width={900}/>
        </Div>
        
    )
}

const Div = styled.div`
    text-align: center;
`