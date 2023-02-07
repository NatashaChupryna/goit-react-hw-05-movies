import styled from '@emotion/styled'

export const Form = styled.form`
      margin-top: 30px;
      text-align: center;
`

export const Input = styled.input`
    width: 300px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #efe1e1;
    color: white;
    font-size: 18px;

    &::placeholder{
      color: white;
      font-size: 18px;

    }
`
export const SearchingButton = styled.button`
font-weight: 600;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  touch-action: manipulation;

&:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
 
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

&:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
`

export const MoviesList = styled.ul`
      display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`
export const ListItem =styled.li`
width: 300px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    align-items: center;

`