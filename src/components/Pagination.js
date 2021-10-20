import React from "react";
import styled from "styled-components";

const Nav = styled.section`
    display: flex;
    justify-content: center;
    margin: 50px 0 100px;
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
    color: #fff;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
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
                {/* for (let number of pageNumbers) {
                    <Itens>
                        <a href="#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </Itens>
                } */}
                {Array.apply(0, Array(pageNumbers.length)).map((x, i) => {
                    console.log("X:" + x,"I:" + i)
                    return (
                        <Itens key={i}>
                            <a href="#" onClick={() => paginate(i+1)}>
                                {i+1}
                            </a>
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
