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
    border: none;
    background-color: #F05454;
    padding: 10px 15px;
    
    display: inline-block;
    margin: 6px 10px;
    border-radius: 50%;
    cursor: pointer;
    max-width: 100%;
`

const A = styled.a`
    width: 100%;
    height: 100%;
    border-radius: 50%;

    color: #fff;
    font-size: 16px;
    text-align: center;
    text-decoration: none;

    cursor: pointer;
`

export default function Pagination({ postPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    // listObjs.push(Object.assign({}, pageNumbers));

    console.log(pageNumbers)
    console.log(postPerPage, totalPosts)
    return (
        <Nav>
            <Ul>
                {Array.apply(0, Array(pageNumbers.length)).map((x, i) => {
                    console.log("X:" + x,"I:" + i)
                    return (
                        <Itens key={i}>
                            <A href="#" onClick={() => paginate(i+1)}>
                                {i+1}
                            </A>
                        </Itens>
                    )
                })}
                {/* {pageNumbers.forEach((number) => {
                    {console.log(number)}
                    <Itens key={number}>
                        <a href="#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </Itens>
                })} */}
            </Ul>
        </Nav>
    )
}
