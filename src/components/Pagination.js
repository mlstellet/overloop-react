import React from "react";
import styled from "styled-components";

const Nav = styled.section`
    display: flex;
    justify-content: center;
    margin: 100px 0 50px;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    max-width: 100%;
`

const Itens = styled.li`
    position: relative;
    border: none;
    background-color: #F05454;
    padding: 20px 20px;
    
    display: inline-block;
    margin: 6px 10px;
    border-radius: 50%;
    max-width: 100%;

    .color {
        background-color: #222831;
    }
`

const A = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    color: #fff;
    font-size: 16px;
    text-align: center;
    text-decoration: none;

    background-color: #F05454;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:focus {
        outline: none;
        background-color: #222831;
    }
`


export default function Pagination({ postPerPage, totalPosts, paginate }) {
    const pageNumbers = []
    let buttons = undefined

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    // após renderizar a tela
    React.useEffect(() => {
        buttons = document.querySelectorAll('.butPagina')
        console.log(buttons)
    })

    const clicado = (e, i) => {
        paginate(i+1)
        buttons.forEach(button => {
            button.classList.remove('escolhido')
        })
        e.target.classList.add('escolhido')
    }

    return (
        <Nav>
            <Ul>
                {Array.apply(0, Array(pageNumbers.length)).map((x, i) => {
                    console.log("X:" + x,"I:" + i)
                    if (i === 0) {
                        return (
                            <Itens key={i}>
                                <A href="#" onClick={(e) => {clicado(e, i)}} autofocus="true" className="butPagina escolhido">
                                    {i+1}
                                </A>
                            </Itens>
                        )  
                    }
                    return (
                        <Itens key={i}>
                            <A href="#" onClick={(e) => {clicado(e, i)}} className="butPagina">
                                {i+1}
                            </A>
                        </Itens>
                    )
                })}
            </Ul>
        </Nav>
    )
}
