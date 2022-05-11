import React from "react";
import styled from "styled-components";

const Grid = ({
    onClick,
    onSubmit,
    children,
    is_flex,
    _ref,
    box,
    wrap,
    className,
    ...props

}) => {
    if(wrap){
        return(
            <Wrap style={{display:"flex"}}>
                <div onClick={onClick} style={{...props}}>
                    {children}
                </div>
            </Wrap>
        )
    }
    if(box){
        return(
            <SmallBox style={{display:"flex"}}>
                <div onClick={onClick} style={{...props}}>
                    {children}
                </div>
            </SmallBox>
        )
    }
    
    if(is_flex){
        return(
            <Flex ref={_ref} onClick={onClick} onSubmit={onSubmit} style={{...props}}>
                {children}
            </Flex>
        )
    }
    
    return(
            <Div className={className} onClick={onClick} style={{...props}}>
                {children}
            </Div>

    )
}

const Wrap = styled.div`
    width : 700px;
    max-width : 100%;
    min-width : 700px;
    height : ${props => props.theme.size.height};
    background-color : ${props => props.theme.mainTheme.tertiary};
    overflow : hidden;
    flex-direction : column;
    overflow : auto;
    ::-webkit-scrollbar { 
    display: none; 
    }
`;

const SmallBox = styled.div`
    width: ${(props) => props.width};
    height : 60px;
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    overflow : hidden;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    border: 1px solid black;
    position: relative;
`;


const Div = styled.div`
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    box-sizing : border-box;
`;

const Flex = styled.div`
    display : flex;
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    box-sizing : border-box;
`;


export default Grid;